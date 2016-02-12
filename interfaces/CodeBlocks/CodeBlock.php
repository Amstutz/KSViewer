<?php
namespace ILIAS\UI\CodeBlocks;
use ILIAS\UI\Element;

interface CodeBlock extends Element {

    /**
     * @param string $type
     * @return CodeBlock
     */
    public function setType($type = "");

    /**
     * @param string $code
     * @return CodeBlock
     */
    public function setCode($code = "");
}