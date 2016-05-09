<?php
// Simple auto loader translate \rooms\classname() to ./rooms/classname.php
spl_autoload_register(function($class) {
    $class = str_replace('\\', '/', $class);
    $class = str_replace('ILIAS/UI/', '', $class);
    $file = './Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/interfaces/' . $class . '.php';
    if(file_exists ($file )){
        require_once($file);
    }

});


include_once("./Services/UIComponent/Panel/classes/class.ilPanelGUI.php");
include_once("class.ilKitchenSinkEntryExplorerGUI.php");
include_once("class.ilKitchenSinkEntryGUI.php");
include_once("class.ilKitchenSinkLessGUI.php");
include_once("class.ilKitchenSinkIconsGUI.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkSkin.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/UI/Factories/class.KSFactory.php");
require_once "Services/UIComponent/Button/classes/class.ilLinkButton.php";

/**
 *
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$*
 * @ilCtrl_isCalledBy ilKitchenSinkMainGUI: ilUIPluginRouterGUI
 */
class ilKitchenSinkMainGUI
{
    /**
     * @var ilTemplate
     */
    protected $tpl;
    /**
     * @var ilCtrl $ctrl
     */
    protected $ctrl;
    /**
     * @var ilTabsGUI
     */
    protected $tabs_gui;
    /**
     * @var xbgLngVarPrefixer
     */
    protected $lng_xbg;

    /**
     * @var ilKitchenSinkEntryExplorerGUI
     */
    protected $explorer = null;

    /**
     * @var ILIAS\UI\Factory
     */
    protected $ui_factory = null;

    /**
     * @var ilKitchenSinkEntryGUI
     */
    protected $entryGUI = null;

    const KS_DATA_PATH = "./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/data";
    const KS_DATA_FILE = "data.json";

    public function __construct() {
        global $ilCtrl, $tpl, $ilTabs;
        $this->ctrl = $ilCtrl;

        $this->tpl = $tpl;
        $tpl->getStandardTemplate();

        $this->tabs_gui = &$ilTabs;

        $this->tpl->setTitle('Kitchen Sink');
        $this->setUiFactory(new KSFactory());
    }


    /**
     * @return bool
     */
    public function executeCommand() {




        $this->setTabs();

        // determine next class in the call structure
        $next_class = $this->ctrl->getNextClass($this);
        switch ($next_class) {
            default:
                $cmd = ($this->ctrl->getCmd()) ? $this->ctrl->getCmd() : $this->getStandardCommand();

                switch ($cmd) {
                    case 'entries':
                    case 'reloadJson':
                        $this->tabs_gui->activateTab('entries');
                        $this->$cmd();

                        //$this->ctrl->forwardCommand(new xbgStdMessageGUI($this));
                        break;
                    case 'icons':
                        $this->tabs_gui->activateTab('icons');
                        $this->icons();

                        //$this->ctrl->forwardCommand(new xbgStdMessageGUI($this));
                        break;
                    case 'updateIcons':
                        $this->tabs_gui->activateTab('icons');
                        $this->updateIcons();
                        //$this->ctrl->forwardCommand(new xbgStdMessageGUI($this));
                        break;
                    case 'resetIcons':
                        $this->tabs_gui->activateTab('icons');
                        $this->resetIcons();
                        //$this->ctrl->forwardCommand(new xbgStdMessageGUI($this));
                        break;
                    case 'less':
                        $this->tabs_gui->activateTab('less');
                        $this->less();
                        //$this->ctrl->forwardCommand(new xbgStdMessageGUI($this));
                        break;
                    case 'lessUpdatedVariables':
                        $this->tabs_gui->activateTab('less');
                        $this->updateLess();
                        //$this->ctrl->forwardCommand(new xbgStdMessageGUI($this));
                        break;
                    case 'lessResetVariables':
                        $this->tabs_gui->activateTab('less');
                        $this->resetLess();
                        //$this->ctrl->forwardCommand(new xbgStdMessageGUI($this));
                        break;
                }
        }
        return TRUE;
    }

    protected function setTabs() {
        $this->tabs_gui->addTab('entries', 'Entries', $this->ctrl->getLinkTarget($this, 'entries'));
        $this->tabs_gui->addTab('less', 'Less', $this->ctrl->getLinkTarget($this, 'less'));
        $this->tabs_gui->addTab('icons', 'Icons', $this->ctrl->getLinkTarget($this, 'icons'));
    }

    /**
     * @return string
     */
    protected function getStandardCommand() {
        return 'entries';
    }

    protected function entries(){
        $toolbar = new ilToolbarGUI();
        $reload_btn = ilLinkButton::getInstance();
        $reload_btn->setCaption('Refresh Entries Test',false);
        $reload_btn->setUrl($this->ctrl->getLinkTarget($this, 'reloadJson'));
        $toolbar->addButtonInstance($reload_btn);
        $this->createExplorer();
        $this->tpl->setLeftNavContent($this->explorer->getHTML());
        $this->entryGUI = new ilKitchenSinkEntryGUI($this->explorer->getCurrentOpenedNode(), $this->explorer->getTree(),$this, $this->getUiFactory());
        $this->tpl->setContent($toolbar->getHTML().$this->entryGUI->renderEntry());
        $this->tpl->show();
    }

    protected function reloadJson(){
        $directory = new RecursiveDirectoryIterator(self::KS_DATA_PATH."/uiComponents");
        $iterator = new RecursiveIteratorIterator($directory);
        $regexIterator = new RegexIterator($iterator, '/^.+\.json$/i', RecursiveRegexIterator::GET_MATCH);

        $pre = "{\"uiComponent\":[";
        $post = "]}";
        $data = $pre;
        foreach ($regexIterator as $info) {
            if($data != $pre){
                $data .= ",";
            }
            $data .= rtrim(file_get_contents($info[0] ),"}").",";
            $data .= $this->addLog(ILIAS_ABSOLUTE_PATH.ltrim(self::KS_DATA_PATH,"."), ".".substr($info[0],strlen(self::KS_DATA_PATH)))."}";
        }
        $data .= $post;
        file_put_contents(self::KS_DATA_PATH."/".self::KS_DATA_FILE, $data);

        ilUtil::sendSuccess("All Entries have been reloaded",true);
        $this->ctrl->redirect($this,"entries");

    }

    protected function addLog($exe_path,$rel_file_path){
        $git_pretty_format = "'{%n  \"commit\": \"%H\",%n \"abbreviated_commit\": \"%h\",%n  \"subject\": \"%s\",%n  \"body\": \"%b\",%n  \"author\": {%n    \"name\": \"%aN\",%n    \"email\": \"%aE\",%n    \"date\": \"%aD\"%n  }},'";
        $command = "cd ".$exe_path."; git log --pretty=format:".$git_pretty_format." '".$rel_file_path."'";
        $log = array();
        exec ($command,$log );
        if(!$log){
            throw new ilKitchenSinkException(ilKitchenSinkException::GIT_LOG_FAILED,$rel_file_path);
        }
        $log = "\"log\":[".rtrim(implode($log),',')."]";
        return $log;
    }

    /**
     * Create Explorer
     */
    function createExplorer()
    {
        $this->explorer = new ilKitchenSinkEntryExplorerGUI("kitchenSinkEntries", $this, "entries", $_GET["node_id"]);
    }


    protected function less(){

        $less = new ilKitchenSinkLessGUI($this,new KitchenSinkSkin());
        $this->tpl->setContent($less->renderLess());
        $this->tpl->show();
    }
    protected function updateLess(){
        $less = new ilKitchenSinkLessGUI($this,new KitchenSinkSkin());
        $this->tpl->setContent($less->updateLess());
        $this->tpl->show();
    }
    protected function resetLess(){
        $less = new ilKitchenSinkLessGUI($this,new KitchenSinkSkin());
        $less->resetLess();
    }

    protected function icons(){
        $icons = new ilKitchenSinkIconsGUI($this,new KitchenSinkSkin(), $this->getUiFactory());
        $this->tpl->setContent($icons->renderIcons());
        $this->tpl->show();
    }
    protected function updateIcons(){
        $icons = new ilKitchenSinkIconsGUI($this,new KitchenSinkSkin(), $this->getUiFactory());
        $this->tpl->setContent($icons->updateIcons());
        $this->tpl->show();
    }
    protected function resetIcons(){
        $icons = new ilKitchenSinkIconsGUI($this,new KitchenSinkSkin(), $this->getUiFactory());
        $this->tpl->setContent($icons->resetIcons());
        $this->tpl->show();
    }

    /**
     * @return \ILIAS\UI\Factory
     */
    public function getUiFactory()
    {
        return $this->ui_factory;
    }

    /**
     * @param \ILIAS\UI\Factory $ui_factory
     */
    public function setUiFactory($ui_factory)
    {
        $this->ui_factory = $ui_factory;
    }


}
?>
