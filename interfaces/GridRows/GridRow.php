<?php
namespace ILIAS\UI\GridRows;
use ILIAS\UI\Element;

interface GridRow extends Element {

    public function getColumns();

    /**
     * @param $columns
     * @return GridRow
     */
    public function setColumns($columns);

    /**
     * @param $column_content
     * @param $width
     * @return mixed
     */
    public function addColumn($column_content, $width);
}