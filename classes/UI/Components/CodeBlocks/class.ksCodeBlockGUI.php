<?php
/*
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 */

class ksCodeBlockGUI implements ILIAS\UI\CodeBlocks\CodeBlock {

    /**
     * @var string
     */
    protected $type = "";

    /**
     * @var string
     */
    protected $code = "";

    /**
     * @param string $type
     * @return Code
     */
    public function setType($type = ""){
        $this->type = $type;
        return $this;
    }

    /**
     * @param string $code
     * @return Code
     */
    public function setCode($code = ""){
        $this->code = $code;
        return $this;
    }

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    public function to_html_string(){
        $this->template = new ilTemplate("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/uiComponent/Code/tpl.code_block.html", true, true);
        $this->template->setVariable("TYPE",$this->getType());
        $this->template->setVariable("CODE",$this->getCode());
        return $this->template->get();
    }




}
?>
