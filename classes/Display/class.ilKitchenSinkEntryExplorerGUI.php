<?php
/* Copyright (c) 1998-2013 ILIAS open source, Extended GPL, see docs/LICENSE */

include_once("./Services/UIComponent/Explorer2/classes/class.ilExplorerBaseGUI.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkEntry.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkTree.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/class.ilKitchenSinkPlugin.php");

include_once("./Services/UIComponent/Panel/classes/class.ilPanelGUI.php");

/**
 * Explorer example
 */
class ilKitchenSinkEntryExplorerGUI extends ilExplorerBaseGUI
{
    /**
     * @var ilCtrl $ctrl
     */
    protected $ctrl;

    /**
     * @var string
     */
    protected $parentLink = "";

    /**
     * @var KitchenSinkTree
     */
    protected $tree = null;

    /**
     * @var string
     */
    protected $current_opened_node_id = "";
    /**
     * ilKitchenSinkEntryExplorerGUI constructor.
     * @param $a_expl_id
     * @param ilKitchenSinkEntryGUI $a_parent_obj
     * @param $a_parent_cmd
     */
    public function __construct($a_expl_id, ilKitchenSinkMainGUI $a_parent_obj, $a_parent_cmd, $current_opened_node_id)
    {
        global $ilCtrl;
        $this->ctrl = $ilCtrl;
        parent::__construct($a_expl_id, $a_parent_obj, $a_parent_cmd);

        $this->setParentLink($this->ctrl->getLinkTarget($this->parent_obj, $this->parent_cmd));
        $data = json_decode(file_get_contents($a_parent_obj::KS_DATA_PATH."/".$a_parent_obj::KS_DATA_FILE));

        if(!$data){
            throw new ilKitchenSinkException(ilKitchenSinkException::PARSING_JSON_FAILED, $a_parent_obj::KS_DATA_PATH."/".$a_parent_obj::KS_DATA_FILE);
        }
        $this->setTree(new KitchenSinkTree());

        foreach($data->uiComponent as $entry){
            $this->getTree()->addEntry(new KitchenSinkEntry($entry));
        }

        if(!$current_opened_node_id){
            $this->setCurrentOpenedNodeId("root");
        }else{
            $this->setCurrentOpenedNodeId($current_opened_node_id);
        }
        $this->openNodesRecursively($this->getCurrentOpenedNodeId());

    }

    protected function openNodesRecursively($id){
        $this->setNodeOpen($id);
        $parent_id = $this->getTree()->getEntryById($id)->getRelations()->isA;
        if($parent_id != "root"){
            $this->openNodesRecursively($parent_id);
        }
    }
    /**
     * Get root node.
     *
     * @return mixed root node object/array
     */
    function getRootNode()
    {
        return $this->getTree()->getRootEntry();
    }

    /**
     * @param $a_parent_node_id
     * @return KitchenSinkEntry[]
     */
    function getChildsOfNode($a_parent_node_id)
    {

        $entry = $this->getTree()->getEntryById($a_parent_node_id);

        /**
         * @var KitchenSinkEntry[]
         */
        $childs = array();
        foreach ($entry->getChildrenIds() as $child_id)
        {
            $childs[$child_id] = $this->getTree()->getEntryById($child_id);
        }
        return $childs;
    }

    /**
     * @param $a_entry_id
     * @throws ilKitchenSinkException
     */
    function getNodeById($a_entry_id)
    {
        return $this->getTree()->getEntryById($a_entry_id);
    }

    /**
     * @param KitchenSinkEntry $entry
     * @return KitchenSinkEntry
     */
    function getNodeContent($entry)
    {
        return $entry->getTitle();
    }

    /**
     * @param KitchenSinkEntry $entry
     * @return string
     */
    function getNodeHref($entry)
    {
        return $this->getParentLink()."&node_id=".$entry->getId();
    }

    /**
     * @param KitchenSinkEntry $entry
     * @return bool
     */
    function isNodeHighlighted($entry)
    {
        return $entry->getId() == $this->getCurrentOpenedNode()->getId();
    }
    /**
     * @param KitchenSinkEntry $entry
     * @return mixed
     */
    function getNodeId($entry)
    {
        return $entry->getId();
    }

    /**
     * @return string
     */
    public function getParentLink()
    {
        return $this->parentLink;
    }

    /**
     * @param string $parentLink
     */
    public function setParentLink($parentLink)
    {
        $this->parentLink = $parentLink;
    }

    /**
     * @return KitchenSinkTree
     */
    public function getTree()
    {
        return $this->tree;
    }

    /**
     * @param KitchenSinkTree $tree
     */
    public function setTree($tree)
    {
        $this->tree = $tree;
    }

    /**
     * @return string
     */
    public function getCurrentOpenedNodeId()
    {
        return $this->current_opened_node_id;
    }

    /**
     * @param string $current_opened_node_id
     */
    public function setCurrentOpenedNodeId($current_opened_node_id)
    {
        $this->current_opened_node_id = $current_opened_node_id;
    }

    /**
     *
     */
    public function getHTML()
    {
        /**
        $explorer_panel = ilPanelGUI::getInstance();
        $dropdown = (new ilKitchenSinkPlugin())->getTemplate('entry/tpl.tree_dropdown.html', true, true);
        $dropdown->touchBlock("dropdown");
        $dropdown->setVariable("HREF_RELOAD_ENTRIES", $this->ctrl->getLinkTarget($this->parent_obj,"reloadJson"));


        $explorer_panel->setHeading("Kitchen Sink Entries ".$dropdown->get());
        $explorer_panel->setBody(parent::getHTML());
        $explorer_panel->setHeadingStyle(ilPanelGUI::HEADING_STYLE_BLOCK);
        $explorer_panel->setPanelStyle(ilPanelGUI::PANEL_STYLE_PRIMARY);
         */



        return parent::getHTML();
    }

    /**
     * @return KitchenSinkEntry
     * @throws ilKitchenSinkException
     */
    public function getCurrentOpenedNode(){
        return $this->getTree()->getEntryById($this->getCurrentOpenedNodeId());
    }

}

?>