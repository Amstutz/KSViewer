<?php
require_once "Services/UIComponent/Button/classes/class.ilSubmitButton.php";
class KitchenSinkExampleRoot{
    public function render(){
        $primary_button = ilSubmitButton::getInstance();
        $primary_button->setCaption("Basic Example",false);
        $primary_button->setPrimary(true);
        $primary_button->setCommand("someComand");
        return $primary_button->render();
    }
}
?>