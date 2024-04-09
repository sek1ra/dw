<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
use Bitrix\Main\Loader;
Loader::includeModule('iblock');

$APPLICATION->SetTitle("Профиль");

if (!$USER->IsAuthorized()) {
	LocalRedirect('/login/');
}

global $USER;
$rsUser = CUser::GetByID($USER->GetID());
$arUser = $rsUser->Fetch();

if( isset( $_REQUEST['logout'] ) ) {
    $APPLICATION->RestartBuffer();
    $USER->Logout();
    LocalRedirect('/');
    die;
}

if( !$arUser ) {
    LocalRedirect('/login/');
}

if( !empty( $_GET['delete'] ) ) {
    //Удаляем проекты
    $projectsFilter = array( 
        'IBLOCK_ID' => 5, 'ACTIVE' => 'Y',
        'PROPERTY_USERID' => $USER->GetID(), '!ID' => Array( $projectElement['ID'] )
    );
    $projectsItems = CIBlockElement::GetList( 
        array('SORT' => 'ASC'), 
        $projectsFilter, 
        false, 
        false, 
        array('ID')
    );
    while ($projectItem = $projectsItems->GetNext()) {
        deleteProject( $projectItem['ID'] );
    }
    //Удаляем услуги
    deleteServices( $USER->GetID() );
    //Удаляем пользователя
    CUser::Delete( $USER->GetID() );

    LocalRedirect('/');
}

//Получаем все услуги
$servicesFilter = array( 'IBLOCK_ID' => 6, 'ACTIVE' => 'Y' );
$servicesItems = CIBlockElement::GetList( 
    array('SORT' => 'ASC'),
    $servicesFilter,
    false,
    false,
    array('ID', 'NAME')
);
//Сохраняем в массив для дальнейшего использования
$serviceIds = [];
$servicesData = [];
while ($serviceItem = $servicesItems->GetNext()) {
    $serviceIds[]=$serviceItem['ID'];
    $servicesData[]=$serviceItem;
}


$projectElement = false;
$servicesList = [];
$currentProjectId = 0;
$maxImagePosition = 0;

//Проверяем задан ли проект
if( !empty( $_REQUEST['projectid'] ) ) {
    $arSelect = Array(
        "ID", "NAME", "PROPERTY_USERID", "PROPERTY_GALLERY", "DETAIL_TEXT",
        "PROPERTY_CLIENT_NAME", "PROPERTY_CLIENT_DESC"
    );
    $arFilter = Array( "IBLOCK_ID" => 5, "ID" => intval( $_REQUEST['projectid'] ), "ACTIVE"=>"Y" );
    $res = CIBlockElement::GetList(Array(), $arFilter, false, Array("nPageSize"=>50), $arSelect);
    $projectElement = $res->GetNextElement();
    //Если проект не принадлежит текущему пользователю
    if( $projectElement->fields['PROPERTY_USERID_VALUE'] != $USER->GetID() ) {
        LocalRedirect('/profile/');
    }

    $projectElement = $projectElement->fields;
    $currentProjectId = $projectElement['ID'];

    //Удаляем проект
    if( !empty($_GET['deleteproject']) ) {
        if (!deleteProject($currentProjectId)) {
            die('Ошибка при удалении основного элемента');
        } else {
            LocalRedirect('/profile/');
        }
    }

    $res = CIBlockElement::GetProperty( 5, $projectElement['ID'], array(), array("CODE" => "GALLERY") );
    $galleryImages = [];
    $galleryValues = [];
    while ($arProperty = $res->Fetch()) {
        if ($arProperty['PROPERTY_TYPE'] == 'F' && $arProperty['VALUE']) {
            $fileArray = CFile::GetFileArray($arProperty['VALUE']);
            $galleryValues[]=$arProperty['VALUE'];
            if ($fileArray) {
                $galleryImages[] = $fileArray;
            }
        }
    }

    $res = CIBlockElement::GetProperty(
        5,
        $projectElement['ID'],
        array(),
        array("CODE" => "SERVICES")
    );
    while ($arProperty = $res->Fetch()) {
        if ($arProperty['PROPERTY_TYPE'] == 'E' && $arProperty['VALUE']) {
            $servicesList[]=$arProperty['VALUE'];
        }
    }
}

//Обрабатываем формы
if( isset( $_POST['ajax'] ) && $_POST['ajax'] == 1 ) {
    $APPLICATION->RestartBuffer();
    $allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
    $maxFileSize = 1024*1024;//5242880; //5MB
    $messages = '';
    $resId = 0;
    $redirectId = 0;
    $profileImage = '';
    $resImgs = '';

    //Удаляем изображение проекта
    if( !empty($_POST['deleteimage']) ) {
        $dbProps = CIBlockElement::GetProperty(5, $currentProjectId, 'sort', 'asc', ['CODE' => 'GALLERY']);
        $arr = [];
        while ($arItem = $dbProps->Fetch()) {
            //Если это то изображение, которое нужно удалить
            if ($arItem['VALUE'] == $_POST['deleteimage']) {
                $fileData = CFile::GetFileArray($arItem['VALUE']);
                \CFile::Delete($arItem['VALUE']);
                $new_make_file = [ "del" => "Y" ];
                CIBlockElement::SetPropertyValueCode(
                    92,
                    'GALLERY',
                    Array ($arItem['PROPERTY_VALUE_ID'] => Array("VALUE"=>$new_make_file) )
                );
            }
        }
        //вернем ID изображения, которое удалили
        $profileImage = $_POST['deleteimage'];
    }
    //Обрабатываем форму проекта
    if( !empty($_POST['project_name']) ) {
        $services = [];
        foreach( $_POST['project_services'] as $serviceId ) {
            $services[]=$serviceId;
        }
        $fields = [
            'IBLOCK_ID' => 5,
            'NAME' => $_POST['project_name'],
            'DETAIL_TEXT' => $_POST['project_desc'],
            'PROPERTY_VALUES' => [
                'USERID' => $USER->GetID(),
                'CLIENT_NAME' => $_POST['project_client'],
                'CLIENT_DESC' => $_POST['project_client_desc'],
                'SERVICES'  => $services
            ],
        ];
        $element = new CIBlockElement();
        if( $projectElement ) {
            $elementId = $element->Update( $projectElement['ID'], $fields );
            $resId = $elementId;
        } else {
            $elementId = $element->Add($fields);
            $currentProjectId = $resId = $redirectId = $elementId;
        }
    }

    //Заданы фотографии проекта
    $imagesLoaded = 0;
    if( !empty( $galleryImages ) ) {
        $imagesLoaded = sizeof( $galleryImages );
    }
    if( !empty( $_FILES['projectimages'] ) && $currentProjectId > 0 ) {
        $filesArray = $_FILES['projectimages'];
        if (!empty($filesArray['tmp_name'])) {
            $allowToLoadCount = min(count($filesArray['tmp_name']), 20 - $imagesLoaded);

            $imgIds = [];
            for ($i = 0; $i < $allowToLoadCount; $i++) {
                $fileArray = CFile::MakeFileArray($filesArray['tmp_name'][$i]);
                $fileArray['name'] = $filesArray['name'][$i];
                $fileId = CFile::SaveFile($fileArray, "usersprojects");
                if ($fileId) {
                    $imgIds[]=$fileId;
                    //CIBlockElement::SetPropertyValueCode($currentProjectId, 'GALLERY', [$fileId]);
                    //$maxImagePosition += 10;
                    //$orderValue = ($maxImagePosition + 1) * $galleryOrder; // Устанавливаем увеличивающийся порядок
                }
            }
            if( !empty( $imgIds ) ) {
                CIBlockElement::SetPropertyValues($currentProjectId, 5, $imgIds, 'GALLERY');
            }
        }
        $res = CIBlockElement::GetProperty( 5, $projectElement['ID'], array(), array("CODE" => "GALLERY") );

        while ($arProperty = $res->Fetch()) {
            if ($arProperty['PROPERTY_TYPE'] == 'F' && $arProperty['VALUE']) {
                $fileArray = CFile::GetFileArray($arProperty['VALUE']);
                if ($fileArray) {
                    $resizedImage = CFile::ResizeImageGet(
                        $fileArray['ID'], 
                        array('width' => 300, 'height' => 200), 
                        BX_RESIZE_IMAGE_PROPORTIONAL,
                        true
                    );
                    
                    $resImgs .= '<a data-imgid="'.$fileArray['ID'].'" href="#"><img src="'.$resizedImage['src'].'"></a>';
                }
            }
        }
    }
    if( isset( $_FILES['profileimage'] ) ) {
        if (!isset($_FILES['profileimage']) || !is_uploaded_file($_FILES['profileimage']['tmp_name'])) {
            $messages='Ошибка загрузки файла';
        } else {
            $uploadedFile = $_FILES['profileimage'];
            if ($uploadedFile['error'] !== UPLOAD_ERR_OK) {
                $messages='Ошибка при загрузке файла: ' . $uploadedFile['error'];
            } else {
                if ($uploadedFile['size'] > $maxFileSize) {
                    $messages='Файл слишком большой. Максимальный размер: 5 МБ';
                } else {
                    if (!in_array($uploadedFile['type'], $allowedFileTypes)) {
                        $messages='Недопустимый тип файла. Разрешены только изображения в форматах JPEG, PNG и GIF';
                    } else {
                        $user = new CUser;
                        $userFields = [
                            'PERSONAL_PHOTO' => [
                                'name' => $uploadedFile['name'],
                                'type' => $uploadedFile['type'],
                                'tmp_name' => $uploadedFile['tmp_name'],
                                'MODULE_ID' => 'main',
                            ]
                        ];
                        $res = $user->Update($USER->GetID(), $userFields);

                        if( $res ) {
                            //$messages ='Данные сохранены';

                            $locRsUser = CUser::GetByID($USER->GetID());
                            $locArUser = $locRsUser->Fetch();

                            $resizedUserImage = CFile::ResizeImageGet(
                                $locArUser['PERSONAL_PHOTO'],
                                array('width' => 400, 'height' => 400),
                                BX_RESIZE_IMAGE_EXACT,
                                false
                            );
                            $profileImage = $resizedUserImage['src'];
                        } else {
                            $messages = $user->LAST_ERROR;
                        }
                    }
                }
            }
        }

        $fileData = CFile::GetFileArray($arUser['PERSONAL_PHOTO']);
        $resizedUserImage = CFile::ResizeImageGet(
            $fileData,
            array('width' => 400, 'height' => 400),
            BX_RESIZE_IMAGE_EXACT,
            false
        );
        if ($fileData) {
            $profileImage = $resizedUserImage['src'];
        }
    }

    if( isset( $_POST['profilename'] ) ) {
        $user = new CUser;
        $userFields = [
            'NAME' => $_POST['profilename'],
            'LAST_NAME' => $_POST['profilesurname'],
            'WORK_NOTES' => $_POST['profiledescription'],
            'WORK_PHONE' => $_POST['profilecontacts']
        ];
        $res = $user->Update($USER->GetID(), $userFields);
        if( $res ) {
            //$messages ='Данные сохранены';
        } else {
            $messages = $user->LAST_ERROR;
        }
    }

    if( !empty( $_POST['services'] ) ) {
        //удаляем все услуги пользователя
        $arFilter = array(
            'IBLOCK_ID' => 7,
            'PROPERTY_USER' => $USER->GetID()
        );
        $rsItems = CIBlockElement::GetList( array(), $arFilter, false, false, array('ID') );
        while ($arItem = $rsItems->Fetch()) {
            CIBlockElement::Delete($arItem['ID']);
        }
        foreach( $_POST['services']['service'] as $servKey => $servicesItem ) {
            if( $servicesItem > 0 && in_array( $servicesItem, $serviceIds ) ) {
                $fields = [
                    'IBLOCK_ID' => 7,
                    'NAME' => $arUser['NAME'].' - '.$servicesItem,
                    'DETAIL_TEXT' => $_POST['services']['desc'][$servKey],
                    'PROPERTY_VALUES' => [
                        'SERVICE'       => $_POST['services']['service'][$servKey],
                        'USER'          => $USER->GetID(),
                        'DAYSMIN'       => $_POST['services']['daymin'][$servKey],
                        'DAYSMAX'       => $_POST['services']['daymax'][$servKey],
                        'PRICEMIN'      => $_POST['services']['pricemin'][$servKey],
                        'PRICEMAX'      => $_POST['services']['pricemax'][$servKey],
                    ],
                ];
                $element = new CIBlockElement();
                $elementId = $element->Add($fields);
            }
        }
    }
  
    echo json_encode( 
        Array(
            'message' => $messages,
            'resid' => $resId,
            'redirectid' => $redirectId,
            'profileimage'  => $profileImage,
            'profileimages' => $resImgs
        )
    );
    die;
}


?>
<div id="result"></div>
<main>
    <section>
        <div class="profile-page">
            <div class="title-wrapper">
                <h1>Профиль</h1>
                <div class="links">
                    <a href="#" class="showwindow" data-windowname="profile-logout-window">Выйти из профиля</a>
                    <a href="#" class="showwindow" data-windowname="profile-delete-window">Удалить профиль</a>
                </div>
            </div>
            <div class="cols">
                <div class="col">
                    <label for="main-photo" class="profile-title">Загрузить фото</label>
                    <div class="load-photo">
                        <form action="" class="profileform __vprofileform">
                            <?php
                            $imgCode = '';
                            if (!empty($arUser['PERSONAL_PHOTO']) && $arUser['PERSONAL_PHOTO'] > 0) {
                                $fileData = CFile::GetFileArray($arUser['PERSONAL_PHOTO']);
                                $resizedUserImage = CFile::ResizeImageGet(
                                    $fileData,
                                    array('width' => 400, 'height' => 400),
                                    BX_RESIZE_IMAGE_EXACT,
                                    false
                                );
                                if ($fileData) {
                                    $imgCode = '<img src="'.$resizedUserImage['src'].'">';
                                }
                            }
                            ?>
                            <div class="drop-area<?=( $imgCode != '' ? ' loaded' : '' )?>">
                                <input
                                    name="profileimage" 
                                    class="js-file-elem" 
                                    type="file" 
                                    id="main-photo" 
                                    accept="image/*" 
                                    style="display:none"
                                >
                                <label for="main-photo">
                                    <svg viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M58 5C58 2.23858 55.7614 0 53 0H51C48.2386 0 46 2.23858 46 5V41C46 43.7614 43.7614 46 41 46H5C2.23858 46 0 48.2386 0 51V53C0 55.7614 2.23858 58 5 58H41C43.7614 58 46 60.2386 46 63V99C46 101.761 48.2386 104 51 104H53C55.7614 104 58 101.761 58 99V63C58 60.2386 60.2386 58 63 58H99C101.761 58 104 55.7614 104 53V51C104 48.2386 101.761 46 99 46H63C60.2386 46 58 43.7614 58 41V5Z" fill="#E6E2D6"/>
                                    </svg>
                                </label>
                                <div class="js-image-preview"><?=$imgCode?></div>
                            </div>
                            <div class="fields">
                                <input type="submit" value="Сохранить" disabled>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col border-left">
                    <form action="" class="profileform __vprofileform" data-parsley-validate>
                        <label for="edit-name" class="profile-title">Редактировать информацию</label>
                        <div id="main-info" class="fields">
                            <input type="text" name="profilename" id="edit-name" value="<?=(!empty($arUser['NAME']) ? $arUser['NAME'] : '')?>" placeholder="Введите имя">
                            <input type="text" name="profilesurname" id="edit-surname" value="<?=(!empty($arUser['LAST_NAME']) ? $arUser['LAST_NAME'] : '')?>" placeholder="Введите фамилию">
                            <textarea maxlength="100" name="profiledescription" id="" placeholder="Введите описание о себе (до 100 символов)"><?=(!empty($arUser['WORK_NOTES']) ? $arUser['WORK_NOTES'] : '')?></textarea>
                            <input required data-parsley-required-message="Введите ваши контакты" type="text" name="profilecontacts" id="" value="<?=(!empty($arUser['WORK_PHONE']) ? $arUser['WORK_PHONE'] : '')?>" placeholder="Введите ссылку для кнопки “связаться” на telegramm или whats’app">
                            <input type="submit" value="Сохранить" disabled>
                        </div>

                        <label class="profile-title">*Почта скрыта для внешнего просмотра</label>
                        <div class="contacts">
                            <!--<span>8 (929) 999-99-99</span>-->
                            <span><?=$arUser['EMAIL']?></span>
                        </div>
                    </form>
                </div>
            </div>

            <form action="" class="profileform __vprofileform" data-parsley-validate>
                <div class="gallery-loader">
                    <label for="gallery-photos" class="profile-title">Загрузить фото проекта (до 20 слайдов)</label>
                    <div class="drop-area" data-imagepreview="galleryPreviews" data-maximages="20">
                        <input
                            name="projectimages[]" 
                            class="js-file-elem" 
                            multiple 
                            type="file" 
                            id="gallery-photos" 
                            accept="image/*" 
                            style="display:none"
                        >
                        <label for="gallery-photos">
                            <svg viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M58 5C58 2.23858 55.7614 0 53 0H51C48.2386 0 46 2.23858 46 5V41C46 43.7614 43.7614 46 41 46H5C2.23858 46 0 48.2386 0 51V53C0 55.7614 2.23858 58 5 58H41C43.7614 58 46 60.2386 46 63V99C46 101.761 48.2386 104 51 104H53C55.7614 104 58 101.761 58 99V63C58 60.2386 60.2386 58 63 58H99C101.761 58 104 55.7614 104 53V51C104 48.2386 101.761 46 99 46H63C60.2386 46 58 43.7614 58 41V5Z" fill="#E6E2D6"/>
                            </svg>
                        </label>
                    </div>
                    <div id="galleryPreviews"><?php
                    if( !empty( $galleryImages ) ) {
                        foreach( $galleryImages as $galleryImage ) {
                            $resizedImage = CFile::ResizeImageGet(
                                $galleryImage['ID'], 
                                array('width' => 300, 'height' => 200), 
                                BX_RESIZE_IMAGE_PROPORTIONAL,
                                true
                            );
                            echo '<a data-imgid="'.$galleryImage['ID'].'" href="#"><img src="'.$resizedImage['src'].'"></a>';
                        }
                    }
                    ?></div>
                </div>

                <div class="project-desc">
                    <div class="fields">
                        <input 
                            type="text" 
                            name="project_name" 
                            value="<?=$projectElement['NAME']?>" 
                            placeholder="Название проекта" 
                            required 
                            data-parsley-required-message="Введите название проекта"
                        >
                        <textarea 
                            maxlength="300" 
                            name="project_desc" 
                            placeholder="Введите описание проекта (до 300 символов)"
                            ><?=$projectElement['DETAIL_TEXT']?></textarea>
                        <div class="checkboxes">
                            <?
                            foreach( $servicesData as $service ) {
                            ?>
                            <div class="checkbox">
                                <input 
                                    type="checkbox" 
                                    name="project_services[<?=$service['ID']?>]" 
                                    id="profCh<?=$service['ID']?>" 
                                    value="<?=$service['ID']?>"
                                    <?=( in_array( $service['ID'], $servicesList ) ? 'checked="checked"' : '' )?>
                                >
                                <label for="profCh<?=$service['ID']?>"><?=$service['NAME']?></label>
                            </div>
                            <?
                            }
                            ?>
                        </div>
                        <input 
                            type="text" 
                            name="project_client" 
                            value="<?=$projectElement['PROPERTY_CLIENT_NAME_VALUE']?>" 
                            placeholder="Имя клиента"
                        >
                        <textarea 
                            maxlength="300" 
                            name="project_client_desc" 
                            placeholder="Отзыв клиента (до 100 символов)"
                            ><?=$projectElement['PROPERTY_CLIENT_DESC_VALUE']?></textarea>

                        <div class="button">
                            <input type="submit" value="Сохранить" disabled>
                            <?
                            if( $currentProjectId ) {
                            ?>
                            <a class="showwindow" data-windowname="profile-deleteproject-window" href="#">удалить&nbsp;проект</a>
                            <?
                            }
                            ?>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
    <div class="colored pt75">
        <section>
            <h2>Услуги</h2>
            <?php
            $userServicesFilter = array( 
                'IBLOCK_ID' => 7,
                'ACTIVE' => 'Y',
                'PROPERTY_USER' => $USER->GetID()
            );
            $userServicesItems = CIBlockElement::GetList(
                array('SORT' => 'ASC'),
                $userServicesFilter,
                false,
                false,
                array(
                    'ID', 'NAME', 'PROPERTY_SERVICE', 'PROPERTY_DAYSMIN', 'PROPERTY_DAYSMAX',
                    'PROPERTY_PRICEMIN', 'PROPERTY_PRICEMAX', 'DETAIL_TEXT'
                )
            );
            ?>
            <form action="" class="profileform __vprofileform" data-parsley-validate>
                <div class="portfolio-price profile-portfolio-price">
                    <?
                    if ($userServicesItems->SelectedRowsCount() > 0) {
                        $counter = 0;
                        while ($userServiceItem = $userServicesItems->GetNext()) {
                            $counter++;
                        ?>
                        <div class="row"> 
                            <div class="num">0<?=$counter?></div>
                            <div class="name">
                                <select name="services[service][]" id="">
                                    <option value="0">Выберите услугу</option>
                                    <?foreach( $servicesData as $serviceItem ) {?>
                                    <option <?=( $serviceItem['ID'] == $userServiceItem['PROPERTY_SERVICE_VALUE'] ? 'selected="selected"' : '' )?> value="<?=$serviceItem['ID']?>"><?=$serviceItem['NAME']?></option>
                                    <?}?>
                                </select>
                            </div>
                            <div class="desc">
                                <textarea 
                                    maxlength="100" 
                                    name="services[desc][]" 
                                    id="" 
                                    placeholder="Детализация (до 100 символов)"><?=$userServiceItem['DETAIL_TEXT']?></textarea>
                            </div>
                            <div class="term">
                                <label class="profile-title">Количество дней</label>
                                <div class="js-range profile-range" data-min="1" data-max="180" data-currmin="<?=$userServiceItem['PROPERTY_DAYSMIN_VALUE']?>" data-currmax="<?=$userServiceItem['PROPERTY_DAYSMAX_VALUE']?>" data-step="1"></div>
                                <div class="js-range-data profile-range-data">
                                    <span>от</span>
                                    <input type="text" name="services[daymin][]" class="js-data-min">
                                    <span>до</span>
                                    <input type="text" name="services[daymax][]" class="js-data-max">
                                </div>
                            </div>
                            <div class="price">
                                <label class="profile-title">Стоимость, руб</label>
                                <div class="js-range profile-range" data-min="0" data-max="1000000" data-currmin="<?=intval( str_replace( ' ', '', $userServiceItem['PROPERTY_PRICEMIN_VALUE'] ) )?>" data-currmax="<?=intval( str_replace( ' ', '', $userServiceItem['PROPERTY_PRICEMAX_VALUE'] ) )?>" data-step="500"></div>
                                <div class="js-range-data profile-range-data">
                                    <span>от</span>
                                    <input type="text" name="services[pricemin][]" class="js-data-min">
                                    <span>до</span>
                                    <input type="text" name="services[pricemax][]" class="js-data-max">
                                </div>
                            </div>
                        </div>
                        <?
                        }
                    } else {
                    ?>
                    <div class="row"> 
                        <div class="num">01</div>
                        <div class="name">
                            <select name="services[service][]" id="">
                                <option value="0">Выберите услугу</option>
                                <?foreach( $servicesData as $serviceItem ) {?>
                                <option value="<?=$serviceItem['ID']?>"><?=$serviceItem['NAME']?></option>
                                <?}?>
                            </select>
                        </div>
                        <div class="desc">
                            <textarea 
                                maxlength="100" 
                                name="services[desc][]" 
                                id="" 
                                placeholder="Детализация (до 100 символов)"></textarea>
                        </div>
                        <div class="term">
                            <label class="profile-title">Количество дней</label>
                            <div class="js-range profile-range" data-min="1" data-max="180" data-currmin="10" data-currmax="15" data-step="1"></div>
                            <div class="js-range-data profile-range-data">
                                <span>от</span>
                                <input type="text" name="services[daymin][]" class="js-data-min">
                                <span>до</span>
                                <input type="text" name="services[daymax][]" class="js-data-max">
                            </div>
                        </div>
                        <div class="price">
                            <label class="profile-title">Стоимость, руб</label>
                            <div class="js-range profile-range" data-min="0" data-max="1000000" data-currmin="50000" data-currmax="100000" data-step="500"></div>
                            <div class="js-range-data profile-range-data">
                                <span>от</span>
                                <input type="text" name="services[pricemin][]" class="js-data-min">
                                <span>до</span>
                                <input type="text" name="services[pricemax][]" class="js-data-max">
                            </div>
                        </div>
                    </div>
                    <?
                    }
                    ?>
                    <div class="add"> 
                        <a href="#" id="js-add-profile-service">
                            <b>+</b>
                            <span>Добавить новую услугу</span>
                        </a>
                    </div>
                </div>
                <div class="profile-service-button">
                    <input type="submit" value="Сохранить" disabled>
                </div>
            </form>

            <?php
            $projectsFilter = array( 
                'IBLOCK_ID' => 5, 
                'ACTIVE' => 'Y',
                'PROPERTY_USERID' => $USER->GetID(),
                '!ID' => Array( $projectElement['ID'] )
            );
            $projectsItems = CIBlockElement::GetList( 
                array('SORT' => 'ASC'), 
                $projectsFilter, 
                false, 
                false, 
                array('ID', 'NAME')
            );
            ?>
            <div class="portfolio light">
                <div class="item">
                    <a href="/profile/" class="add">
                        <svg viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M58 5C58 2.23858 55.7614 0 53 0H51C48.2386 0 46 2.23858 46 5V41C46 43.7614 43.7614 46 41 46H5C2.23858 46 0 48.2386 0 51V53C0 55.7614 2.23858 58 5 58H41C43.7614 58 46 60.2386 46 63V99C46 101.761 48.2386 104 51 104H53C55.7614 104 58 101.761 58 99V63C58 60.2386 60.2386 58 63 58H99C101.761 58 104 55.7614 104 53V51C104 48.2386 101.761 46 99 46H63C60.2386 46 58 43.7614 58 41V5Z" fill="#E6E2D6"/>
                        </svg>
                    </a>
                    <div class="data">
                        <a href="/profile/" class="light-btn">Добавить проект</a>
                    </div>
                </div>
                <?
                while ($projectItem = $projectsItems->GetNext()) {
                    $res = CIBlockElement::GetProperty(
                        5,
                        $projectItem['ID'],
                        array(),
                        array("CODE" => "GALLERY")
                    );
                    $galleryImages = array();
                    while ($arProperty = $res->Fetch()) {
                        if ($arProperty['PROPERTY_TYPE'] == 'F' && $arProperty['VALUE']) {
                            $fileArray = CFile::GetFileArray($arProperty['VALUE']);
                            if ($fileArray) {
                                $galleryImages[] = $fileArray;
                            }
                        }
                    }
                    $resizedImage = CFile::ResizeImageGet(
                        $galleryImages[0]['ID'], 
                        array('width' => 800, 'height' => 300), 
                        BX_RESIZE_IMAGE_EXACT,
                        true
                    );
                    
                ?>
                <div class="item">
                    <a href="/profile/?projectid=<?=$projectItem['ID']?>" class="img">
                        <img src="<?=$resizedImage['src']?>">
                    </a>
                    <div class="data">
                        <span class="name"><?=$projectItem['NAME']?></span>
                        <a href="/profile/?projectid=<?=$projectItem['ID']?>" class="light-btn">Редактировать</a>
                    </div>
                </div>
                <?}?>
            </div>
        </section>
    </div>
</main>

<div id="profile-deleteproject-window" class="window">
    <div class="window-wrapper">
        <label>Вы действительно удалить проект?</label>
        <div class="links">
            <a class="accept red" href="/profile/?projectid=<?=$currentProjectId?>&deleteproject=1">Да, удалить</a>
            <a class="reject" href="#">Нет</a>
        </div>
    </div>
</div>

<div id="profile-img-delete-window" class="window">
    <div class="window-wrapper">
        <label>Вы действительно удалить изображение?</label>
        <div class="links">
            <a class="ajaxaccept red" href="#">Да, удалить</a>
            <a class="reject" href="#">Нет</a>
        </div>
    </div>
</div>

<div id="profile-logout-window" class="window">
    <div class="window-wrapper">
        <label>Вы действительно хотите выйти из профиля?</label>
        <div class="links">
            <a class="accept blue" href="/profile/?logout">Да, выйти</a>
            <a class="reject" href="#">Нет</a>
        </div>
    </div>
</div>

<div id="profile-delete-window" class="window">
    <div class="window-wrapper">
        <label>Вы действительно хотите удалить свой профиль?</label>
        <div class="links">
            <a class="accept red" href="/profile/?delete=1">Да, удалить</a>
            <a class="reject" href="#">Нет</a>
        </div>
    </div>
</div>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>