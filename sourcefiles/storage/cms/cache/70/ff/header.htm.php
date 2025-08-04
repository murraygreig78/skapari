<?php 
class Cms19e8a8620c94b2a7d0b0c70cb4ee21de67186012b73ad62719cd559862643ef5Class extends Cms\Classes\PartialCode
{
public function onStart()
{
    $this['backendUrl'] = System::checkDebugMode() ? Backend::url('/') : null;
}
}
