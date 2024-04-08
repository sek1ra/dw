<?
function pre( $var ) {
    echo '<pre>',print_r( $var, 1 ),'</pre>';
}


class CustomHandler {
	public static function OnAfterUserRegisterHandler(&$arFields) {
		if ($arFields["USER_ID"]>0) {
			$arFields["RESULT_MESSAGE"]["MESSAGE"] = "Вы успешно зарегистрировались на сайте";
		}
		return $arFields;
	}
}
RegisterModuleDependences("main", "OnAfterUserRegister", "my_module_id", "CustomHandler", "OnAfterUserRegisterHandler");

function calcProjectRating( $projectId ) {
	$arFilter = array(
		'IBLOCK_ID' => 8,
		'PROPERTY_PROJECT' => $projectId
	);
	$rsItems = CIBlockElement::GetList( 
		array(), 
		$arFilter, 
		false, false, 
		array('PROPERTY_RATING', 'PROPERTY_USERID', 'PROPERTY_PROJECT') 
	);
	$ratingCount = 0;
	$ratingValue = 0;
	$ratingSumm = 0;
	while ($arItem = $rsItems->Fetch()) {
		$ratingSumm += $arItem['PROPERTY_RATING_VALUE'];
		$ratingCount++;
	}
	if( $ratingCount > 0 ) {
		$ratingValue = $ratingSumm/$ratingCount;
	}

	return ['count' => $ratingCount, 'value' => $ratingValue];
}

function deleteServices( $userId ) {
	$relatedElements = [];
	$iblockIterator = CIBlockElement::GetList(
		[], ['IBLOCK_ID' => 7, 'PROPERTY_USER' => $userId],
		false, false, ['ID']
	);
	while ($iblockElement = $iblockIterator->Fetch()) {
		$relatedElements[] = $iblockElement['ID'];
	}

	foreach ($relatedElements as $relatedElementId) {
		CIBlockElement::Delete($relatedElementId);
	}
}
function deleteProject( $projectId ) {
	//Удаляем результаты голосования за этот проект
	$relatedElements = [];
	$iblockIterator = CIBlockElement::GetList(
		[],
		['IBLOCK_ID' => 8, 'PROPERTY_PROJECT' => $projectId],
		false,
		false,
		['ID']
	);
	while ($iblockElement = $iblockIterator->Fetch()) {
		$relatedElements[] = $iblockElement['ID'];
	}

	foreach ($relatedElements as $relatedElementId) {
		CIBlockElement::Delete($relatedElementId);
	}

	$res = CIBlockElement::GetProperty( 5, $projectElement['ID'], array(), array("CODE" => "GALLERY") );
	while ($arProperty = $res->Fetch()) {
		if ($arProperty['PROPERTY_TYPE'] == 'F' && $arProperty['VALUE']) {
			CFile::Delete($arProperty['VALUE']);
		}
	}

	return CIBlockElement::Delete($projectId);
}