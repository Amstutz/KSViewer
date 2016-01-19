<?php
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkLessFile.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkLessCategory.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkLessComment.php");
include_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkLessVariable.php");
include_once("./Services/Xml/classes/class.ilXmlWriter.php");
include_once("./Services/Form/classes/class.ilPropertyFormGUI.php");

/**
 *
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$*
 */
class ilKitchenSinkLessGUI
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
     * @var ilKitchenSinkMainGUI
     */
    protected $parent;

    /**
     * @var ilObjUser $user;
     */
    protected $user;
    /**
     * @var string
     */
    static $default_less_file = '../../../../templates/default/delos.less';

    /**
     * @var string
     */
    static $default_less_variables = "./templates/default/less/variables.less";

    /**
     * @var string
     */
    protected $default_images_folders = "./templates/default/images";

    /**
     * @var string
     */
    static $skin_name = "";

    /**
     * @var string
     */
    protected $skin_dir = "";

    /**
     * @var string
     */
    protected $skin_images_folder = "";

    /**
     * @var string
     */
    protected $skin_variables_file = "variables.less";

    /**
     * @var string
     */
    protected $skin_less_file = "";

    /**
     * @var KitchenSinkLessFile
     */
    protected $less_file = null;

    /**
     * @var string
     */
    protected $form_elements_prefix = "ks-";
    /**
     * ilKitchenSinkEntryGUI constructor.
     * @param KitchenSinkEntry $entry
     * @param KitchenSinkTree $tree
     * @param ilKitchenSinkMainGUI $parent
     */
    public function __construct(ilKitchenSinkMainGUI $parent) {
        /**
         * @var ilObjUser $ilUser
         */
        global $ilCtrl, $ilUser, $tpl;

        $this->user = $ilUser;
        $this->setParent($parent);
        $this->ctrl = $ilCtrl;
        $this->tpl = $tpl;

        $this->setSkinName("ksSkinOf".$this->user->getLogin());
        $this->setSkinDir("./Customizing/global/skin/".$this->getSkinName());
        $this->setSkinImagesFolder($this->getSkinDir()."/images");
        $this->setSkinLessFile(ILIAS_ABSOLUTE_PATH."/Customizing/global/skin/".$this->getSkinName().".less");

    }

    protected function createSkin(){
        if(!file_exists (  $this->getSkinDir() )){
            if(! mkdir($this->getSkinDir() , 0775 ,  $recursive = true ) ){
                throw new ilKitchenSinkException(ilKitchenSinkException::FOLDER_CREATION_FAILED, $this->getSkinDir());
            }
            if(! mkdir($this->getSkinImagesFolder(), 0775 ,  $recursive = true ) ){
                throw new ilKitchenSinkException(ilKitchenSinkException::FOLDER_CREATION_FAILED, $this->getSkinDir()."/images");
            }
        }

        $less_name = $this->getSkinDir()."/".$this->getSkinName().".less" ;
        file_put_contents( $less_name, "@import '".self::getDefaultLessFile()."';@import '".$this->getSkinVariablesFile()."';");

        file_put_contents( $this->getSkinDir()."/".$this->getSkinVariablesFile(),$this->less_file->write());


        $xml_writer = new ilXmlWriter();
        $xml_writer->xmlHeader();
        $xml_writer->xmlStartTag("template",array(
            "xmlns"=>"http://www.w3.org",
            "version"=>"1",
            "name"=>$this->getSkinName()));
        $xml_writer->xmlStartTag("style",array(
            "name"=>"Kitchen Sink Style of ".$this->user->getLogin(),
            "id"=>$this->getSkinName(),
            "image_directory"=>"images"));

        $xml_writer->xmlEndTag("style");
        $xml_writer->xmlEndTag("template");
        file_put_contents($this->getSkinDir()."/template.xml",$xml_writer->xmlDumpMem(true));
    }

    protected function compileLess(){
        $output = shell_exec("lessc ".$this->getSkinLessFile());
        if(!$output){
            $less_error = shell_exec("lessc ".$this->getSkinLessFile()." 2>&1");
            if(!$less_error){
                throw new ilKitchenSinkException(ilKitchenSinkException::LESS_COMPILE_FAILED, "Empty css output, unknown error.");
            }
            throw new ilKitchenSinkException(ilKitchenSinkException::LESS_COMPILE_FAILED, $less_error);
        }
        file_put_contents( $this->getSkinDir()."/".$this->getSkinName().".css",$output);

    }

    protected function selectSkin(){
        $this->user->writePref("skin",$this->getSkinName());
        $this->user->writePref("style",$this->getSkinName());
    }

    /**
     * @param bool|false $force_delos
     * @throws ilKitchenSinkException
     */
    protected function readLessVariables($force_delos = false){

        if($force_delos || !file_exists (  $this->getSkinDir())){
            $variable_file = $this->getDefaultLessVariables();
        } else{
            $variable_file = $this->getSkinDir()."/".$this->getSkinVariablesFile();
        }
        $this->less_file = new KitchenSinkLessFile($variable_file);
        $this->less_file->read();
    }



    public function initLessVariablesForm()
    {
        $this->form = new ilPropertyFormGUI();

        $this->form->setTitle("Adapt Less Variables");

        $focus_variable = $_GET['variable'];
        if($focus_variable){
            $this->tpl->addOnLoadCode("setTimeout(function() { $('#".$this->form_elements_prefix.$focus_variable."').focus();}, 100);");
        }

        foreach($this->less_file->getCategories() as $category){
            $section = new ilFormSectionHeaderGUI();
            $section->setTitle($category->getName());
            $section->setInfo($category->getComment());
            $section->setSectionAnchor($category->getName());
            $this->form->addItem($section);
            foreach($this->less_file->getVariablesPerCategory($category->getName()) as $variable){
                $input = new ilTextInputGUI($variable->getName(), $this->form_elements_prefix.$variable->getName());
                $input->setRequired(true);
                $input->setInfo($variable->getComment());
                $this->form->addItem($input);

            }
        }

        $this->form->addCommandButton("lessResetVariables", "Reset Variables");
        $this->form->addCommandButton("lessUpdatedVariables", "Update Variables");

        $this->form->setFormAction($this->ctrl->getFormAction($this->getParent()));
    }


    function getLessValues()
    {
        $values = array();
        foreach($this->less_file->getCategories() as $category){
            foreach($this->less_file->getVariablesPerCategory($category->getName()) as $variable){
                $values[$this->form_elements_prefix.$variable->getName()] = $variable->getValue();
            }
        }

        $this->form->setValuesByArray($values);
    }
    public function resetLess()
    {
        $this->readLessVariables(true);
        $this->initLessVariablesForm();
        $this->createSkin();
        $this->compileLess();
        $this->ctrl->redirect($this->getParent(), "less");
    }

    public function updateLess()
    {
        $this->readLessVariables();
        $this->initLessVariablesForm();
        if ($this->form->checkInput())
        {
            foreach($this->less_file->getCategories() as $category){
                foreach($this->less_file->getVariablesPerCategory($category->getName()) as $variable){
                    $variable->setValue($this->form->getInput($this->form_elements_prefix.$variable->getName()));
                }
            }

            $this->createSkin();
            $this->compileLess();
            $this->selectSkin();
            $this->ctrl->redirect($this->getParent(), "less");
        }

        $this->form->setValuesByPost();
        return $this->form->getHtml();
    }

    /**
     * @return html
     */
    public function renderLess(){
        $this->readLessVariables();
        $this->initLessVariablesForm();
        $this->getLessValues();
        return $this->form->getHtml();
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

    /**
     * @return string
     */
    static function getDefaultLessFile()
    {
        return self::$default_less_file;
    }

    /**
     * @param $default_less_file
     */
    static function setDefaultLessFile($default_less_file)
    {
        self::$default_less_file = $default_less_file;
    }

    /**
     * @return string
     */
    static function getDefaultLessVariables()
    {
        return self::$default_less_variables;
    }

    /**
     * @param string $default_less_variables
     */
    static function setDefaultLessVariables($default_less_variables)
    {
        self::$default_less_variables = $default_less_variables;
    }

    /**
     * @return string
     */
    public function getDefaultImagesFolders()
    {
        return $this->default_images_folders;
    }

    /**
     * @param string $default_images_folders
     */
    public function setDefaultImagesFolders($default_images_folders)
    {
        $this->default_images_folders = $default_images_folders;
    }

    /**
     * @return string
     */
    public static function getSkinName()
    {
        return self::$skin_name;
    }

    /**
     * @param string $skin_name
     */
    public static function setSkinName($skin_name)
    {
        self::$skin_name = $skin_name;
    }

    /**
     * @return string
     */
    public function getSkinDir()
    {
        return $this->skin_dir;
    }

    /**
     * @param string $skin_dir
     */
    public function setSkinDir($skin_dir)
    {
        $this->skin_dir = $skin_dir;
    }

    /**
     * @return string
     */
    public function getSkinImagesFolder()
    {
        return $this->skin_images_folder;
    }

    /**
     * @param string $skin_images_folder
     */
    public function setSkinImagesFolder($skin_images_folder)
    {
        $this->skin_images_folder = $skin_images_folder;
    }

    /**
     * @return string
     */
    public function getSkinVariablesFile()
    {
        return $this->skin_variables_file;
    }

    /**
     * @param string $skin_variables_file
     */
    public function setSkinVariablesFile($skin_variables_file)
    {
        $this->skin_variables_file = $skin_variables_file;
    }

    /**
     * @return string
     */
    public function getSkinLessFile()
    {
        return $this->skin_less_file;
    }

    /**
     * @param string $skin_less_file
     */
    public function setSkinLessFile($skin_less_file)
    {
        $this->skin_less_file = $skin_less_file;
    }


}
?>