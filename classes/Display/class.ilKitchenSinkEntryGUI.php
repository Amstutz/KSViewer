<?php
include_once("./Services/UIComponent/Panel/classes/class.ilPanelGUI.php");
include_once("class.ilKitchenSinkEntryStatusBlockGUI.php");

/**
 *
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$*
 */
class ilKitchenSinkEntryGUI
{
    /**
     * @var KitchenSinkEntry
     */
    protected $entry = null;

    /**
     * @var KitchenSinkTree
     */
    protected $tree = null;

    /**
     * @var ilCtrl $ctrl
     */
    protected $ctrl;

    /**
     * @var ilKitchenSinkMainGUI
     */
    protected $parent;

    /**
     * ilKitchenSinkEntryGUI constructor.
     * @param KitchenSinkEntry $entry
     * @param KitchenSinkTree $tree
     * @param ilKitchenSinkMainGUI $parent
     */
    public function __construct(KitchenSinkEntry $entry, KitchenSinkTree $tree, ilKitchenSinkMainGUI $parent) {
        global $ilCtrl;

        $this->setEntry($entry);
        $this->setTree($tree);
        $this->setParent($parent);
        $this->ctrl = $ilCtrl;
    }

    /**
     * @return html
     */
    public function renderEntryCenter(){
        /**
         * @var ilTemplate $tpl
         */
        global $tpl;
        $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/libs/highlight/highlight.pack.js");
        $tpl->addOnLoadCode("hljs.initHighlightingOnLoad();");
        $tpl->addCss("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/libs/highlight/styles/default.css");

        return $this->getDescriptionBlock().$this->getExampleBlock().$this->getRulesBlock().$this->getCodeBlock('html').$this->getCodeBlock('php');
    }

    /**
     * @return string
     */
    protected function getDescriptionBlock(){
        $description_block = ilPanelGUI::getInstance();
        $description_block->setHeading($this->getEntry()->getTitle());

        $description_tpl = (new ilKitchenSinkPlugin())->getTemplate('entry/tpl.entry_description.html', true, true);
        $description_tpl->touchBlock("description");
        $description_tpl->setVariable("PURPOSE", $this->getEntry()->getDescription()->purpose);
        $description_tpl->setVariable("COMPOSITION", $this->getEntry()->getDescription()->composition);
        $description_tpl->setVariable("EFFECT", $this->getEntry()->getDescription()->effect);
        if($this->getEntry()->getExternalClass()){
            $description_tpl->setVariable("LIBRARY_HREF", $this->getEntry()->getExternalClass()->href);
            $description_tpl->setVariable("LIBRARY_NAME", $this->getEntry()->getExternalClass()->name);
        }
        $description_block->setBody($description_tpl->get());
        $description_block->setHeadingStyle(ilPanelGUI::HEADING_STYLE_SUBHEADING);
        $description_block->setPanelStyle(ilPanelGUI::PANEL_STYLE_PRIMARY);
        return $description_block->getHTML();
    }

    /**
     * @return string
     */
    protected function getRulesBlock(){
        if($this->getEntry()->getRules()){
            $rule_block = ilPanelGUI::getInstance();
            $rule_block->setHeading("Rules");
            $html = "<ul>";
            foreach($this->getEntry()->getRules() as $rule){
                $html .= "<li>".$rule."</li>";
            }
            $html .= "</ul>";
            $rule_block->setBody($html);
            $rule_block->setHeadingStyle(ilPanelGUI::HEADING_STYLE_SUBHEADING);
            $rule_block->setPanelStyle(ilPanelGUI::PANEL_STYLE_PRIMARY);
            return $rule_block->getHTML();
        }
        return "";
    }

    /**
     * @return string
     */
    protected function getExampleBlock(){
        if($this->getEntry()->getHtml()){
            $example_block = ilPanelGUI::getInstance();
            $example_block->setHeading("Example");
            $example_block->setBody($this->getEntry()->getHtml());
            $example_block->setHeadingStyle(ilPanelGUI::HEADING_STYLE_SUBHEADING);
            $example_block->setPanelStyle(ilPanelGUI::PANEL_STYLE_PRIMARY);
            return $example_block->getHTML();
        }
        return "";
    }

    /**
     * @return string
     */
    protected function getCodeBlock($type){

        if($this->getEntry()->getHtml()){
            $example_block = ilPanelGUI::getInstance();
            $example_block->setHeading("Code ".$type);
            $code_tpl = (new ilKitchenSinkPlugin())->getTemplate('entry/tpl.entry_code.html', true, true);
            $code_tpl->touchBlock("code");
            $example_block->setHeadingStyle(ilPanelGUI::HEADING_STYLE_SUBHEADING);
            $example_block->setPanelStyle(ilPanelGUI::PANEL_STYLE_PRIMARY);

            if($type == 'html'){
                $code_tpl->setVariable("CODE",htmlentities($this->getEntry()->getHtml()) );
                $example_block->setBody($code_tpl->get());
            }else{
                $code_tpl->setVariable("CODE",htmlentities($this->getEntry()->getPHP()));

                if($this->testPHPExample()){
                    $label = "<div class=\"label label-success\">Test Passed</div>";
                    $example_block->setBody($code_tpl->get().$label);

                }else{
                    $label = "<div class=\"label label-danger\">Test Failed</div>";
                    $failure_code_tpl = (new ilKitchenSinkPlugin())->getTemplate('entry/tpl.entry_code.html', true, true);
                    $failure_code_tpl->touchBlock("code");
                    $failure_code_tpl->setVariable("CODE",htmlentities($this->getEntry()->getPhpClassInstance()->render()));
                    $example_block->setBody($code_tpl->get().$label."<p>Failed PHP-Output: </p>".$failure_code_tpl->get());

                }

            }
            return $example_block->getHTML();
        }

    }

    protected function testPHPExample(){
        $output_php = preg_replace('/\s+/', '',$this->getEntry()->getPhpClassInstance()->render());
        $output_html = preg_replace('/\s+/', '',$this->entry->getHtml());

        if(strcmp($output_php, $output_html) === 0){
            return true;
        }
        return false;
    }
    /**
     * @return html
     */
    public function renderEntryRight(){
        $block = new ilKitchenSinkEntryStatusBlockGUI($this->getEntry());
        return $block->render().$this->getRelationsBlock();
    }

    protected function getRelationsBlock(){
        $this->panel = ilPanelGUI::getInstance();
        $this->panel->setHeadingStyle(ilPanelGUI::HEADING_STYLE_BLOCK);
        $this->panel->setPanelStyle(ilPanelGUI::PANEL_STYLE_PRIMARY);
        $relations_tpl = (new ilKitchenSinkPlugin())->getTemplate('entry/tpl.entry_relations.html', true, true);
        $relations_tpl->setVariable("IS_A_LINK",$this->getHtmlLinkFromEntryId($this->getEntry()->isA));

        if($this->getEntry()->getRelations()->mustUse){
            $relations_tpl->setCurrentBlock("mustUse");
            $relations_tpl->setVariable("MUST_USE_LINKS",$this->getHtmlLinkFromEntryId($this->getEntry()->isA));
        }
        $this->panel->setBody($relations_tpl->get());
        return $this->panel->getHTML();
    }

    /**
     * @param $id
     * @return stdClass
     * @throws ilKitchenSinkException
     */
    public function getHtmlLinkFromEntryId($id){
        $link_tpl = (new ilKitchenSinkPlugin())->getTemplate('entry/tpl.entry_relations_link.html', true, true);
        $link_tpl->setVariable("HREF",  $this->ctrl->getLinkTarget($this->getParent(),"entries")."&node_id=".$this->getEntry()->getRelations()->isA);
        $link_tpl->setVariable("CAPTION", $this->getTree()->getEntryById($this->getEntry()->getRelations()->isA)->getTitle());
        return $link_tpl->get();
    }
    /**
     * @return KitchenSinkEntry
     */
    public function getEntry()
    {
        return $this->entry;
    }

    /**
     * @param KitchenSinkEntry $entry
     */
    public function setEntry($entry)
    {
        $this->entry = $entry;
    }

    /**
     * @return KitchenSinkTree
     */
    public function getTree()
    {
        return $this->tree;
    }

    /**
     * @param KitchenSinkTree $tree
     */
    public function setTree($tree)
    {
        $this->tree = $tree;
    }

    /**
     * @return ilKitchenSinkMainGUI
     */
    public function getParent()
    {
        return $this->parent;
    }

    /**
     * @param ilKitchenSinkMainGUI $parent
     */
    public function setParent($parent)
    {
        $this->parent = $parent;
    }



}
?>
