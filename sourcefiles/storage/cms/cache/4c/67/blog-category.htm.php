<?php 
class Cms64d22fa4dd1ea301552490_1b70eeadc63653828ff995918936ecfaClass extends Cms\Classes\PageCode
{
public function onEnd()
{
    // Optional - set the page title to the category name
    if ($this->category)
$this->page->title = $this->category->name;
}
}
