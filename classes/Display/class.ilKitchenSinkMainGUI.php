<?php
include_once("./Services/UIComponent/Panel/classes/class.ilPanelGUI.php");
include_once("class.ilKitchenSinkEntryExplorerGUI.php");
include_once("class.ilKitchenSinkEntryGUI.php");
include_once("class.ilKitchenSinkLessGUI.php");

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
                    case 'visualizations':
                        $this->tabs_gui->activateTab('visualizations');
                        $this->visualisations();

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

        $this->tabs_gui->addTab('visualizations', 'Visualizations',
            $this->ctrl->getLinkTarget($this, 'visualizations'));
        $this->tabs_gui->addTab('less', 'Less',
            $this->ctrl->getLinkTarget($this, 'less'));
    }

    /**
     * @return string
     */
    protected function getStandardCommand() {
        return 'entries';
    }

    protected function entries(){
        $this->createExplorer();
        $this->tpl->setLeftContent($this->explorer->getHTML());
        $this->entryGUI = new ilKitchenSinkEntryGUI($this->explorer->getCurrentOpenedNode(), $this->explorer->getTree(),$this);
        $this->tpl->setContent($this->entryGUI->renderEntryCenter());
        $this->tpl->setRightContent($this->entryGUI->renderEntryRight());
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
            $data .= file_get_contents($info[0] );
        }
        $data .= $post;
        file_put_contents(self::KS_DATA_PATH."/".self::KS_DATA_FILE, $data);

        ilUtil::sendSuccess("All Entries have been reloaded",true);
        $this->ctrl->redirect($this,"entries");

    }

    /**
     * Create Explorer
     */
    function createExplorer()
    {
        $this->explorer = new ilKitchenSinkEntryExplorerGUI("kitchenSinkEntries", $this, "entries", $_GET["node_id"]);
    }

    protected function visualisations(){
        $this->tpl->setContent("visualisations");
        $this->tpl->show();
    }
    protected function less(){
        $less = new ilKitchenSinkLessGUI($this);
        $this->tpl->setContent($less->renderLess());
        $this->tpl->show();
    }
    protected function updateLess(){
        $less = new ilKitchenSinkLessGUI($this);
        $this->tpl->setContent($less->updateLess());
        $this->tpl->show();
    }
    protected function resetLess(){
        $less = new ilKitchenSinkLessGUI($this);
        $this->tpl->setContent($less->resetLess());
        $this->tpl->show();
    }
}
?>