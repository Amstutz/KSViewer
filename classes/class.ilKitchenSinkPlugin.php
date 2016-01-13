<?php

require_once('./Services/UIComponent/classes/class.ilUserInterfaceHookPlugin.php');

/**
 * RenderedBy Plugin
 *
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version $Id$
 *
 */
class ilKitchenSinkPlugin extends ilUserInterfaceHookPlugin {
	/**
	 * @return string
	 */
	public function getPluginName() {
		return 'KitchenSink';
	}

}

?>