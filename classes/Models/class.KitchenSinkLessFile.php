<?php
require_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkLessItem.php");


/***
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$
 *
 */
class KitchenSinkLessFile
{
    /**
     * @var KitchenSinkItem[]
     */
    protected $items = array();

    /**
     * @var array
     */
    protected $comments_ids = array();

    /**
     * @var array
     */
    protected $variables_ids= array();

    /**
     * @var array
     */
    protected $categories_ids = array();


    /**
     * @param KitchenSinkItem $item
     * @return int
     */
    public function addItem(KitchenSinkLessItem $item){
        $id = array_push($this->items,$item)-1;

        if(get_class($item)=="KitchenSinkLessComment"){
            $comments_ids[] = $id;
        }else if(get_class($item)=="KitchenSinkLessCategory"){
            $categories_ids[] = $id;
        }else if(get_class($item)=="KitchenSinkLessVariable"){
            $variables_ids[] = $id;
        }

        return $id;
    }

    public function getCategories(){
        $categories = array();

        foreach($this->categories_ids as $category_id){
            $categories[] = $this->items[$category_id];
        }
        return $categories;
    }

    public function getVariablesPerCategory($category = false){
        $variables = array();

        foreach($this->variables_ids as $variables_id){
            if(!$category || $this->items[$variables_id]->getCategory == $category){
                $variables[] = $this->items[$variables_id];
            }
        }
        return $variables;
    }

    public function getItemById($id){
        return $this->items[$id];
    }
}
?>
