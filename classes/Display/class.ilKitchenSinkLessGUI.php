<?php

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
     * ilKitchenSinkEntryGUI constructor.
     * @param KitchenSinkEntry $entry
     * @param KitchenSinkTree $tree
     * @param ilKitchenSinkMainGUI $parent
     */
    public function __construct(ilKitchenSinkMainGUI $parent) {
        global $ilCtrl;

        $this->setParent($parent);
        $this->ctrl = $ilCtrl;
    }

    /**
     * @return html
     */
    public function renderLess(){
        /**
         * @var ilObjUser $ilUser
         */
        global $ilUser;
        $skin_name = "ksSkinOf".$ilUser->getLogin();
        $skin_dir = "./Customizing/global/skin/".$skin_name;

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

        //require_once "./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/libs/lessphp/lessc.inc.php";
        //$less = new lessc;
        var_dump("lessc ".ILIAS_ABSOLUTE_PATH."/Customizing/global/skin/ksSkinOfroot/ksSkinOfroot.less");
        file_put_contents( $skin_dir."/".$skin_name.".css",shell_exec("lessc ".ILIAS_ABSOLUTE_PATH."/Customizing/global/skin/ksSkinOfroot/ksSkinOfroot.less"));
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



}
?>
