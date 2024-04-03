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
?>
<main class="index"> 
    <section>
        <h1>Портфолио студентов</h1>
		<?php
		$servicesFilter = array( 'IBLOCK_ID' => 6, 'ACTIVE' => 'Y' );
		$servicesItems = CIBlockElement::GetList( 
			array('SORT' => 'ASC'), 
			$servicesFilter, 
			false, 
			false, 
			array('ID', 'NAME')
		);
		?>
        <div class="tags">
			<a href="/" <?=( empty( $_REQUEST['filter'] ) ? 'class="active"' : '' )?>>Все</a>
			<?while ($serviceItem = $servicesItems->GetNext()) {?>
			<a 
				<?=( !empty( $_REQUEST['filter'] ) && $_REQUEST['filter'] == $serviceItem['ID'] ? 'class="active"' : '' )?>
				href="/?filter=<?=$serviceItem['ID']?>"><?=$serviceItem['NAME']?></a>
			<?}?>
        </div>
    </section>
    <div class="marquee-container" id="marquee">
        <div class="marquee-content">
            *Design Wonderland вошла в ТОП-3 школы по версии GetCourse в категории «Обучение профессиям по всей России» *Design Wonderland вошла в ТОП-3 школы по версии GetCourse в категории «Обучение профессиям по всей России» <br>
        </div>
    </div>
	<section>
		<div class="portfolio">
		<?foreach($arResult["ITEMS"] as $arItem):?>
			<div class="item">
				<?
				$rsUser = CUser::GetByID($arItem['PROPERTIES']['USERID']['VALUE']);
				$arUser = $rsUser->Fetch();
				$previewImg = $arItem['PROPERTIES']['GALLERY']['VALUE'][0];
				$resizedImage = CFile::ResizeImageGet(
					$previewImg, 
					array('width' => 600, 'height' => 400), 
					BX_RESIZE_IMAGE_EXACT,
					true
				);
				?>
				<a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="img">
					<img src="<?=$resizedImage['src']?>" alt="">
				</a>
				<div class="data">
					<span class="name"><?=$arUser['NAME']?></span>
					<?
					global $USER;
					if ($USER->IsAuthorized()) {
						if( $arItem['PROPERTIES']['RATING']['VALUE'] > 0 ) {
					?>
						<div class="ratingWrapper">
							<div class="rating">
								<span class="curRating" style="width: <?=($arItem['PROPERTIES']['RATING']['VALUE']*20)?>%"></span>
							</div>
							<span class="count"><?=$arItem['PROPERTIES']['VOTES_COUNT']['VALUE']?></span>
						</div>
					<?
						}
					}
					?>
					<span>
						<a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="light-btn">Смотреть проекты</a>
					</span>
				</div>
			</div>
			<?endforeach;?>
			<?=$arResult['NAV_STRING']?>
		</div>
	</section>
</main>