<?php
include_once("class.ksBaseListGUI.php");
/*
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 */

class ksUnorderedListGUI extends ksBaseListGUI{

    /**
     * @return ksUnorderedListGUI
     */
    public function initTemplate()
    {
        $this->template = new ilTemplate("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/uiComponent/Listings/tpl.unordered_list.html", true, true);
        return $this;
    }
}
?>
