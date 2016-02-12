<?php
namespace ILIAS\UI\Listings;

/**
 * This is how a factory for glyphs looks like.
 */
interface Factory {

    /**
     * @return Listing
     */
    public function unordered();

    /**
     * @return Listing
     */
    public function ordered();

    /**
     * @return Listing
     */
    public function description();

}