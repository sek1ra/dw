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