<?php
include_once("class.ksBaseListGUI.php");
/*
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 */

class ksOrderedListGUI extends ksBaseListGUI{

    /**
     * @return ksOrderedListGUI
     */
    public function initTemplate()
    {
        $this->template = new ilTemplate("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/uiComponent/Listings/tpl.ordered_list.html", true, true);
        return $this;
    }
}
?>
