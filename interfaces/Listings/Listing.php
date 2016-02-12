<?php
namespace ILIAS\UI\Listings;
use ILIAS\UI\Element;

/**
 * This is how a factory for glyphs looks like.
 */
interface Listing extends Element {

    public function getElements();

    /**
     * @param $elements
     * @return Listing
     */
    public function setElements($elements);

    /**
     * @param $key
     * @param $value
     * @return Listing
     */
    public function setElementByKey($key,$value);

}