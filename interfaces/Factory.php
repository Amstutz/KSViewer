<?php
namespace ILIAS\UI;
use ILIAS\UI\Listings\Factory as ListingFactory;
use ILIAS\UI\CodeBlocks\CodeBlock as CodeBlock;
use ILIAS\UI\GridRows\GridRow as GridRow;
use ILIAS\UI\Links\Link as Link;
use ILIAS\UI\Thumbnails\Thumbnail as Thumbnail;

/**
 * This is how the factory for UI elements looks. This should provide access
 * to all UI elements at some point.
 *
 * Consumers of the UI-Service must program against this interface and not
 * use any concrete implementations.
 */
interface Factory {
    /**
     * @return ListingFactory
     */
    public function listing();

    /**
     * @return CodeBlock
     */
    public function codeBlock();

    /**
     * @return GridRow
     */
    public function GridRow();

    /**
     * @return Link
     */
    public function Link();

    /**
     * @return Thumbnail
     */
    public function Thumbnail();
}