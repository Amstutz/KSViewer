<?php
include_once("class.ksBaseListGUI.php");
/*
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 */

class ksDescriptionListGUI extends ksBaseListGUI{
    /**
     * @return ksDescriptionListGUI
     */
    public function initTemplate()
    {
        $this->template = new ilTemplate("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/uiComponent/Listings/tpl.description_list.html", true, true);
        return $this;
    }

    /**
     * @param string $key
     * @return $this
     */
    protected function setTemplateKey($key = ""){
        $this->getTemplate()->setVariable("KEY",$key);
        return $this;
    }
}
?>
