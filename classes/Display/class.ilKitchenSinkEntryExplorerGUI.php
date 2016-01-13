<?php
/* Copyright (c) 1998-2013 ILIAS open source, Extended GPL, see docs/LICENSE */

include_once("./Services/UIComponent/Explorer2/classes/class.ilExplorerBaseGUI.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkEntry.php");

/**
 * Explorer example
 */
class ilKitchenSinkEntryExplorerGUI extends ilExplorerBaseGUI
{
    /**
     * @var ilCtrl $ctrl
     */
    protected $ctrl;

    private $nodes = array();

    /**
     * @var string
     */
    protected $parentLink = "";
    //
    // Abstract function that need to be overwritten in derived classes
    //

    /**
     * ilKitchenSinkEntryExplorerGUI constructor.
     * @param $a_expl_id
     * @param ilKitchenSinkEntryGUI $a_parent_obj
     * @param $a_parent_cmd
     */
    public function __construct($a_expl_id, ilKitchenSinkEntryGUI $a_parent_obj, $a_parent_cmd)
    {
        global $ilCtrl;
        $this->ctrl = $ilCtrl;
        parent::__construct($a_expl_id, $a_parent_obj, $a_parent_cmd);

        $this->setParentLink($this->ctrl->getLinkTarget($this->parent_obj, $this->parent_cmd));

        $data = json_decode(file_get_contents($a_parent_obj::KS_DATA_PATH."/".$a_parent_obj::KS_DATA_FILE));

        foreach($data->uiComponent as $entry){
            $nodes[] = new KitchenSinkEntry($entry);
        }
        var_dump($nodes);
        exit;
    }

    /**
     * Get root node.
     *
     * @return mixed root node object/array
     */
    function getRootNode()
    {
        return $this->nodes[0];
    }

    /**
     * Get childs of node
     *
     * @param string $a_parent_id parent node id
     * @return array childs
     */
    function getChildsOfNode($a_parent_node_id)
    {
        $childs = array();
        foreach ($this->nodes[$a_parent_node_id]["childs"] as $c)
        {
            $childs[] = $this->nodes[$c];
        }
        return $childs;
    }

    /**
     * Get content of a node
     *
     * @param mixed $a_node node array or object
     * @return string content of the node
     */
    function getNodeById($a_node_id)
    {
        if(array_key_exists ( $a_node_id, $this->nodes )){
            return $this->nodes[$a_node_id];
        }
        require_once(ILIAS_ABSOLUTE_PATH."/Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Exceptions/class.ilKitchenSinkException.php");
        throw new ilKitchenSinkException(ilKitchenSinkException::INVALID_NODE_ID);

    }

    /**
     * Get content of a node
     *
     * @param mixed $a_node node array or object
     * @return string content of the node
     */
    function getNodeContent($a_node)
    {
        return $a_node["content"];
    }

    function getNodeHref($a_node)
    {
        return $this->getParentLink()."&entry_id=".$a_node["id"];
    }
    /**
     * Get id of a node
     *
     * @param mixed $a_node node array or object
     * @return string id of node
     */
    function getNodeId($a_node)
    {
        return $a_node["id"];
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



}

?>