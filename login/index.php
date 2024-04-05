<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

/*if (is_string($_REQUEST["backurl"]) && mb_strpos($_REQUEST["backurl"], "/") === 0) {
	LocalRedirect($_REQUEST["backurl"]);
}*/

global $USER;
if ($USER->IsAuthorized()) {
	LocalRedirect('/profile/');
}
$APPLICATION->SetTitle("Вход на сайт");
?>

<main>
	<section>
		<div class="login-page">
			<?php
			$startPage = 0;
			if( !empty( $_REQUEST['register'] ) && $_REQUEST['register'] == 'yes' ) {
				$startPage = 1;
			} elseif( !empty( $_REQUEST['confirm_registration'] ) && $_REQUEST['confirm_registration'] == 'yes' ) {
				$startPage = 3;
			}
			?>
			<div id="login-slider" class="splide" data-startpage="<?=$startPage?>">
				<div class="splide__track">
					<ul class="splide__list">
						<li class="splide__slide">
							<?php
							$APPLICATION->IncludeComponent(
								"bitrix:system.auth.authorize",
								"",
								array(
									"SHOW_ERRORS" => "Y",
									'AUTH_RESULT' => $APPLICATION->arAuthResult
								)
							);
							?>
						</li>
						<li class="splide__slide">
							<?php
							$APPLICATION->IncludeComponent(
								"bitrix:system.auth.registration",
								"",
								Array(
									"USER_PROPERTY_NAME" => "", 
									"SEF_MODE" => "Y", 
									"SHOW_FIELDS" => Array(), 
									"REQUIRED_FIELDS" => Array(), 
									"AUTH" => "N", 
									"USE_BACKURL" => "Y", 
									"SUCCESS_PAGE" => "/login/?regsuc", 
									"SET_TITLE" => "Y", 
									"USER_PROPERTY" => Array(), 
									"SEF_FOLDER" => "/", 
									"SHOW_ERRORS" => "Y",
									"VARIABLE_ALIASES" => Array(),
									'AUTH_RESULT' => $APPLICATION->arAuthResult
								)
							);
							?>
						</li>
						<li class="splide__slide">
							<?php
							$APPLICATION->IncludeComponent(
								"bitrix:system.auth.forgotpasswd",
								"",
								array()
							);
							?>
						</li>
						<li class="splide__slide">
							<?php
							$APPLICATION->IncludeComponent(
								"bitrix:system.auth.confirmation",
								"",
								array()
							);
							?>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</main>



<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>