<?php

/**
 *
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$*
 */
class ilKitchenSinkIconsGUI
{
    /**
     * @var ilTemplate
     */
    protected $tpl;

    /**
     * @var ilCtrl $ctrl
     */
    protected $ctrl;

    /**
     * @var ilKitchenSinkMainGUI
     */
    protected $parent;

    /**
     * @var ilKitchenSinkSkin
     */
    protected $skin;

    /**
     * @var string
     */
    protected $form_elements_prefix = "ks-";

    /**
     * @var KitchenSinkIconColorSet
     */
    protected $icon_color_set = null;

    /**
     * @var ilPropertyFormGUI
     */
    protected $form = null;
    /**
     * ilKitchenSinkLessGUI constructor.
     * @param ilKitchenSinkMainGUI $parent
     * @param ilKitchenSinkSkin $skin
     */
    public function __construct(ilKitchenSinkMainGUI $parent, KitchenSinkSkin $skin) {
        /**
         * @var ilObjUser $ilUser
         */
        global $ilCtrl, $ilUser, $tpl;

        $this->user = $ilUser;
        $this->setParent($parent);
        $this->ctrl = $ilCtrl;
        $this->tpl = $tpl;
        $this->setSkin($skin);
    }


    public function initIconsForm()
    {
        $this->getSkin()->readIcons();
        $this->setIconColorSet($this->getSkin()->getIconColorSet());

        $this->form = new ilPropertyFormGUI();

        $this->form->setTitle("Adapt Icon Colors");

        foreach($this->getIconColorSet()->getDefaultColors() as $color){
            $input = new ilColorPickerInputGUI($color->getName(), $this->getFormElementsPrefix().$color->getId());
            $input->setRequired(true);
            $input->setInfo("Usages: ".$color->getUsagesAsString());
            $this->form->addItem($input);

        }

        $this->form->addCommandButton("resetIcons", "Reset Colors");
        $this->form->addCommandButton("updateIcons", "Update Colors");

        $this->form->setFormAction($this->ctrl->getFormAction($this->getParent()));
    }


    function getIconsValues()
    {
        $values = array();
        $colors = $this->getIconColorSet()->getColors();
        foreach($this->getIconColorSet()->getDefaultColors() as $default_color){
            $id = $this->form_elements_prefix.$default_color->getId();
            if($colors[$default_color->getId()]){
                $values[$id] = $colors[$default_color->getId()]->getColor();
            }else{
                $values[$id] = $default_color->getColor();
            }
        }

        $this->form->setValuesByArray($values);
    }
    public function resetIcons()
    {
        $this->getSkin()->resetIcons();
        return $this->renderIcons();
    }

    public function updateIcons()
    {
        $this->initIconsForm();
        if ($this->form->checkInput())
        {
            foreach($this->getIconColorSet()->getDefaultColors() as $color){
                $this->getIconColorSet()->addColor(new KitchenSinkIconColor($color->getId(),$color->getName(),"#".$this->form->getInput($this->form_elements_prefix.$color->getId()),$color->getDescription()));
            }
            $this->skin->updateIcons($this->getIconColorSet());
        }

        $this->form->setValuesByPost();
        return $this->form->getHtml().$this->renderIconsPreviews();
    }


    /**
     * @return html
     */
    public function renderIcons(){
        $this->initIconsForm();
        $this->getIconsValues();
        return $this->form->getHtml().$this->renderIconsPreviews();

    }

    protected function renderIconsPreviews(){
        $icons_per_row = 6;
        $i=1;
        $row_start = "<div class='row'>";
        $row_end = "</div>";
        $html = $row_start;
        foreach($this->getSkin()->getIconFolder()->getIcons() as $icon){
            if(($i % $icons_per_row ) == 0){
                $html .= $row_end;
                $html .= $row_start;
            }
            $i++;
            $icon_tpl = (new ilKitchenSinkPlugin())->getTemplate('entry/tpl.icon.html', true, true);
            $icon_tpl->setVariable("ICON_SPACE", 12/$icons_per_row);
            $icon_tpl->setVariable("ICON_SRC", $icon->getSkinPath());
            $icon_tpl->setVariable("ICON_ALT", $icon->getName());
            $icon_tpl->setVariable("ICON_NAME", $icon->getName());
            if($icon->getType()!= "svg"){
                $icon_tpl->touchBlock("iconAlert");
                $icon_tpl->setVariable("ICON_ALERT","File type is ".$icon->getType());
            }
            //$link_tpl->setVariable("ICON_PATH", $icon->getPath());
            $html .= $icon_tpl->get();
        }
        $html .= $row_end;
        return $html;
    }

    /**
     * @return ilTemplate
     */
    public function getTpl()
    {
        return $this->tpl;
    }

    /**
     * @param ilTemplate $tpl
     */
    public function setTpl($tpl)
    {
        $this->tpl = $tpl;
    }

    /**
     * @return ilCtrl
     */
    public function getCtrl()
    {
        return $this->ctrl;
    }

    /**
     * @param ilCtrl $ctrl
     */
    public function setCtrl($ctrl)
    {
        $this->ctrl = $ctrl;
    }

    /**
     * @return ilKitchenSinkMainGUI
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * @param ilKitchenSinkMainGUI $parent
     */
    public function setParent($parent)
    {
        $this->parent = $parent;
    }

    /**
     * @return KitchenSinkSkin
     */
    public function getSkin()
    {
        return $this->skin;
    }

    /**
     * @param KitchenSinkSkin $skin
     */
    public function setSkin($skin)
    {
        $this->skin = $skin;
    }

    /**
     * @return string
     */
    public function getFormElementsPrefix()
    {
        return $this->form_elements_prefix;
    }

    /**
     * @param string $form_elements_prefix
     */
    public function setFormElementsPrefix($form_elements_prefix)
    {
        $this->form_elements_prefix = $form_elements_prefix;
    }

    /**
     * @return KitchenSinkIconColorSet
     */
    public function getIconColorSet()
    {
        return $this->icon_color_set;
    }

    /**
     * @param KitchenSinkIconColorSet $icon_color_set
     */
    public function setIconColorSet($icon_color_set)
    {
        $this->icon_color_set = $icon_color_set;
    }



}
?>