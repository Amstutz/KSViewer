<?php

/* Copyright (c) 1998-2010 ILIAS open source, Extended GPL, see docs/LICENSE */

include_once('./Services/UIComponent/classes/class.ilUIHookPluginGUI.php');
include_once('./Services/UIComponent/Tabs/classes/class.ilTabsGUI.php');
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Display/class.ilKitchenSinkMainGUI.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Display/class.ilKSDocumentationGUI.php");



/**
 * User interface hook class for Kitchen Sink Plugin
 *
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 *
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
                /**
                $tpl->addJavaScript("Services/UIComponent/Modal/js/Modal.js",true);

                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/uiTests.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/report/ruleReport.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/report/ruleDisplay.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/report/reportsDisplay.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/report/reportsSummary.js",true);

                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/content/wording.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/content/compareValues.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/content/wrapElement.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/content/getContent.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/content/getText.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/content/countWords.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/content/contentSanitize.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/content/generateIgnoredList.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/content/generateRegex.js",true);


                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/structure/countRelatives.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/structure/getRelatives.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/structure/getRelativesByChain.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/structure/getSelector.js",true);

                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/css/checkVisible.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/css/getRect.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/css/collisionCheck.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/css/getBackgroundColor.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/css/colorCheck.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/css/getColorFromString.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/css/getColor.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/css/getCSSProperty.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/css/propertyCheck.js",true);

                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/simulate/simulate.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/accessibility/isFocusable.js",true);


                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/tests/testRule.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/tests/content/wording.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/tests/structure/structure.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/tests/css/css.js",true);
                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/tests/accessibility/accessibility.js",true);

                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/tests/testVariant.js",true);


                $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/js/clientTests/helper/log/log.js",true);

**/


                //$tpl->addOnLoadCode("il.uiTests.setEntries(".json_encode(file_get_contents(ilKSDocumentationGUI::$KS_DATA_PATH)).");");
                $html = "";
                $mode = ilUIHookPluginGUI::APPEND;

                return array('mode' => $mode, 'html' => $html);
            }


            return array(
                'mode' => ilUIHookPluginGUI::KEEP,
                'html' => 'Testing'
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