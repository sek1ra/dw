<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);

$rsUser = CUser::GetByID($arResult['PROPERTIES']['USERID']['VALUE']);
$arUser = $rsUser->Fetch();
?>

<main>
	<section>
		<div class="portfolio-page">
			<a href="/" class="back">
				<svg viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.646447 4.14645C0.451184 4.34171 0.451184 4.65829 0.646447 4.85355L3.82843 8.03553C4.02369 8.2308 4.34027 8.2308 4.53553 8.03553C4.7308 7.84027 4.7308 7.52369 4.53553 7.32843L1.70711 4.5L4.53553 1.67157C4.7308 1.47631 4.7308 1.15973 4.53553 0.964466C4.34027 0.769204 4.02369 0.769204 3.82843 0.964466L0.646447 4.14645ZM1 5H14V4H1V5Z" />
				</svg>
				Обратно в портфолио
			</a>
			<div class="cols">
				<div class="col">
					<div class="photo">
						<?
						$resizedUserImage = CFile::ResizeImageGet(
							$arUser['PERSONAL_PHOTO'], 
							array('width' => 400, 'height' => 400), 
							BX_RESIZE_IMAGE_EXACT,
							false
						);
						?>
						<img src="<?=$resizedUserImage['src']?>" alt="">
					</div>
				</div>
				<div class="col border-left">
					<div class="wrapper">
						<h1><?=$arUser['NAME']?> <?=$arUser['LAST_NAME']?></h1>
						<div class="text"><?=$arUser['WORK_NOTES']?>
						</div>
						<a href="<?=$arUser['WORK_PHONE']?>" class="light-btn">Связаться с дизайнером</a>
					</div>
				</div>
			</div>

			<div class="portfolio-gallery-title">
				<span>Листайте галерею</span>
				<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.18 14.4L17.1 22H8.1L3 16.62L4.22 15.39L8 16.24V5.5C8 4.67 8.67 4 9.5 4C10.33 4 11 4.67 11 5.5V11.5H12.38L18.18 14.4ZM10 1.5C14.74 1.5 17.67 4.02 18.43 6H20C19.27 3.12 15.49 0 10 0C6.78 0 3.82 1.13 1.5 3.02V1H0V6H5V4.5H2.09C4.21 2.64 6.97 1.5 10 1.5Z" fill="#1C1E1F"/>
				</svg>
			</div>
			<div id="portfolio-gallery" class="splide">
				<div class="splide__track">
					<ul class="splide__list">
						<?
						foreach( $arResult['PROPERTIES']['GALLERY']['VALUE'] as $imgId ) {
							$resizedImage = CFile::ResizeImageGet(
								$imgId, 
								array('width' => 1400, 'height' => 800), 
								BX_RESIZE_IMAGE_EXACT,
								true
							);
						?>
						<li class="splide__slide">
							<img src="<?=$resizedImage['src']?>" alt="">
						</li>
						<?
						}
						?>
					</ul>
				</div>
			</div>
			<div id="portfolio-thumb-gallery" class="splide">
				<div class="splide__track">
					<ul class="splide__list">
						<?
						foreach( $arResult['PROPERTIES']['GALLERY']['VALUE'] as $imgId ) {
							$resizedImage = CFile::ResizeImageGet(
								$imgId, 
								array('width' => 180, 'height' => 90), 
								BX_RESIZE_IMAGE_EXACT,
								true
							);
						?>
						<li class="splide__slide">
							<img src="<?=$resizedImage['src']?>" alt="">
						</li>
						<?
						}
						?>
					</ul>
				</div>
			</div>
			<?
			global $USER;
			if ($USER->IsAuthorized()) {
				$currRating = 0;
				if( $arResult['PROPERTIES']['RATING']['VALUE'] > 0 ) {
					$currRating = $arResult['PROPERTIES']['RATING']['VALUE'];
				}
			?>
			<?
			$addedClass = '';
			//если свой проект
			if( $arResult['PROPERTIES']['USERID']['VALUE'] == $USER->GetID() ) {
				$addedClass = ' disabled';
			}
			$arFilter = array(
				'IBLOCK_ID' => 8,
				'PROPERTY_USER' => $USER->GetID(),
				'PROPERTY_PROJECT' => $arResult['ID'],
			);
			$rsItems = CIBlockElement::GetList( array(), $arFilter, false, false, array('ID') );
			$count = $rsItems->SelectedRowsCount();
			$hadVoted = 0;
			if( $count > 0 ) {
				$addedClass = ' disabled';
				$hadVoted = 1;
			}
			?>
			<div id="ratingWrapper" class="rating<?=$addedClass?>">
				<div class="setRating">
					<span class="curRating" style="width: <?=($currRating*100/5)?>%"></span>
					<div class="stars">
						<img
							data-title="Плохо"
							src="<?=SITE_TEMPLATE_PATH?>/src/img/star-filled.png" 
							data-empty="<?=SITE_TEMPLATE_PATH?>/src/img/star.png"
							data-full="<?=SITE_TEMPLATE_PATH?>/src/img/star-filled.png"
							data-index="1"
							alt="">
						<img
							data-title="Удовлетворительно"
							src="<?=SITE_TEMPLATE_PATH?>/src/img/star-filled.png" 
							data-empty="<?=SITE_TEMPLATE_PATH?>/src/img/star.png"
							data-full="<?=SITE_TEMPLATE_PATH?>/src/img/star-filled.png"
							data-index="2"
							alt="">
						<img
							data-title="Средне"
							src="<?=SITE_TEMPLATE_PATH?>/src/img/star-filled.png" 
							data-empty="<?=SITE_TEMPLATE_PATH?>/src/img/star.png"
							data-full="<?=SITE_TEMPLATE_PATH?>/src/img/star-filled.png"
							data-index="3"
							alt="">
						<img
							data-title="Хорошо"
							src="<?=SITE_TEMPLATE_PATH?>/src/img/star-filled.png" 
							data-empty="<?=SITE_TEMPLATE_PATH?>/src/img/star.png"
							data-full="<?=SITE_TEMPLATE_PATH?>/src/img/star-filled.png"
							data-index="4"
							alt="">
						<img
							data-title="Отлично"
							src="<?=SITE_TEMPLATE_PATH?>/src/img/star-filled.png" 
							data-empty="<?=SITE_TEMPLATE_PATH?>/src/img/star.png"
							data-full="<?=SITE_TEMPLATE_PATH?>/src/img/star-filled.png"
							data-index="5"
							alt="">
    				</div>
					<span class="count"><?=intval($arResult['PROPERTIES']['VOTES_COUNT']['VALUE'])?></span>
				</div>
				<input type="hidden" id="currentRating" value="<?=$arResult['PROPERTIES']['RATING']['VALUE']?>">
				<input type="hidden" id="postid" value="<?=$arResult['ID']?>">
				<?if( $hadVoted == 0 ) {?>
					<a href="#" class="saveRating">Сохранить</a>
					<span class="notify">Будьте внимательны, изменить оценку проекта нельзя!</span>
				<?} else {
					?>
					<span class="saveRating">Проект оценен</span>
					<?
				}?>
			</div>
			<?
			}
			?>
			<div class="review">
				<div class="title"><?=$arResult['NAME']?></div>
				<?if( !empty( $arResult['DETAIL_TEXT'] ) ) {?>
				<div class="desc">
					<?=$arResult['DETAIL_TEXT']?>
				</div>
				<?}?>
				<?if( !empty( $arResult['PROPERTIES']['CLIENT_NAME']['VALUE'] ) || !empty( $arResult['PROPERTIES']['CLIENT_DESC']['VALUE'] ) ) {?>
				<div class="content">
					<div class="text">
						<?if( !empty( $arResult['PROPERTIES']['CLIENT_NAME']['VALUE'] ) ) {?>
						<div class="name"><?=$arResult['PROPERTIES']['CLIENT_NAME']['VALUE']?></div>
						<?}?>
						<?if( !empty( $arResult['PROPERTIES']['CLIENT_DESC']['VALUE'] ) ) {?>
						<p><?=$arResult['PROPERTIES']['CLIENT_DESC']['VALUE']?></p>
						<?}?>
					</div>
				</div>
				<?
				}
				?>
			</div>
		</div>
	</section>
	<div class="colored pt75">
		<section>
			<?php
			$userServicesFilter = array( 'IBLOCK_ID' => 7, 'ACTIVE' => 'Y', 'PROPERTY_USER' => $USER->GetID() );
			$userServicesItems = CIBlockElement::GetList( 
				array('SORT' => 'ASC'),
				$userServicesFilter, 
				false, false,
				array(
					'ID', 'NAME', 'PROPERTY_SERVICE', 'PROPERTY_DAYSMIN', 'PROPERTY_DAYSMAX',
					'PROPERTY_PRICEMIN', 'PROPERTY_PRICEMAX', 'DETAIL_TEXT'
				)
			);

			if ($userServicesItems->SelectedRowsCount() > 0) {
			?>
			<h2>Услуги</h2>
			<div class="portfolio-price">
				<?
				$counter = 0;
				while ($userServiceItem = $userServicesItems->GetNext()) {
					$serviceElement = CIBlockElement::GetByID($userServiceItem['PROPERTY_SERVICE_VALUE'])->Fetch();
					$counter++;
				?>
				<div class="row"> 
					<div class="num">0<?=$counter?></div>
					<div class="name"><?=$serviceElement['NAME']?></div>
					<div class="desc"><?=$userServiceItem['DETAIL_TEXT']?></div>
					<div class="term">
						<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.32654 0.65409C6.35094 0.448637 6.64906 0.448637 6.67346 0.65409L6.87797 2.37766C7.14205 4.60325 8.89675 6.35795 11.1223 6.62203L12.8459 6.82654C13.0514 6.85094 13.0514 7.14906 12.8459 7.17346L11.1223 7.37797C8.89675 7.64205 7.14205 9.39675 6.87797 11.6223L6.67346 13.3459C6.64906 13.5514 6.35094 13.5514 6.32654 13.3459L6.12203 11.6223C5.85795 9.39675 4.10325 7.64205 1.87766 7.37797L0.15409 7.17346C-0.0513633 7.14906 -0.0513633 6.85094 0.15409 6.82654L1.87766 6.62203C4.10325 6.35795 5.85795 4.60325 6.12203 2.37766L6.32654 0.65409Z" fill="#1C1E1F"/>
						</svg>
						<span><?=$userServiceItem['PROPERTY_DAYSMIN_VALUE']?> – <?=$userServiceItem['PROPERTY_DAYSMAX_VALUE']?> дней</span>
					</div>
					<div class="price">
						<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.32654 0.65409C6.35094 0.448637 6.64906 0.448637 6.67346 0.65409L6.87797 2.37766C7.14205 4.60325 8.89675 6.35795 11.1223 6.62203L12.8459 6.82654C13.0514 6.85094 13.0514 7.14906 12.8459 7.17346L11.1223 7.37797C8.89675 7.64205 7.14205 9.39675 6.87797 11.6223L6.67346 13.3459C6.64906 13.5514 6.35094 13.5514 6.32654 13.3459L6.12203 11.6223C5.85795 9.39675 4.10325 7.64205 1.87766 7.37797L0.15409 7.17346C-0.0513633 7.14906 -0.0513633 6.85094 0.15409 6.82654L1.87766 6.62203C4.10325 6.35795 5.85795 4.60325 6.12203 2.37766L6.32654 0.65409Z" fill="#1C1E1F"/>
						</svg>
						<span><?=$userServiceItem['PROPERTY_PRICEMIN_VALUE']?> – <?=$userServiceItem['PROPERTY_PRICEMAX_VALUE']?> руб.</span>
					</div>
				</div>
				<?
				}
				?>
			</div>
			<?php
			}
			?>

			<div class="designerContacts">
				<a href="<?=$arUser['WORK_PHONE']?>" class="img">
					<img src="<?=$resizedUserImage['src']?>" alt="">
					<span>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.5 13.5L13.5 0.5M13.5 0.5H0.5M13.5 0.5V13.5"/>
						</svg>
					</span>
				</a>
				<a href="<?=$arUser['WORK_PHONE']?>" class="text">
					<span>Связаться</span><br />
					с&nbsp;дизайнером
				</a>
				<a href="/" class="back">
					Обратно в портфолио<span> студентов</span>
				</a>
			</div>
			<?php
            $projectsFilter = array( 
                'IBLOCK_ID' => 5, 
                'ACTIVE' => 'Y',
                'PROPERTY_USERID' => $arResult['PROPERTIES']['USERID']['VALUE'],
                '!ID' => Array( $arResult['ID'] )
            );
            $projectsItems = CIBlockElement::GetList( 
                array('SORT' => 'ASC'), 
                $projectsFilter, 
                false, 
                false, 
                array('ID', 'NAME', 'DETAIL_PAGE_URL')
            );
            ?>
			<div class="portfolio light">
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
					<a href="<?=$projectItem['DETAIL_PAGE_URL']?>" class="img">
						<img src="<?=$resizedImage['src']?>">
					</a>
					<div class="data">
						<span class="name"><?=$arUser['NAME']?></span>
						<a href="<?=$projectItem['DETAIL_PAGE_URL']?>" class="light-btn">Смотреть проекты</a>
					</div>
				</div>
				<?}?>
			</div>
		</section>
	</div>
</main>