<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?><?

if (!empty($arParams["~AUTH_RESULT"]))
{
	ShowMessage($arParams["~AUTH_RESULT"]);
}

?>
<form class="fields" name="bform" method="post" target="_top" action="<?=$arResult["AUTH_URL"]?>">
	<?if ($arResult["BACKURL"] <> '') {?>
		<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>" />
	<?}?>

	<input type="hidden" name="AUTH_FORM" value="Y">
	<input type="hidden" name="TYPE" value="SEND_PWD">

	<div class="field">
		<input 
			type="text" 
			name="USER_LOGIN" 
			value="<?=$arResult["USER_LOGIN"]?>" 
			placeholder="<?=GetMessage("sys_forgot_pass_login1")?>"
		/>
		<input type="hidden" name="USER_EMAIL" />
	</div>
	<div class="notify"><?echo GetMessage("sys_forgot_pass_note_email")?></div>

	<?if($arResult["USE_CAPTCHA"]):?>
		<div style="margin-top: 16px">
			<div>
				<input type="hidden" name="captcha_sid" value="<?=$arResult["CAPTCHA_CODE"]?>" />
				<img src="/bitrix/tools/captcha.php?captcha_sid=<?=$arResult["CAPTCHA_CODE"]?>" width="180" height="40" alt="CAPTCHA" />
			</div>
			<div><?echo GetMessage("system_auth_captcha")?></div>
			<div><input type="text" name="captcha_word" maxlength="50" value="" /></div>
		</div>
	<?endif?>

	<div class="button">
		<div class="links">
			<a class="js-goto-link" data-page="0" href="<?=$arResult["AUTH_AUTH_URL"]?>" rel="nofollow"><?=GetMessage("AUTH_AUTH")?></a>
		</div>
		<input class="light-btn" type="submit" name="Register" value="<?=GetMessage("AUTH_REGISTER")?>" />
	</div>
</form>