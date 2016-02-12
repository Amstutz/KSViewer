<?php
include_once("class.KSListingFactory.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/UI/Components/CodeBlocks/class.ksCodeBlockGUI.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/UI/Components/GridRows/class.ksGridRowGUI.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/UI/Components/Links/class.ksLink.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/UI/Components/Thumbnails/class.ksThumbnailGUI.php");

/*
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 */

class KSFactory implements ILIAS\UI\Factory
{
    /**
     * @return ILIAS\UI\Listings\Factory
     */
    public function Listing()
    {
        return new KSListingFactory();
    }

    /**
     * @return ILIAS\UI\CodeBlocks\CodeBlock
     */
    public function CodeBlock()
    {
        return new ksCodeBlockGUI();
    }

    /**
     * @return ILIAS\UI\GridRows\GridRow
     */
    public function GridRow()
    {
        return new ksGridRowGUI();
    }

    /**
     * @return ILIAS\UI\Links\Link
     */
    public function Link()
    {
        return new ksLink();
    }

    /**
     * @return ILIAS\UI\Thumbnails\Thumbnail
     */
    public function Thumbnail()
    {
        return new ksThumbnailGUI();
    }
}
?>
