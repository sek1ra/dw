<?
/**
 * Bitrix Framework
 * @package bitrix
 * @subpackage main
 * @copyright 2001-2014 Bitrix
 */

/**
 * Bitrix vars
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CBitrixComponentTemplate $this
 */

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

?>
<noindex>
<h2>Регистрация</h2>

<?
if( isset( $_REQUEST['register'] ) && $_REQUEST['register'] == 'yes' ) {
?>
<div class="auth-message-wrapper">
	<?
	if($arResult["SHOW_SMS_FIELD"] == true) {
		CJSCore::Init('phone_auth');
	}
	if (!empty($arParams["~AUTH_RESULT"])) {
		ShowMessage($arParams["~AUTH_RESULT"]);
	}
	?>
	<?if($arResult["SHOW_EMAIL_SENT_CONFIRMATION"]):?>
		<p><?echo GetMessage("AUTH_EMAIL_SENT")?></p>
	<?endif;?>
</div>
<?
}
?>
<?if(!$arResult["SHOW_EMAIL_SENT_CONFIRMATION"]):?>
	<form class="fields" method="post" action="<?=$arResult["AUTH_URL"]?>" name="bform" enctype="multipart/form-data">
		<input type="hidden" name="AUTH_FORM" value="Y" />
		<input type="hidden" name="TYPE" value="REGISTRATION" />

		<div class="field">
			<input 
				type="text" 
				name="USER_NAME" 
				maxlength="50" 
				value="<?=$arResult["USER_NAME"]?>" 
				class="bx-auth-input" 
				placeholder="<?=GetMessage("AUTH_NAME")?>"
			/>
		</div>

		<div class="field">
			<input 
				type="text" 
				name="USER_LAST_NAME" 
				maxlength="50" 
				value="<?=$arResult["USER_LAST_NAME"]?>" 
				class="bx-auth-input" 
				placeholder="<?=GetMessage("AUTH_LAST_NAME")?>"
			/>
		</div>

		<div class="field">
			<input 
				type="text" 
				name="USER_LOGIN" 
				maxlength="50" 
				value="<?=$arResult["USER_LOGIN"]?>" 
				class="bx-auth-input" 
				placeholder="<?=GetMessage("AUTH_LOGIN_MIN")?> *"
			/>
		</div>

		<div class="field">
			<input 
				type="password" 
				name="USER_PASSWORD" 
				maxlength="255" 
				value="<?=$arResult["USER_PASSWORD"]?>" 
				class="bx-auth-input" 
				placeholder="<?=GetMessage("AUTH_PASSWORD_REQ")?> *"
				autocomplete="off"
			/>
		</div>

		<?if($arResult["SECURE_AUTH"]):?>
			<span class="bx-auth-secure" id="bx_auth_secure" title="<?echo GetMessage("AUTH_SECURE_NOTE")?>" style="display:none">
				<div class="bx-auth-secure-icon"></div>
			</span>
			<noscript>
			<span class="bx-auth-secure" title="<?echo GetMessage("AUTH_NONSECURE_NOTE")?>">
				<div class="bx-auth-secure-icon bx-auth-secure-unlock"></div>
			</span>
			</noscript>
			<script type="text/javascript">
				document.getElementById('bx_auth_secure').style.display = 'inline-block';
			</script>
		<?endif?>
				
		<div class="field">
			<input 
				type="password" 
				name="USER_CONFIRM_PASSWORD" 
				maxlength="255" 
				value="<?=$arResult["USER_CONFIRM_PASSWORD"]?>" 
				class="bx-auth-input" 
				placeholder="<?=GetMessage("AUTH_CONFIRM")?> *"
				autocomplete="off"
			/>
		</div>

		<?if($arResult["EMAIL_REGISTRATION"]):?>
		<div class="field">
			<input 
				type="text" 
				name="USER_EMAIL" 
				maxlength="255" 
				value="<?=$arResult["USER_EMAIL"]?>" 
				class="bx-auth-input" 
				placeholder="<?=GetMessage("AUTH_EMAIL")?> *"
			/>
		</div>
		<?endif?>
		
		<?
		if ($arResult["USE_CAPTCHA"] == "Y") {?>
		<div class="field">
			<input type="hidden" name="captcha_sid" value="<?=$arResult["CAPTCHA_CODE"]?>" />
			<img src="/bitrix/tools/captcha.php?captcha_sid=<?=$arResult["CAPTCHA_CODE"]?>" width="180" height="40" alt="CAPTCHA" />
			<input type="text" name="captcha_word" maxlength="50" value="" autocomplete="off" />
		<?
		}
		?>
		<?$APPLICATION->IncludeComponent("bitrix:main.userconsent.request", "",
			array(
				"ID" => COption::getOptionString("main", "new_user_agreement", ""),
				"IS_CHECKED" => "Y",
				"AUTO_SAVE" => "N",
				"IS_LOADED" => "Y",
				"ORIGINATOR_ID" => $arResult["AGREEMENT_ORIGINATOR_ID"],
				"ORIGIN_ID" => $arResult["AGREEMENT_ORIGIN_ID"],
				"INPUT_NAME" => $arResult["AGREEMENT_INPUT_NAME"],
				"REPLACE" => array(
					"button_caption" => GetMessage("AUTH_REGISTER"),
					"fields" => array(
						rtrim(GetMessage("AUTH_NAME"), ":"),
						rtrim(GetMessage("AUTH_LAST_NAME"), ":"),
						rtrim(GetMessage("AUTH_LOGIN_MIN"), ":"),
						rtrim(GetMessage("AUTH_PASSWORD_REQ"), ":"),
						rtrim(GetMessage("AUTH_EMAIL"), ":"),
					)
				),
			)
		);?>

		<div class="button">
			<div class="links">
				<a class="js-goto-link" data-page="0" href="<?=$arResult["AUTH_AUTH_URL"]?>" rel="nofollow"><?=GetMessage("AUTH_AUTH")?></a>
			</div>
			<input type="submit" name="Register" class="light-btn" value="<?=GetMessage("AUTH_REGISTER")?>">
		</div>

		<div class="notify">
			<?echo $arResult["GROUP_POLICY"]["PASSWORD_REQUIREMENTS"];?>
		</div>
	</form>
<?endif?>
</noindex>