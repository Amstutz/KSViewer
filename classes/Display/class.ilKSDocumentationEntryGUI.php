<?php
include_once("./Services/UIComponent/Panel/classes/class.ilPanelGUI.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/Less/class.KitchenSinkLessFile.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkSkin.php");

include_once ("Services/Form/classes/class.ilPropertyFormGUI.php");

use ILIAS\UI\Implementation\Crawler\Entry as Entry;

/**
 *
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$*
 */
class ilKSDocumentationEntryGUI
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
     * @var ILIAS\UI\Factory
     */
    protected $f = null;

    /**
     * @var ILIAS\UI\Renderer
     */
    protected $r = null;

    /**
     * ilKSDocumentationEntryGUI constructor.
     * @param ilKSDocumentationGUI $parent
     * @param Entry\ComponentEntry $entry
     * @param Entry\ComponentEntries $entries
     */
    public function __construct(ilKSDocumentationGUI $parent, Entry\ComponentEntry $entry, Entry\ComponentEntries $entries) {
        global $ilCtrl,$DIC;

        $this->f = $DIC->ui()->factory();
        $this->r = $DIC->ui()->renderer();

        $this->setEntry($entry);
        $this->setEntries($entries);
        $this->setParent($parent);
        $this->ctrl = $ilCtrl;

    }

    /**
     * @return html
     */
    public function renderEntry(){
        /**
         * @var ilTemplate $tpl
         */
        global $tpl;
        $tpl->addJavaScript("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/libs/highlight/highlight.pack.js");
        $tpl->addOnLoadCode("hljs.initHighlightingOnLoad();");
        $tpl->addCss("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/libs/highlight/styles/default.css");
        $tpl->addCss("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/entry/css/entry.css");

        $unordered = $this->f->listing()->unordered(
            array(
                $this->f->text()->standard("Point 1"),$this->f->text()->standard("Point 2"),$this->f->text()->standard("Point 3")
            )
        );
        $ordered = $this->f->listing()->ordered(
            array(
                $this->f->text()->standard("Point 1"),$this->f->text()->standard("Point 2"),$this->f->text()->standard("Point 3")
            )
        );
        $descriptive = $this->f->listing()->descriptive(
            array(
                array($this->f->text()->standard("Description 1"),$this->f->text()->standard("Point 1")),
                array($this->f->text()->standard("Description 2"),$this->f->text()->standard("Point 2")),
                array($this->f->text()->standard("Description 3"),$this->f->text()->standard("Point 3"))
            )
        );


        $html =
            "Unordered: ".$this->r->render($unordered).
            "Ordered: ".$this->r->render($ordered).
            "Descriptive: ".$this->r->render($descriptive);


        $standardLink = $this->f->link("http://www.google.ch",$this->f->text()->standard("GOOGLE"));
        $headingLink = $this->f->link("http://www.google.ch",$this->f->text()->heading("GOOGLE"));


        $html .=
            "Standard: ".$this->r->render($standardLink)."</br>".
            "Heading: ".$this->r->render($headingLink)."</br>";


        $image = $this->f->image()->responsive("./templates/default/images/logo/ilias_logo_114x114.png", "Thumbnail Example");

        $card = $this->f->card("Title", "Content",$image);

        $html .= "Test Thumbnail: ".$this->r->render($card)."</br>";

        $orderedList = $this->f->listing()->ordered(array(
                $this->f->text()->standard("Point 1"),$this->f->text()->standard("Point 2"),$this->f->text()->standard("Point 3")
            )
        );


        $card = $this->f->card("ILIAS", "Everybody loves ILIAS",
            $this->f->image()->responsive("./templates/default/images/logo/ilias_logo_114x114.png", "Card Example")
        );

        $row = $this->f->grid()->row(
            array(
                $this->f->grid()->column(array($orderedList),10),
                $this->f->grid()->column(array($card),2),
            )
        );


        $blockPanel1 = $this->f->panel()->block("Title of Block 1",
            array($row)
        );

        $blockPanel2 = $this->f->panel()->block("Title of Block 2",
            array(
                $this->f->listing()->descriptive(
                    array(
                        array($this->f->text()->standard("Description 1"),$this->f->text()->standard("Point 1")),
                        array($this->f->text()->standard("Description 2"),$this->f->text()->standard("Point 2")),
                        array($this->f->text()->standard("Description 3"),$this->f->text()->standard("Point 3"))
                    )
                )
            )
        );

        $bulletin = $this->f->panel()->bulletin("Bulletin for the Win", array($blockPanel1,$blockPanel2));

        $html .=  $this->r->render($bulletin);

        return $html;




        return $this->r->render($this->f->text()->heading("test"));

        /**
        $description_block = ilPanelGUI::getInstance();
        $description_block->setHeading($this->getEntry()->getTitle());
        $description_block->setHeadingStyle(ilPanelGUI::HEADING_STYLE_SUBHEADING);
        $description_block->setPanelStyle(ilPanelGUI::PANEL_STYLE_PRIMARY);
        $description_block->setBody(
            $this->getDescriptionBlock().
            $this->getExampleBlock().
            $this->getRulesBlock().
            $this->getRelationsBlock().
            $this->getLessBlock().
            $this->getCodeBlock('html').
            $this->getCodeBlock('php')
            //$this->getLogBlock()
        );**/
    }

    /**
     * @return string
     */
    protected function getDescriptionBlock(){
        $description_panel->setHeading('General');
        $description_panel->setHeadingStyle(ilPanelGUI::HEADING_STYLE_BLOCK);
        $description_panel->setPanelStyle(ilPanelGUI::PANEL_STYLE_SECONDARY);


        $description_panel->setBody($this->getUiFactory()->GridRow()
            ->addColumn(
                $this->getUiFactory()->listing()->description()->setElements(array(
                    "Purpose"=>$this->getEntry()->getDescription()->getPurpose(),
                    "Composition"=>$this->getEntry()->getDescription()->getComposition(),
                    "Effect"=>$this->getEntry()->getDescription()->getEffect(),
                    "Rival Elements"=>$this->getUiFactory()->listing()->ordered()
                        ->setElements($this->getEntry()->getDescription()->getRivalElements())
                        ->to_html_string()
                ))->to_html_string()
            ,8)
            ->addColumn(
                $this->getUiFactory()->Thumbnail()
                ->setTitle("Status")
                ->setType($this->getEntry()->getStatusType())
                ->setContent(
                    $this->getUiFactory()->listing()->description()->setElements(array(
                        "Entry Status"=>$this->getEntry()->getStatusEntry(),
                        "Implementation Status"=>$this->getEntry()->getStatusImplementation(),
                        "Php Class"=>$this->getEntry()->getPhpClass(),
                        "External Library"=>$this->getUiFactory()->Link()
                            ->setCaption($this->getEntry()->getExternalClass()->name)
                            ->setHref($this->getEntry()->getExternalClass()->href)
                            ->to_html_string()
                    ))->to_html_string()
                )->to_html_string()
            ,4)->to_html_string());

        return $description_panel->getHTML();
    }

    /**
     * @return string
     */
    protected function getExampleBlock(){
        if($this->getEntry()->getHtml()){
            $example_block = ilPanelGUI::getInstance();
            $example_block->setHeading('Example');
            $example_block->setBody($this->getEntry()->getHtml());
            $example_block->setHeadingStyle(ilPanelGUI::HEADING_STYLE_BLOCK);
            $example_block->setPanelStyle(ilPanelGUI::PANEL_STYLE_SECONDARY);
            return $example_block->getHTML();
        }
        return "";
    }

    /**
     * @return string
     */
    protected function getRulesBlock(){
        if($this->getEntry()->getRules()){
            $rule_panel = ilPanelGUI::getInstance();
            $rule_panel->setHeading("Rules");
            $rule_panel->setHeadingStyle(ilPanelGUI::HEADING_STYLE_BLOCK);
            $rule_panel->setPanelStyle(ilPanelGUI::PANEL_STYLE_SECONDARY);

            $rules_categories = $this->getUiFactory()->listing()->description();
            if(is_array($this->getEntry()->getRules())){
                foreach($this->getEntry()->getRules() as $rule_category){
                    if(is_array($rule_category->rules)){
                        $rules = $this->getUiFactory()->listing()->ordered();
                        foreach($rule_category->rules as $id => $rule){
                            $rules->setElementByKey($id,$rule->description);
                        }
                        $rules_categories->setElementByKey($rule_category->id,$rules->to_html_string());
                    }

                }
                $rule_panel->setBody($rules_categories->to_html_string());

            }else{
                $rule_panel->setBody("No rules defined");
            }

            return $rule_panel->getHTML();
        }
        return "";
    }

    protected function getRelationsBlock(){
        $this->panel = ilPanelGUI::getInstance();
        $this->panel->setHeading("Relations");
        $this->panel->setHeadingStyle(ilPanelGUI::HEADING_STYLE_BLOCK);
        $this->panel->setPanelStyle(ilPanelGUI::PANEL_STYLE_PRIMARY);

        $this->panel->setBody($this->getUiFactory()->listing()->description()->setElements(array(
            "Is A" => $this->getHtmlLinksFromEntryIds($this->getTree()->getParentsOfEntry($this->getEntry()->getId())),
            "Children" => $this->getHtmlLinksFromEntryIds($this->getEntry()->getChildrenIds()),
            "Must be used by" => $this->getHtmlLinksFromEntryIds($this->getEntry()->getMustBeUsedBy()),
            "May be used by" => $this->getHtmlLinksFromEntryIds($this->getEntry()->getMayBeUsedBy()))
        )->to_html_string());

        return $this->panel->getHTML();
    }

    protected function getLessBlock(){
        $this->panel = ilPanelGUI::getInstance();
        $this->panel->setHeading("Less");
        $this->panel->setHeadingStyle(ilPanelGUI::HEADING_STYLE_BLOCK);
        $this->panel->setPanelStyle(ilPanelGUI::PANEL_STYLE_PRIMARY);

        if($this->getEntry()->getLessVariables()){
            $less_file = new KitchenSinkLessFile(KitchenSinkSkin::getDefaultLessVariablesFile());
            $less_file->read();

            $less_links = "";

            foreach($this->getEntry()->getLessVariables() as $variable_name){
                $variable = $less_file->getVariableByName($variable_name);
                if($variable){
                    $less_links .=  $this->getHtmlLinkForVariable($variable)."; ";
                }else{
                    $less_links .= $variable_name." (Not found in variables.less); ";
                }

            }
        }
        $this->panel->setBody($less_links);
        return $this->panel->getHTML();
    }

    /**
     * @return string
     */
    protected function getCodeBlock($type){

        if($this->getEntry()->getHtml()){
            $code_panel = ilPanelGUI::getInstance();
            $code_panel->setHeading("Code ".$type);
            $code_panel->setHeadingStyle(ilPanelGUI::HEADING_STYLE_BLOCK);
            $code_panel->setPanelStyle(ilPanelGUI::PANEL_STYLE_SECONDARY);

            $code_block = $this->getUiFactory()->codeBlock();
            $code_block->setType($type);

            if($type == 'html'){
                $code_block->setCode(htmlentities($this->getEntry()->getHtml()));
                $code_panel->setBody($code_block->to_html_string());
            }if(false){
                //$code_block->setCode(htmlentities($this->getEntry()->getPhp()));
                if($this->testPHPExample()){
                    $label = "<div class=\"label label-success\">Test Passed</div>";

                    $code_panel->setBody($code_block->to_html_string().$label);

                }else{
                    $label = "<div class=\"label label-danger\">Test Failed</div>";
                    //$failure_code_tpl = (new ilKitchenSinkPlugin())->getTemplate('entry/tpl.entry_code.html', true, true);
                    //$failure_code_tpl->touchBlock("code");
                    //$failure_code_tpl->setVariable("CODE",htmlentities($this->getEntry()->getPhpClassInstance()->render()));
                    $code_panel->setBody($code_block->to_html_string().$label);//."<p>Failed PHP-Output: </p>".$failure_code_tpl->get());

                }

            }
            return $code_panel->getHTML();
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



    public function getLogBlock(){

        $this->panel = ilPanelGUI::getInstance();
        $this->panel->setHeading("Change Log");
        $this->panel->setHeadingStyle(ilPanelGUI::HEADING_STYLE_BLOCK);
        $this->panel->setPanelStyle(ilPanelGUI::PANEL_STYLE_PRIMARY);
        $log_html = "";
        foreach($this->entry->getLog() as $log_entry){

            $log_html .= "<p>".$log_entry->author->date.": ".$log_entry->subject." by ".$log_entry->author->name."</p>";
        }
        $this->panel->setBody($log_html);
        return $this->panel->getHTML();
    }

    /**
     * @param KitchenSinkLessVariable $variable
     * @return string
     */
    protected function getHtmlLinkForVariable(KitchenSinkLessVariable $variable){
        return $this->getUiFactory()->Link()
            ->setHref($this->ctrl->getLinkTarget($this->getParent(),"less")."&variable=".$variable->getName()."#".$variable->getCategoryName())
            ->setCaption( $variable->getName())
            ->to_html_string();
    }


    /**
     * @param array $ids
     * @return string
     */
    protected function getHtmlLinksFromEntryIds(array $ids){
        $html = "";
        foreach($ids as $id){
            $html .= $this->getHtmlLinkFromEntryId($id)."; ";
        }
        return $html;
    }
    /**
     * @param $id
     * @return stdClass
     * @throws ilKitchenSinkException
     */
    protected function getHtmlLinkFromEntryId($id){
        return $this->getUiFactory()->Link()
            ->setHref($this->ctrl->getLinkTarget($this->getParent(),"entries")."&node_id=".$this->getTree()->getEntryById($id)->getId())
            ->setCaption($this->getTree()->getEntryById($id)->getTitle())
            ->to_html_string();
    }
    /**
     * @return Entry\ComponentEntry
     */
    public function getEntry()
    {
        return $this->entry;
    }

    /**
     * @param Entry\ComponentEntry $entry
     */
    public function setEntry(Entry\ComponentEntry $entry)
    {
        $this->entry = $entry;
    }

    /**
     * @return Entry\ComponentEntries
     */
    public function getEntries()
    {
        return $this->entries;
    }

    /**
     * @param Entry\ComponentEntries $entries
     */
    public function setEntries(Entry\ComponentEntries $entries)
    {
        $this->entries = $entries;
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
