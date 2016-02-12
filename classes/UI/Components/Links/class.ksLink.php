<?php
/*
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 */

class ksLink implements ILIAS\UI\Links\Link {

    /**
     * @var string
     */
    protected $href = "";

    /**
     * @var string
     */
    protected $caption = "";

    /**
     * @return string
     */
    public function getHref()
    {
        return $this->href;
    }

    /**
     * @param string $href
     * @return Link
     */
    public function setHref($href)
    {
        $this->href = $href;
        return $this;
    }

    /**
     * @return string
     */
    public function getCaption()
    {
        return $this->caption;
    }

    /**
     * @param string $caption
     * @return Link
     */
    public function setCaption($caption)
    {
        $this->caption = $caption;
        return $this;
    }



    public function to_html_string(){
        $this->template = new ilTemplate("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/uiComponent/Link/tpl.link.html", true, true);
        $this->template->setVariable("CAPTION",$this->getCaption());
        $this->template->setVariable("HREF",$this->getHref());
        return $this->template->get();
    }
}
?>
