<?php

/* Copyright (c) 1998-2010 ILIAS open source, Extended GPL, see docs/LICENSE */

include_once('./Services/UIComponent/classes/class.ilUIHookPluginGUI.php');
include_once('./Services/UIComponent/Tabs/classes/class.ilTabsGUI.php');

/**
 * User interface hook class for Kitchen Sink Plugin
 *
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 *-
 *
 * @version $Id$
 * @ingroup ServicesUIComponent
 */
class ilKitchenSinkUIHookGUI extends ilUIHookPluginGUI {

    function __construct() {
        global $ilCtrl;
        /**
         * @var $ilCtrl ilCtrl
         */
        $this->ctrl = $ilCtrl;
    }


    /**
     * @param       $a_comp
     * @param       $a_part
     * @param array $a_par
     *
     * @return array
     */
    function getHTML($a_comp, $a_part, $a_par = array())
    {
        global $tpl;

        if($tpl)
        {
            $hook = $a_comp . '/' . $a_part;

            if ($hook == '/template_get' AND $a_par['tpl_id'] == 'Services/MainMenu/tpl.main_menu.html') {
                $html = "";
                $mode = ilUIHookPluginGUI::PREPEND;

                return array('mode' => $mode, 'html' => $html);
            }


            return array(
                'mode' => ilUIHookPluginGUI::KEEP,
                'html' => ''
            );
        }
    }

    /**
     * @param       $a_comp
     * @param       $a_part
     * @param array $a_par
     */
    function modifyGUI($a_comp, $a_part, $a_par = array()) {

    }

}
?>
