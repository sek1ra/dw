<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
?>
	<h2><?echo GetMessage("AUTH_TITLE")?></h2>

	<?
	if( isset( $_REQUEST['login'] ) && $_REQUEST['login'] == 'yes' ) {
	?>
	
		<div class="auth-message-wrapper">
		<?
		if (!empty($arParams["~AUTH_RESULT"])) {
			ShowMessage($arParams["~AUTH_RESULT"]);
		}

		if (!empty($arResult['ERROR_MESSAGE'])) {
			ShowMessage($arResult['ERROR_MESSAGE']);
		}
		?>
		</div>
		<?
	}
	?>

	<form name="form_auth" method="post" target="_top" action="<?=$arResult["AUTH_URL"]?>" class="fields">
		<input type="hidden" name="AUTH_FORM" value="Y" />
		<input type="hidden" name="TYPE" value="AUTH" />
		<?if ($arResult["BACKURL"] <> ''):?>
		<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
		<?endif?>
		<?foreach ($arResult["POST"] as $key => $value):?>
		<input type="hidden" name="<?=$key?>" value="<?=$value?>" />
		<?endforeach?>

		<div class="field">
			<input 
				class="bx-auth-input form-control" 
				type="text" 
				name="USER_LOGIN" 
				maxlength="255" 
				value="<?=$arResult["LAST_LOGIN"]?>" 
				placeholder="<?=GetMessage("AUTH_LOGIN")?>"
			/>
		</div>

		<div class="field">
			<input 
				class="bx-auth-input form-control" 
				type="password" 
				name="USER_PASSWORD" 
				maxlength="255" 
				autocomplete="off" 
				placeholder="<?=GetMessage("AUTH_PASSWORD")?>"
				/>
		</div>

		<?if($arResult["CAPTCHA_CODE"]):?>
		<div class="field">
			<input type="hidden" name="captcha_sid" value="<?echo $arResult["CAPTCHA_CODE"]?>" />
			<img src="/bitrix/tools/captcha.php?captcha_sid=<?echo $arResult["CAPTCHA_CODE"]?>" width="180" height="40" alt="CAPTCHA" />
			<?echo GetMessage("AUTH_CAPTCHA_PROMT")?>
			<input class="bx-auth-input form-control" type="text" name="captcha_word" maxlength="50" value="" size="15" autocomplete="off" />
		</div>
		<?endif;?>

		<div class="button">
			<div class="links">
				<a class="js-goto-link" data-page="2" href="<?=$arResult["AUTH_FORGOT_PASSWORD_URL"]?>"><?=GetMessage("AUTH_FORGOT_PASSWORD_2")?></a>
				<a class="js-goto-link" data-page="1" href="<?=$arResult["AUTH_REGISTER_URL"]?>"><?=GetMessage("AUTH_REGISTER")?></a><br />
			</div>
			<input 
				type="submit" 
				class="light-btn"
				name="Login" 
				value="<?=GetMessage("AUTH_AUTHORIZE")?>" 
			/>
		</div>
	</form>