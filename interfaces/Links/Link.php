<?php
namespace ILIAS\UI\Links;
use ILIAS\UI\Element;

interface Link extends Element {

    /**
     * @param string $caption
     * @return Link
     */
    public function setCaption($caption);

    /**
     * @param string $href
     * @return Link
     */
    public function setHref($href);
}