<?php 
class Cms6321ae72c59e7002095426_9d0918cc55c99f7136e0c6c50ea0ecb1Class extends Cms\Classes\LayoutCode
{
public function onInfoRequest() {

    $data = Input::all();
    $rules = [
        'firstname' => 'required',
        'surname' => 'required',
        'email' => 'required|email',
        'phone' => 'required'
    ];
    $msgs = ['required' => 'This is required','email' => 'It must be a valid email'];
    $v = Validator::make($data, $rules);
    if ($v->fails()) {
        $this['message'] = 'Error submitting form: '.$v->messages()->first().' Please contact us at info@integen.co.za if you have any queries.';
        $this['alertclass'] = 'warning';
    } else {
        Mail::send('contact::form', $data, function ($message) {
            $message->from(post('email'), post('firstname').' '.post('surname'));
            $message->to('info@integen.co.za');
        });
        $this['message'] = 'Email sent - thank you for getting in contact with us!';
        $this['alertclass'] = 'success';
    }
    $this['display'] = 'block';
}
}
