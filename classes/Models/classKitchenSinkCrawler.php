<?php
/***
 * @author            Timon Amstutz <timon.amstutz@ilub.unibe.ch>
 * @version           $Id$
 *
 */
class KitchenSinkCrawler
{
    protected $items = array();
    /**
     * @throws ilKitchenSinkException
     */
    public function crawl(){
        $last_variable_comment = null;
        $last_category_id = null;
        $last_category_name = null;

        try{
            $handle = fopen("./src/UI/Interfaces/Factory.php", "r");
        }catch(Exception $e){
            throw new ilKitchenSinkException(ilKitchenSinkException::FILE_OPENING_FAILED, "./src/UI/Interfaces/Factory.php");
        }


        if ($handle) {
            $line_number = 1;
            while (($line = fgets($handle)) !== false) {
                if(preg_match('/\*(\s)description:/', $line, $out)) {
                    $items[] = $this->handleEntry($handle);
                }

                $line_number++;
            }
            fclose($handle);
        } else {
            throw new ilKitchenSinkException(ilKitchenSinkException::FILE_OPENING_FAILED);
        }

        var_dump($items);
    }

    protected function handleEntry($handle){
        $item = new stdClass();
        $item->description = array();
        $sections = [
            "purpose",
            "composition",
            "effect",
            "rival",
            "featurewiki",
            "rules",
            "purpose",
            "purpose",
            "purpose",
            "purpose"
        ];

        while (($line = fgets($handle)) !== false) {
            foreach($sections as $section){
                if(preg_match('/\*(\s)*'.$section.':/', $line, $out)) {
                    $pointer = $section;
                }
            }

            if(preg_match('/[[:graph:]]+/', $line, $out) && $pointer) {
                if (!$item->description[$pointer]) {
                    $item->description[$pointer] = "";
                }
                $item->description[$pointer] .= trim(str_replace($pointer.":","",str_replace("*", "", $line)));
            }


            if(preg_match('/\*(\s)\@return/', $line, $out)) {
                $item->name = $line;
                return $item;

            }

        }
        throw new ilKitchenSinkException("","Unexpected end of file in Factory.php");

    }


}
?>
