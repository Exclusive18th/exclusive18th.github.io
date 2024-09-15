<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        background-image: url("bg.png");
        margin: 0;
        position: fixed;
        background-color: #1a080b;
        
      }

      @font-face {
      font-family: theseasons;
      src: url(Demo-The-Seasons/Demo_Fonts/Fontspring-DEMO-theseasons-bd.otf);
    }

    @font-face {
      font-family: lejour;
      src: url(Slight-Font/Slight/Slight/Slight-Regular.ttf);
    }

    .body_div{
        top: -70vh;
        height: 100vh;
        width: 100%;
        position: absolute;
        background-image: linear-gradient(rgb(0, 0, 0, .6), rgba(0,0,0,.2), rgb(0, 0, 0, .7));
        z-index: 0;
    }
      html,
      body {
        height: 100%;
        width: 100%;
      }

      .div {
        position: relative;
        margin-top: 70vh;
      }

      .f1 {
        position: relative;
        animation-name: f1-animation;
        animation-duration: 2s;
        margin-top: -10vh;
        margin-left: 60vw;
        opacity: 24%;
      }

      .f2 {
        position: relative;
        animation-name: f2-animation;
        animation-duration: 2s;
        margin-top: -25vh;
        margin-left: 30vw;
        opacity: 20%;
      } 
 
      .f3 {
        position: relative;
        animation-name: f3-animation;
        animation-duration: 2.3s;
        margin-top: -40vh;
        margin-left: vw;
        opacity: 30%;
      }

      .f4 {
        position: relative;
        animation-name: f4-animation;
        animation-duration: 2s;
        margin-top: -100vh;
        margin-left: -30vw;
        opacity: 30%;
      }

      @keyframes f1-animation {
        0% {
          background-color: none;
          left: 30vw;
          top: 30vh;
        }
        100% {
          background-color: none;
          left: 0px;
          top: 0px;
        }
      }

      @keyframes f2-animation {
        0% {
          background-color: none;
          left: 15vw;
          top: 50vh;
        }
        100% {
          background-color: none;
          left: 0px;
          top: 0px;
        }
      }

      @keyframes f3-animation {
        0% {
          background-color: none;
          left: -20vw;
          top: 30vh;
        }
        100% {
          background-color: none;
          left: 0px;
          top: 0px;
        }
      }

      @keyframes f4-animation {
        0% {
          background-color: none;
          left: -30vw;
          top: 30vh;
        }
        100% {
          background-color: none;
          left: 0px;
          top: 0px;
        }
      }

      .border{
        position: absolute;
        z-index: 1;
        -webkit-animation: 3s ease 0s normal forwards 1 fadein;
        animation: 3s ease 0s normal forwards 1 fadein;
        height: 250px;
      }

      @keyframes fadein{
        0% { opacity:0; }
        50% { opacity:0; }
        100% { opacity:1; }
    }

    @-webkit-keyframes fadein{
        0% { opacity:0; }
        50% { opacity:0; }
        100% { opacity:1; }
    }

    .border_div{
        width: fit-content;
        margin: auto;
        width: 50%;
        margin-top: 40px;
        
    }

    .j {
      position: absolute;
      font-family: theseasons;
      font-size: 110px;
      color: #e6d5b3;
      z-index: 2;
      margin-left: 80px;
      margin-top: 43px;
      -webkit-animation: 4s ease 0s normal forwards 1 fadein;
        animation: 4s ease 0s normal forwards 1 fadein;
    }

    .exclusive_div{
      position: absolute;
      z-index: 3;
      font-family: lejour;
      letter-spacing: 2px;
      font-weight: 500;
      height: 200px;
      padding-top:40vh;
      height:100vh;
      overflow:hidden;
      -webkit-backface-visibility: hidden;
      -webkit-perspective: 1000;
      -webkit-transform: translate3d(0,0,0);
    }

    .div1 {
      font-size: 30px;
      display:inline-block;
      overflow:hidden;
      white-space:nowrap;
      opacity: 0;
      height: 200px;
      padding-top: 10px;
      padding-right: 25px;
      margin: 0;
      
    }

    .div1:first-of-type {    /* For increasing performance 
                          ID/Class should've been used. 
                          For a small demo 
                          it's okaish for now */
      animation: showup 5s ;
      animation-fill-mode: forwards;
      animation-delay: 2.5s;
    }

    .div1:last-of-type {
      width:0px;
      animation: reveal 7s ;
      animation-fill-mode: forwards;
      animation-delay: 1.5s;

    }

    .div1:last-of-type span {
      padding-right: 20px;
      margin-left:-75px;
      animation: slidein 7s ;
      animation-fill-mode: forwards;
      animation-delay: 1.5s;

    }

    @keyframes showup {
        0% {opacity:0;}
        15% {opacity:1;}
        100% {opacity:1;}
    }

    @keyframes slidein {
        0% { margin-left:-700px; }
        20% { margin-left:-700px; }
        35% { margin-left:0px; }
        100% { margin-left:0px; }
    }

    @keyframes reveal {
        0% {opacity:0;width:0px;}
        20% {opacity:1;width:0px;}
        30% {width:75px;}
        80% {opacity:1;}
        100% {opacity:1;width:75px;}
    }
    .exclusive_div{
      width: 100%;
      position: absolute;
      text-align: center;
      color: #e6d5b3;
    }

    .p1{
      text-align: center;
      margin-top: 48vh;
      -webkit-animation: 6.5s ease 0s normal forwards 1 fadein;
        animation: 6.5s ease 0s normal forwards 1 fadein;
        font-weight: 600;
    }

    .p_div {
      font-size: 12px;
      position: absolute;
      width: 80%;
      padding: 40px;
      margin: auto;
      color: #f1ebdf;
      z-index: 4;
      font-family: "Cinzel";
    }

    .p2{
      margin-top: 6vh;
      font-family: 'Times New Roman', Times, serif;
      font-size: 8px;
      letter-spacing: 1px;
      text-align: center;
      -webkit-animation: 7.5s ease 0s normal forwards 1 fadein;
        animation: 7.5s ease 0s normal forwards 1 fadein;
    }

    .button_open{
      position: absolute;
      margin-top: 75vh;
      z-index: 10;
      border: 2px solid #e6d5b3;
      border-radius: 10px;
      color: #f1ebdf;
      font-family: "Cinzel";
      font-weight: 700;
      padding: 7px 13px;
      font-size: 13px;
      margin-left: 32vw;
      -webkit-animation: 9s ease 0s normal forwards 1 fadein;
        animation: 9s ease 0s normal forwards 1 fadein;
    }



    </style>
    <title>Document</title>
  </head>
  <body>
  </body>
        <div class="border_div">
            <h1 class="j">J</h1>
            <img src="b2.png" class="border">
        </div>

        <div class="exclusive_div">
          <div class="div1">Exclusive</div> 
            <div class="div1"> 
              <span>18th</span>
            </div>
        </div>

        <div class="p_div">
          <p class="p1">
            it would be an immense privilege to have you engage in my significant day
          </p>
          <p class="p2">
            SUNDAY, OCTOBER 13, 2024 AT FIVE PM<br>
            VILLA TERESITA, CUT CUT, GUIGUINTO, BULACAN
          </p>
        </div>

        <div class="button_open">Open Invitation</div>
        
    
        <div class="div">
        <img src="f1.png" class="f1" />
        <img src="f4.png" class="f4" />
        <img src="f2.png" class="f2" />
        <img src="f3.png" class="f3" />
        <div class="body_div"></div>
        </div>   
    </div>
    
  </body>
</html>
