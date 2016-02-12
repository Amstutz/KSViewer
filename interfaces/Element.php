<?php
namespace ILIAS\UI;
/**
 * Interface to a general element in the UI.
 */
interface Element {
    /**
     * Render element to an HTML string.
     *
     * @return  string
     */
    public function to_html_string();
}