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

    const EMPTY_ENTRY   = 1001;
    const INVALID_MANDATORY_ENTRY_ATTRIBUTE   = 1002;
    const DUPLICATE_ENTRY  = 1003;
    const DUPLICATE_ROOT_ENTRY   = 1004;
    const INVALID_ID   = 1005;
    const INVALID_FILE_PATH = 1006;

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
            case self::EMPTY_ENTRY:
                $this->message = "Empty Entry" . " " . $this->add_info;
                break;
            case self::INVALID_MANDATORY_ENTRY_ATTRIBUTE:
                $this->message = "Invalid mandatory entry Attribute:". " " . $this->add_info;
                break;
            case self::DUPLICATE_ENTRY:
                $this->message = "There are entries with the same ID. Duplicate:". " " . $this->add_info;
                break;
            case self::DUPLICATE_ROOT_ENTRY:
                $this->message = "There are multiple root entry. Duplicate:". " " . $this->add_info;
                break;
            case self::INVALID_ID:
                $this->message = "No such ID in tree: ". " " . $this->add_info;
                break;
            case self::INVALID_FILE_PATH:
                $this->message = "Invalid file path or file not readable: ". " " . $this->add_info;
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