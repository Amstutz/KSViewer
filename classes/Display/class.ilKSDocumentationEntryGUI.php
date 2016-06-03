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
     * @var Entry\ComponentEntry
     */
    protected $entry = null;

    /**
     * @var Entry\ComponentEntries
     */
    protected $entries = null;

    /**
     * @var ilCtrl $ctrl
     */
    protected $ctrl;

    /**
     * @var ilKSDocumentationGUI
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


        $description = $this->f->panel()->block("Description",
            $this->f->listing()->descriptive(
                array(
                    "Purpose" => $this->entry->getDescription()->getProperty("purpose"),
                    "Composition" => $this->entry->getDescription()->getProperty("composition"),
                    "Effect" => $this->entry->getDescription()->getProperty("effect"),
                    "Rivals" => $this->f->listing()->ordered(
                        $this->entry->getDescription()->getProperty("rivals")
                    )
                )
            )
        );
        /**
        ->withCard($this->f->card(
            "Title", "Content",$this->f->image()->responsive("./templates/default/images/logo/ilias_logo_114x114.png", "Thumbnail Example"
        )))**/


        $rule_listings = array();
        foreach($this->entry->getRulesAsArray() as $categoery => $category_rules){
            $rule_listings[ucfirst($categoery)] = $this->f->listing()->ordered($category_rules);
        }

        $rules = $this->f->panel()->block("Rules",
            $this->f->listing()->descriptive($rule_listings)
        );

        $examples_snippets = array();

        if($this->entry->getExamples()){
            foreach($this->entry->getExamples() as $name => $path){
                include_once($path);
                $examples_snippets[] = $this->f->text()->heading(ucfirst(str_replace("_"," ",$name)));
                $examples_snippets[] = $this->f->generic($name());
                $examples_snippets[] = $this->f->text()->code(str_replace("<?php\n","",file_get_contents ($path)));
            }

        }

        $examples = $this->f->panel()->block("Examples", $examples_snippets);






        $this->entry->getExamples();

        $relations = $this->f->panel()->block("Relations",
            $this->f->listing()->descriptive(
                array(
                    "Parents" => $this->f->listing()->ordered(
                        $this->entries->getParentsOfEntryTitles($this->entry->getId())
                    ),
                    "Descendants" => $this->f->listing()->unordered(
                        $this->entries->getDescendantsOfEntryTitles($this->entry->getId())
                    )
                )
            )
        );

        $bulletin = $this->f->panel()->bulletin($this->entry->getTitle(), array($description,$rules,$examples,$relations));


        return $this->r->render($bulletin);
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
            //$this->getLogBlock()**/

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
