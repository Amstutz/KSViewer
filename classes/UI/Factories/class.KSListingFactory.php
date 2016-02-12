<?php
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/UI/Components/Listings/class.ksUnorderedListGUI.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/UI/Components/Listings/class.ksOrderedListGUI.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/UI/Components/Listings/class.ksDescriptionListGUI.php");

/*
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 */

class KSListingFactory implements ILIAS\UI\Listings\Factory
{

    /**
    * @return \ILIAS\UI\Listings\Listing
    */
    public function unordered(){
        return new ksUnorderedListGUI();
    }

    /**
    * @return \ILIAS\UI\Listings\Listing
    */
    public function ordered(){
        return new ksOrderedListGUI();
    }

    /**
    * @return \ILIAS\UI\Listings\Listing
    */
    public function description(){
        return new ksDescriptionListGUI();
    }
}

?>
