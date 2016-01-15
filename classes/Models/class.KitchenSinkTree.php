<?php
require_once(ILIAS_ABSOLUTE_PATH."/Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Exceptions/class.ilKitchenSinkException.php");


/**
 * Class to display KitchenSinkCollection
 *
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$
 * @ingroup           ServicesUIComponent
 *
 */
class KitchenSinkTree
{

    /**
     * @var string
     */
    protected $root_entry_id = "";

    /**
     * @var KitchenSinkEntry[]
     */
    protected $id_to_entry_map = array();


    /**
     * @param KitchenSinkEntry $entry
     * @throws ilKitchenSinkException
     */
    public function addEntry(KitchenSinkEntry $entry){

        if($this->id_to_entry_map[$entry->getId()]){
            if($this->id_to_entry_map[$entry->getId()]->isDummy()){
                $entry->setChildrenIds($this->id_to_entry_map[$entry->getId()]->getChildrenIds());
                $this->id_to_entry_map[$entry->getId()] = $entry;
            }else{
                throw new ilKitchenSinkException(ilKitchenSinkException::DUPLICATE_ENTRY, $entry->getId());

            }
        }

        $this->id_to_entry_map[$entry->getId()] = $entry;

        if($entry->getId() == "root"){
            if($this->getRootEntryId() != "" && !$this->getRootEntry()->isDummy()){
                throw new ilKitchenSinkException(ilKitchenSinkException::DUPLICATE_ROOT_ENTRY, $entry->getId());
            }
            else($this->setRootEntryId($entry->getId()));
        }
        else {
            if(!$this->id_to_entry_map[$entry->getRelations()->isA]){
                $this->id_to_entry_map[$entry->getRelations()->isA] = new KitchenSinkEntry(false, $entry->getRelations()->isA);
            }

            $this->id_to_entry_map[$entry->getRelations()->isA]->addChild($entry->getId());

        }
    }

    /**
     * @return string
     */
    public function getRootEntryId(){
        return $this->root_entry_id;
    }

    /**
     * @param $id
     */
    public function setRootEntryId($id)
    {
        $this->root_entry_id = $id;
    }

    /**
     * @return KitchenSinkEntry
     * @throws ilKitchenSinkException
     */
    public function getRootEntry(){
        return $this->getEntryById($this->getRootEntryId());
    }

    /**
     * @param string $id
     * @return KitchenSinkEntry
     * @throws ilKitchenSinkException
     */
    public function getEntryById($id = "")
    {
        if(array_key_exists ( $id, $this->id_to_entry_map )){
            return $this->id_to_entry_map[$id];
        }
        throw new ilKitchenSinkException(ilKitchenSinkException::INVALID_ID,$id);

    }


}

?>
