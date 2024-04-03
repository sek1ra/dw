<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if($arResult["SHOW_FORM"]):?>
	<h2>Регистрация</h2>
	<div class="auth-message-wrapper">
		<p><?echo $arResult["MESSAGE_TEXT"]?></p>
	</div>
	<form method="post" action="<?echo $arResult["FORM_ACTION"]?>" class="fields">
		<div class="field">
			<input 
				type="text" 
				name="<?echo $arParams["LOGIN"]?>" 
				maxlength="50" 
				value="<?echo $arResult['USER']["LOGIN"]?>" 
				size="17" 
				placeholder="<?=GetMessage("CT_BSAC_LOGIN")?>"
			/>
		</div>
		<div class="field">
			<input 
				type="text" 
				name="<?echo $arParams["CONFIRM_CODE"]?>" 
				maxlength="50" 
				value="<?echo $arResult["CONFIRM_CODE"]?>" 
				size="17" 
				placeholder="<?=GetMessage("CT_BSAC_CONFIRM_CODE")?>"
			/>
		</div>
		<div class="button">
			<input class="light-btn" type="submit" value="<?echo GetMessage("CT_BSAC_CONFIRM")?>" />
		</div>
		<input type="hidden" name="<?echo $arParams["USER_ID"]?>" value="<?echo $arResult["USER_ID"]?>" />
	</form>
<?elseif(!$USER->IsAuthorized()):?>
	<div class="auth-message-wrapper">
		<p><?echo $arResult["MESSAGE_TEXT"]?></p>
	</div>
	<?$APPLICATION->IncludeComponent("bitrix:system.auth.authorize", "", array());?>
<?endif?>