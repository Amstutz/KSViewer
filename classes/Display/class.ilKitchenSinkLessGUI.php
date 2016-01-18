<?php
require_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkLessFile.php");
require_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkLessCategory.php");
require_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkLessComment.php");
require_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkLessVariable.php");
/**
 *
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$*
 */
class ilKitchenSinkLessGUI
{

    /**
     * @var ilCtrl $ctrl
     */
    protected $ctrl;

    /**
     * @var ilKitchenSinkMainGUI
     */
    protected $parent;

    /**
     * @var string
     */
    protected $skin_name = "";

    /**
     * @var string
     */
    protected $skin_dir = "";

    /**
     * @var string
     */
    protected $less_file = "";

    /**
     * @var string
     */
    protected $ilias_less_variables_file = "";

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
        global $ilCtrl, $ilUser;

        $this->setParent($parent);
        $this->ctrl = $ilCtrl;

        $this->setSkinName("ksSkinOf".$ilUser->getLogin());
        $this->setSkinDir("./Customizing/global/skin/".$skin_name);
    }

    protected function createSkin(){

        $skin_name = ;
        $skin_dir = ;

        if(!file_exists (  $skin_dir )){
            if(! mkdir($skin_dir, 0770 ,  $recursive = true ) ){
                throw new ilKitchenSinkException(ilKitchenSinkException::FOLDER_CREATION_FAILED, $skin_dir);
            }
            if(! mkdir($skin_dir."/images", 0770 ,  $recursive = true ) ){
                throw new ilKitchenSinkException(ilKitchenSinkException::FOLDER_CREATION_FAILED, $skin_dir."/images");
            }
        }

        $less_name = $skin_dir."/".$skin_name.".less" ;
        file_put_contents( $less_name, "@import '../../../../templates/default/delos';@import 'variables';");
        file_put_contents( $skin_dir."/variables.less" , "@brand-primary: rgb(214, 0, 43);");

        include_once("./Services/Xml/classes/class.ilXmlWriter.php");

        $xml_writer = new ilXmlWriter();
        $xml_writer->xmlHeader();
        $xml_writer->xmlStartTag("template",array(
            "xmlns"=>"http://www.w3.org",
            "version"=>"1",
            "name"=>$skin_name));
        $xml_writer->xmlStartTag("style",array(
            "name"=>"Kitchen Sink Style of ".$ilUser->getLogin(),
            "id"=>$skin_name,
            "image_directory"=>"images"));

        $xml_writer->xmlEndTag("style");
        $xml_writer->xmlEndTag("template");
        file_put_contents($skin_dir."/template.xml",$xml_writer->xmlDumpMem(true));
    }

    protected function compileLess(){
        $output = shell_exec("lessc ".ILIAS_ABSOLUTE_PATH."/Customizing/global/skin/ksSkinOfroot/ksSkinOfroot.less");
        if(!$output){
            $less_error = shell_exec("lessc ".ILIAS_ABSOLUTE_PATH."/Customizing/global/skin/ksSkinOfroot/ksSkinOfroot.less 2>&1");
            if(!$less_error){
                throw new ilKitchenSinkException(ilKitchenSinkException::LESS_COMPILE_FAILED, "Empty css output, unknown error.");
            }
            throw new ilKitchenSinkException(ilKitchenSinkException::LESS_COMPILE_FAILED, $less_error);
        }
        file_put_contents( $skin_dir."/".$skin_name.".css",shell_exec("lessc ".ILIAS_ABSOLUTE_PATH."/Customizing/global/skin/ksSkinOfroot/ksSkinOfroot.less"));

    }

    protected function readLessVariables(){
        $less_output = new KitchenSinkLessFile();
        $last_variable_comment = null;
        $last_category_id = null;
        $last_category_name = null;

        if ($handle) {
            $line_number = 1;
            while (($line = fgets($handle)) !== false) {

                if(preg_match('/\/\/==\s(.*)/', $line, $out)){
                    //Check Category
                    $last_category_id = $less_output->addItem(new KitchenSinkLessCategory($out[1]));
                    $last_category_name = $out[1];
                } else if(preg_match('/\/\/##\s(.*)/', $line, $out)){
                    //Check Comment Category
                    $last_category = $less_output->getItemById($last_category_id);
                    $last_category->setComment($out[1]);
                } else if(preg_match('/\/\/\*\*\s(.*)/', $line, $out)){
                    //Check Variables Comment
                    $last_variable_comment = $out[1];
                } else if(preg_match('/@(.*)/', $line, $out)){
                    //Check Variables
                    preg_match('/(?:@)(.*)(?:\:)/', $out[0], $variable);
                    preg_match('/(?::)(.*)(?:;)/', $line, $value);
                    $less_output->addItem(new KitchenSinkLessVariables($variable[1],ltrim ( $value[1] ," \t\n\r\0\x0B" ),$last_variable_comment,$last_category_name));
                    $last_variable_comment = 0;
                }else{
                    $less_output->addItem(new KitchenSinkLessComment($line));
                }


                $line_number++;
            }

            var_dump($less_output);
            exit;
    }
    /**
     * @return html
     */
    public function renderLess(){
        $less_variables_file = "./templates/default/less/variables.less";
        $handle = fopen($less_variables_file, "r");




            fclose($handle);
        } else {
            throw new ilKitchenSinkException(ilKitchenSinkException::FILE_OPENING_FAILED);
        }

        exit;
        $ilUser->writePref("style",$skin_name);
        $ilUser->writePref("skin",$skin_name);
        return "Hello World";
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
    public function getSkinName()
    {
        return $this->skin_name;
    }

    /**
     * @param string $skin_name
     */
    public function setSkinName($skin_name)
    {
        $this->skin_name = $skin_name;
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
    public function getLessFile()
    {
        return $this->less_file;
    }

    /**
     * @param string $less_file
     */
    public function setLessFile($less_file)
    {
        $this->less_file = $less_file;
    }

    /**
     * @return string
     */
    public function getIliasLessVariablesFile()
    {
        return $this->ilias_less_variables_file;
    }

    /**
     * @param string $ilias_less_variables_file
     */
    public function setIliasLessVariablesFile($ilias_less_variables_file)
    {
        $this->ilias_less_variables_file = $ilias_less_variables_file;
    }



}
?>
