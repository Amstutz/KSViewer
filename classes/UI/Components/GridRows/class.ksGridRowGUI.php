<?php
/*
 * @author  Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 */

class ksGridRowGUI implements ILIAS\UI\GridRows\GridRow {


    /**
     * @var array
     */
    protected $columns = array();

    /**
     * @return array
     */
    public function getColumns(){
        return $this->columns;
    }

    /**
     * @param $columns
     * @return GridRow
     */
    public function setColumns($columns){
        $this->columns = $columns;
        return $this;
    }

    /**
     * @param $column_content
     * @param $width
     * @return $this
     */
    public function addColumn($column_content, $width){
        $column = new stdClass();
        $column->content = $column_content;
        $column->width = $width;
        $this->columns[] = $column;

        return $this;
    }

    public function to_html_string(){
        $template = new ilTemplate("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/templates/uiComponent/GridRow/tpl.grid_row.html", true, true);
        $template->setCurrentBlock("column");

        foreach($this->getColumns() as $column){
            $template->setVariable("CONTENT",$column->content);
            $template->setVariable("WIDTH",$column->width);
            $template->parseCurrentBlock();
        }

        return $template->get();
    }




}
?>
