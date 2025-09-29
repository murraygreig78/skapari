<!DOCTYPE html>
<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body, html {
            height: 100%;
            margin: 0;
            font: 400 15px/1.8 'Montserrat', sans-serif;
            color: #777;
        }



        .bgimg-1, .bgimg-2, .bgimg-3 {
            position: relative;
            /*opacity: 0.65;*/
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

        }

        .logo-holder{
            background-color: #0F062F;
            min-height: 100%;
            position: relative;
        }

        .bgimg-1 {
            background-image: url("TableBay.jpg");
            min-height: 100%;
        }

        .bgimg-2 {
            background-image: url("qourvus.jpg");
            min-height: 100%;
        }

        .bgimg-3 {
            background-image: url("rhodes.jpg");
            min-height: 100%;
        }



        .caption, .logo {
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            text-align: center;
            color: #000;
        }
        .logo {

            top: 40%;

        }

        .caption span.border {
            background-color: #111;
            color: #fff;
            padding: 18px;
            font-size: 25px;
            letter-spacing: 10px;
        }

        h3 {
            letter-spacing: 5px;
            text-transform: uppercase;
            font: 20px "Montserrat", sans-serif;
            font-weight: 600;
            color: #111;
        }

        .footer-contact{
            float: left; width: 50%;
        }

        /* Turn off parallax scrolling for tablets and phones */
        @media only screen and (max-device-width: 1024px) {
            .bgimg-1, .bgimg-2, .bgimg-3 {
                background-attachment: scroll;
            }
        }
    </style>
</head>
<body>
<div class="logo-holder">
    <div class="logo">
        <img src="skapari.svg" width="50%">
    </div>
</div>
<div class="bgimg-1">

</div>

<div style="color: #777;background-color:white;text-align:center;padding:50px 80px;text-align: justify;">
    <h3 style="text-align:center;">Parallax Demo</h3>
    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
</div>

<div class="bgimg-2">

</div>

<div style="position:relative;">
    <div style="color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;">
        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
    </div>
</div>

<div class="bgimg-3">
    <!--    <div class="caption">-->
    <!--        <span class="border" style="background-color:transparent;font-size:25px;color: #f7f7f7;">SCROLL UP</span>-->
    <!--    </div>-->
</div>

<div style="position:relative;">
    <div style="color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;">
        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
    </div>
</div>

<div class="bgimg-1">
    <div class="caption">
        <span class="border"> CONTACT FORM IN HERE !</span>
    </div>
</div>
<footer style="text-align: center;">
    <div style="margin: 30px;"><img src="skapari-rune.svg" height="150px"></div>
    <div  class="footer-contact">
        <h4>Jacqualin	Greig </h4>
        <p>jacky@skapari.co.za </p>
        <p>083 326 6078  </p>
    </div>
    <div class="footer-contact">
        <h4>Riejean	Joubert </h4>
        <p>riejean@skapari.co.za </p>
        <p>071 917 6511   </p>
    </div>
</footer>
</body>
</html>