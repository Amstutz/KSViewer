<?php
include_once("./Services/Component/classes/class.ilPluginConfigGUI.php");
require_once('./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/Message/classes/Administration/class.MessageRecordGUI.php');
//require_once('./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/Message/classes/Models/class.MessageRecordList.php');

/**
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version $Id$*
 */
class ilKitchenSinkConfigGUI extends ilPluginConfigGUI
{

    /**
     * @var ilTemplate
     */
    protected $tpl;
    /**
     * @var ilCtrl $ctrl
     */
    protected $ctrl;



    public function __construct() {
        global $ilCtrl, $tpl;
        $this->ctrl = $ilCtrl;

        $this->tpl = $tpl;
        $tpl->getStandardTemplate();


    }

    function performCommand($cmd)
    {
        global $ilCtrl;

        $this->ctrl = $ilCtrl;

        if($cmd == "configure")
        {
            $this->ctrl->setCmd("index");
        }
        $this->tpl->setContent("Hello Admin");
        $this->tpl->show();
    }
}

?>
