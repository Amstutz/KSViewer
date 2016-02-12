<?php
/*
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 */

class ksThumbnailGUI implements ILIAS\UI\Thumbnails\Thumbnail {

    /**
     * @var
     */
    protected $title;

    /**
     * @var
     */
    protected $content;

    /**
     * @var
     */
    protected $type;

    /**
     * @var
     */
    protected $image_path;

    /**
     * @var
     */
    protected $image_alt;

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param $title
     * @return $this
     */
    public function setTitle($title)
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param $content
     * @return $this
     */
    public function setContent($content)
    {
        $this->content = $content;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param $type
     * @return $this
     */
    public function setType($type)
    {
        $this->type = $type;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getImagePath()
    {
        return $this->image_path;
    }

    /**
     * @param $image_path
     * @return $this
     */
    public function setImagePath($image_path)
    {
        $this->image_path = $image_path;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getImageAlt()
    {
        return $this->image_alt;
    }

    /**
     * @param $image_alt
     * @return $this
     */
    public function setImageAlt($image_alt)
    {
        $this->image_alt = $image_alt;
        return $this;
    }


    public function to_html_string(){
        $template = new ilTemplate("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/uiComponent/Thumbnail/tpl.thumbnail.html", true, true);
        $template->setVariable("TYPE",$this->getType());
        $template->setVariable("TITLE",$this->getTitle());
        $template->setVariable("CONTENT",$this->getContent());
        if($this->getImagePath()){
            $template->setCurrentBlock("image");
            $template->setVariable("IMAGE_PATH", $this->getImagePath());
            $template->setVariable("IMAGE_ALT", $this->getImageAlt());
            $template->parseCurrentBlock();
        }
        return $template->get();
    }
}
?>
