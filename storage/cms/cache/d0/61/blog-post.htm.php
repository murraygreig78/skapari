<?php 
class Cms64d22fc8ea369946083717_90fd4c1670c469b3db669adacf8ca394Class extends Cms\Classes\PageCode
{
public function onEnd()
{
    if (isset($this->post->title)){
        $this->page->title = $this->post->title;
    }

    if(isset($this->components['blogPost'])){
        $blogPost = $this->components['blogPost'];
        if(isset($blogPost->post)){
            $post = $blogPost->post;
            if( isset($post->title) ) {
                $this->page->title = $post->title;
            }
        }
    }

}
}
