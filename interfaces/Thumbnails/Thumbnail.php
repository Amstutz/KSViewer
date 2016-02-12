<?php
namespace ILIAS\UI\Thumbnails;
use ILIAS\UI\Element;

interface Thumbnail extends Element {

    /**
     * @param $title
     * @return Thumbnail
     */
    public function setTitle($title);

    /**
     * @param $content
     * @return Thumbnail
     */
    public function setContent($content);

    /**
     * @param $type
     * @return Thumbnail
     */
    public function setType($type);

    /**
     * @param $image_path
     * @return Thumbnail
     */
    public function setImagePath($image_path);

    /**
     * @param $image_alt
     * @return Thumbnail
     */
    public function setImageAlt($image_alt);

}