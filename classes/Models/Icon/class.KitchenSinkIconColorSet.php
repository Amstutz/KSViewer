<?php
require_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/Icon/class.KitchenSinkIconColor.php");


/***
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$
 *
 */
class KitchenSinkIconColorSet
{
    /**
     * @var KitchenSinkIconColor[]
     */
    static $default_colors = array();

    /**
     * @var KitchenSinkIconColor[]
     */
    static $colors = array();

    static $color_set_file_name = "icon_color_set.json";


    /**
     * KitchenSinkIconColorSet constructor.
     */
    public function __construct()
    {

    }


    public function setDefaultColors()
    {
        $this->addDefaultColor(new KitchenSinkIconColor("logo_1", "ILIAS Logo 1", "#466488"));
        $this->addDefaultColor(new KitchenSinkIconColor("logo_2", "ILIAS Logo 2", "#003C65"));

        $this->addDefaultColor(new KitchenSinkIconColor("blue_1", "Blue 1", "#0F4186"));
        $this->addDefaultColor(new KitchenSinkIconColor("blue_2", "Blue 2", "#002555"));
        $this->addDefaultColor(new KitchenSinkIconColor("blue_3", "Blue 3", "#4C6586"));
        $this->addDefaultColor(new KitchenSinkIconColor("blue_4", "Blue 4", "#5A78A0"));
        $this->addDefaultColor(new KitchenSinkIconColor("blue_5", "Blue 5", "#536387"));
        $this->addDefaultColor(new KitchenSinkIconColor("blue_6", "Blue 6", "#6276A2"));
        $this->addDefaultColor(new KitchenSinkIconColor("blue_7", "Blue 7", "#5A77A0"));
        $this->addDefaultColor(new KitchenSinkIconColor("blue_8", "Blue 8", "#4C6486"));
        $this->addDefaultColor(new KitchenSinkIconColor("blue_9", "Blue 9", "#21C4D7"));
        $this->addDefaultColor(new KitchenSinkIconColor("blue_10", "Blue 10", "#32D0F6"));
        $this->addDefaultColor(new KitchenSinkIconColor("blue_11", "Blue 11", "#012356"));
        $this->addDefaultColor(new KitchenSinkIconColor("blue_12", "Blue 12", "#0D3479"));


        $this->addDefaultColor(new KitchenSinkIconColor("green_1", "Green 1", "#4B823C"));
        $this->addDefaultColor(new KitchenSinkIconColor("green_2", "Green 2", "#6EA03C"));
        $this->addDefaultColor(new KitchenSinkIconColor("green_3", "Green 3", "#538132"));
        $this->addDefaultColor(new KitchenSinkIconColor("green_4", "Green 4", "#74A029"));

        $this->addDefaultColor(new KitchenSinkIconColor("brown_1", "Brown 1", "#4C3327"));

        $this->addDefaultColor(new KitchenSinkIconColor("warning_1", "Warning 1", "#E56E1E"));
        $this->addDefaultColor(new KitchenSinkIconColor("warning_2", "Warning 2", "#FF8D2C"));
        $this->addDefaultColor(new KitchenSinkIconColor("warning_3", "Warning 3", "#E56E1E"));
        $this->addDefaultColor(new KitchenSinkIconColor("warning_4", "Warning 4", "#FF8F1E"));
        $this->addDefaultColor(new KitchenSinkIconColor("warning_5", "Warning 5", "#FA831A"));

        $this->addDefaultColor(new KitchenSinkIconColor("dark_grey", "Dark Grey", "#505050"));
        $this->addDefaultColor(new KitchenSinkIconColor("mid_grey", "Mid Grey", "#6B6B6B"));
        $this->addDefaultColor(new KitchenSinkIconColor("light_grey", "Light Grey", "#838383"));
        $this->addDefaultColor(new KitchenSinkIconColor("lighter_grey", "Lighter Grey", "#838383"));
    }

    /**
     * @return KitchenSinkIconColor[]
     */
    static public function getDefaultColors(){
        return self::$default_colors;
    }

    static protected function addDefaultColor(KitchenSinkIconColor $color){
        self::$default_colors[$color->getId()] = $color;
    }
    /**
     * @param KitchenSinkIconColor $color
     */
    public function addColor(KitchenSinkIconColor $color){
        $this->colors[$color->getId()] = $color;
    }

    /**
     * @return KitchenSinkIconColor[]
     */
    public function getColors()
    {
        return $this->colors;
    }

    /**
     * @param KitchenSinkIconColor[] $colors
     */
    public function setColors($colors)
    {
        $this->colors = $colors;
    }

    /**
     * @param string $id
     * @return KitchenSinkIconColor
     */
    public function getColorById($id = ""){
        return $this->colors[$id];
    }

    /**
     * @return string
     */
    public static function getColorSetFileName()
    {
        return self::$color_set_file_name;
    }

    /**
     * @param string $color_set_file_name
     */
    public static function setColorSetFileName($color_set_file_name)
    {
        self::$color_set_file_name = $color_set_file_name;
    }



    /**
     * @return string
     */
    public function getSkinPath()
    {
        return $this->skin_path;
    }

    /**
     * @param string $skin_path
     */
    public function setSkinPath($skin_path)
    {
        $this->skin_path = $skin_path;
    }


    /**
     * @param string $path
     */
    public function writeColorSetToFile($path = ""){

        $color_set = array();
        foreach($this->getColors() as $color){
            $std_color = new stdClass();
            $std_color->id = $color->getId();
            $std_color->name = $color->getName();
            $std_color->description = $color->getDescription();
            $std_color->color = $color->getColor();
            $color_set[] = $std_color;
        }
        file_put_contents ($path."/".self::getColorSetFileName(),json_encode($color_set));
    }

    /**
     * @param string $path
     * @return KitchenSinkIconColorSet
     */
    static function loadColorSetFromFileIfExists($path = ""){
        $set = new self();
        if(is_file($path."/".self::getColorSetFileName())){
            $color_set = json_decode(file_get_contents ($path."/".self::getColorSetFileName()));
            foreach($color_set as $color){
                $set->addColor(new KitchenSinkIconColor($color->id,$color->name,$color->color,$color->description));
            }
        }

        $set->setDefaultColors();
        return $set;
    }
}
?>
