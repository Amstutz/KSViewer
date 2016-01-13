<?php
/**
 * Class to display Kitchen Sink Entries
 *
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$
 * @ingroup           ServicesUIComponent
 *
 */
class KitchenSinkEntry
{
    protected $data = null;
    public function __construct($json = false) {
        if ($json){
            $this->data = $json;
        }
        else{
            require_once(ILIAS_ABSOLUTE_PATH."/Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Exceptions/class.ilKitchenSinkException.php");
            throw new ilKitchenSinkException(ilKitchenSinkException::EMPTY_JSON_ENTRY);
        }
    }
}

?>
