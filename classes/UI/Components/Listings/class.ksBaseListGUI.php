<?php
/*
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 */

abstract class ksBaseListGUI implements ILIAS\UI\Listings\Listing {

    /**
     * @var array
     */
    protected $elements = array();

    /**
     * @var ilTemplate
     */
    protected $template = null;

    /**
     * @return array
     */
    public function getElements()
    {
        return $this->elements;
    }

    /**
     * @param $elements
     * @return $this
     */
    public function setElements($elements)
    {
        $this->elements = $elements;
        return $this;
    }

    /**
     * @param $key
     * @param $value
     * @return $this
     */
    public function setElementByKey($key, $value){
        $this->elements[$key] = $value;
        return $this;
    }

    public function to_html_string(){
        $this->initTemplate();
        $this->getTemplate()->setCurrentBlock("item");
        foreach($this->getElements() as $key => $value){
            $this->setTemplateKey($key);
            $this->setTemplateValue($value);
            $this->getTemplate()->parseCurrentBlock();

        }
        return $this->getTemplate()->get();
    }

    /**
     * @param string $value
     * @return $this
     */
    protected function setTemplateValue($value = "")
    {
        $this->getTemplate()->setVariable("VALUE",$value);
        return $this;
    }

    /**
     * @param string $key
     * @return $this
     */
    protected function setTemplateKey($key = ""){
        return $this;
    }

    /**
     * @return ilTemplate
     */
    public function getTemplate()
    {
        return $this->template;
    }

    abstract protected function initTemplate();

}
?>
