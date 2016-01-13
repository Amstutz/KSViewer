<?php
/* Copyright (c) 1998-2011 ILIAS open source, Extended GPL, see docs/LICENSE */

require_once 'Services/Exceptions/classes/class.ilException.php';

/**
 * Class for advanced editing exception handling in ILIAS.
 *
 * @author Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version $Id$
 *
 */
class ilKitchenSinkException extends ilException
{
    const UNKNONW_EXCEPTION = -1;

    const INVALID_NODE_ID   = 1001;


    /**
     * @var string
     */
    protected $message = "";

    /**
     * @var int
     */
    protected $code = -1;

    /**
     * @var string
     */
    protected $add_info = "";

    /**
     * ilKitchenSinkException constructor.
     * @param int $exception_code
     * @param string $exception_info
     */
    public function __construct($exception_code = -1, $exception_info = "")
    {


        $this->code = $exception_code;
        $this->add_info = $exception_info;
        $this->assignMessageToCode();
        parent::__construct($this->message, $this->code);

    }

    protected function assignMessageToCode()
    {
        global $lng;
        switch ($this->code)
        {
            case self::INVALID_NODE_ID:
                $this->message = "Invalid Node ID" . " " . $this->add_info;
                break;
            default:
                $this->message = "Unknonw Exception". " " . $this->add_info;
                break;
        }
    }

    public function __toString()
    {
        return get_class($this) . " '{$this->message}' in {$this->file}({$this->line})\n"
        . "{$this->getTraceAsString()}";
    }
}
?>