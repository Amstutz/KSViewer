<?php
require_once("./Customizing/global/plugins/Services/UIComponent/UserInterfaceHook/KitchenSink/classes/Models/class.KitchenSinkLessItem.php");

/***
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$
 *
 */
class KitchenSinkLessVariables extends KitchenSinkLessItem
{
    const TYPE_STRING = 1;
    const TYPE_NUMERIC = 2;
    const TYPE_COLOR = 3;

    /**
     * @var string
     */
    protected $name = "";

    /**
     * @var string
     */
    protected $value = "";

    /**
     * @var int
     */
    protected $type = self::TYPE_STRING;

    /**
     * @var string
     */
    protected $comment = "";

    /**
     * @var string
     */
    protected $category_name = "";

    /**
     * KitchenSinkLessVariables constructor.
     * @param string $name
     * @param string $value
     * @param int $type
     * @param string $comment
     */
    public function __construct($name, $value, $comment,$category_name)
    {
        $this->name = $name;
        $this->value = $value;
        $this->category_name = $category_name;
        $this->comment = $comment;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @param string $value
     */
    public function setValue($value)
    {
        $this->value = $value;
    }

    /**
     * @return int
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param int $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * @return string
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * @param string $comment
     */
    public function setComment($comment)
    {
        $this->comment = $comment;
    }

    public function __toString()
    {
       return $this->getName()." ". $this->getValue();// TODO: Implement __toString() method.
    }

    /**
     * @return string
     */
    public function getCategoryName()
    {
        return $this->category_name;
    }

    /**
     * @param string $category_name
     */
    public function setCategoryName($category_name)
    {
        $this->category_name = $category_name;
    }

}
?>
