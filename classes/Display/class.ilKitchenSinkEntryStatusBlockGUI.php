<?php
include_once("./Services/UIComponent/Panel/classes/class.ilPanelGUI.php");

/**
 *
@author            Timon Amstutz <timon.amstutz@ilub.unibe.ch> * @version $Id$

 */
class ilKitchenSinkEntryStatusBlockGUI
{

    /**
     * @var KitchenSinkEntry
     */
    protected $entry;

    /**
     * @var ilPanelGUI
     */
    protected $panel;
    /**
     * ilKitchenSinkEntryStatusBlockGUI constructor.
     * @param KitchenSinkEntry $entry
     */
    public function __construct(KitchenSinkEntry $entry){
        $this->entry = $entry;

        $this->panel = ilPanelGUI::getInstance();
        $this->panel->setHeading("Status");
        $this->panel->setHeadingStyle(ilPanelGUI::HEADING_STYLE_BLOCK);
        $this->panel->setPanelStyle(ilPanelGUI::PANEL_STYLE_PRIMARY);
    }

    public function render(){
        $entry_tpl = (new ilKitchenSinkPlugin())->getTemplate('entry/tpl.entry_status.html', true, true);
        $entry_tpl->touchBlock("status");
        $entry_tpl->setVariable("ALERT_TYPE", $this->getEntry()->getStatusType());

        $entry_tpl->setVariable("ENTRY_STATUS", $this->getEntry()->getStatusEntry());
        $entry_tpl->setVariable("IMPLEMENTATION_STATUS", $this->getEntry()->getStatusImplementation());
        $entry_tpl->setVariable("PHP_CLASS", $this->getEntry()->getPhpClass());
        if($this->getEntry()->getExternalClass()){
            $entry_tpl->setVariable("LIBRARY_HREF", $this->getEntry()->getExternalClass()->href);
            $entry_tpl->setVariable("LIBRARY_NAME", $this->getEntry()->getExternalClass()->name);
        }
        $this->panel->setBody($entry_tpl->get());
        return $this->panel->getHTML();
    }

    /**
     * @return KitchenSinkEntry
     */
    public function getEntry()
    {
        return $this->entry;
    }

    /**
     * @param KitchenSinkEntry $entry
     */
    public function setEntry($entry)
    {
        $this->entry = $entry;
    }


}

?>