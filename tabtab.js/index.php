<!DOCTYPE html>
<?php
if(!isset($_COOKIE['fonts-loaded'])) {
    echo ('<html lang="en">');
}else{
    echo ('<html lang="en" class="fonts-loaded">');
}
?>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>tabtab.js - jquery animated tabs</title>
        <meta name="description" content="A simple, Accessible, 60+fps, easy-to-use animated tabs plugin for jQuery.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="canonical" href="http://www.tabtab.be" />
        <link rel="shortlink" href="http://www.tabtab.be" />
        <meta property="og:site_name" content="tabtab.js" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.tabtab.be" />
        <meta property="og:image" content="http://www.tabtab.be/tabtab-og.jpg" />

        <!-- critical css -->
        <script>
            function loadCSS(e,t,n,o){"use strict";function r(){for(var t,o=0;o<l.length;o++)l[o].href&&l[o].href.indexOf(e)>-1&&(t=!0);t?i.media=n||"all":setTimeout(r)}var i=window.document.createElement("link"),d=t||window.document.getElementsByTagName("script")[0],l=window.document.styleSheets;return i.rel="stylesheet",i.href=e,i.media="only x",i.onload=o||function(){},d.parentNode.insertBefore(i,d),r(),i}
        </script>
        <script>
            loadCSS( "css/main.css" );
        </script>

        <link href="http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300|Open+Sans:400italic,400" rel="stylesheet" type="text/css" />

        <style>
            body {
                font-family: 'Open Sans', sans-serif;
            }
            .fonts-loaded body {
                font-family: 'Open Sans', sans-serif;
            }
            .fonts-loaded .yanone {
                font-family: 'Yanone Kaffeesatz', sans-serif;
            }
        </style>

        <noscript>
            <link href="css/main.css" rel="stylesheet">
        </noscript>

        <link href="css/critical.css?__inline=true" rel="stylesheet">
        
        <!--[if lt IE 9]>
          <script src="js/libs/html5shiv.min.js"></script>
        <![endif]-->

        <!-- Google Analytics -->
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-59714212-1', 'auto');
          ga('send', 'pageview');

        </script>

    <body>
        <div style="width: 0; height: 0"><?php include_once("./images/svg-sprite.svg"); ?></div>
        <!--[if lt IE 7]> 
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <section class="landing">
            <div class="t">
                <div class="t-c">
                    <a class="top-link" href="http://julian.com/research/velocity/">powered by velocity.js</a>
                </div>
                <div class="t-c a-r">
                    <a class="top-link" href="https://github.com/gijsroge/tabtab.js">view on github</a>
                </div>
            </div>
            <header class="a-c">
                <div class="logo yanone" role="logo">TabTab.js</div>
                <div class="tagline" role="tagline">A simple, Accessible, 60+fps, easy-to-use animated tabs plugin for jQuery.</div>
                <a href="https://github.com/gijsroge/tabtab.js/releases/download/v0.1.3/tabtab.js-v0.1.3.zip" class="button button--big">download latest version</a>
                <div class="package-managers">
                    <div class="package-managers-toggle" href="#">
                        bower
                        <span class="tooltip">
                            bower install tabtab.js --save
                        </span>
                    </div> 
                    or 
                    <div class="package-managers-toggle" href="#">
                        npm
                        <span class="tooltip">
                            npm install tabtab.js --save-dev
                        </span>
                    </div>
                </div>
            </header>
            <div class="tabs" role="tabs">
                <ul class="tabs__menu">
                    <li class="tabs__menu-item yanone active"><a href="#">features</a></li>
                    <li class="tabs__menu-item"><a href="#">how to setup</a></li>
                </ul>
                <div class="tabs__content">
                    <div class="tabs__content-item tabs-features active">
                        <div class="table-grid">
                            <div class="grid-3">
                                <svg style="width:59px;height:22px;" class="icon">
                                  <use xlink:href="#shape-keyboard-icon"></use>
                                </svg>
                                <div class="feature-item">
                                    keyboard navigation
                                </div>
                            </div>
                            <div class="grid-3">
                                <svg style="width:66px;height:24px;" class="icon">
                                  <use xlink:href="#shape-60fps"></use>
                                </svg>
                                <div class="feature-item">
                                    60+ fps
                                </div>
                            </div>
                            <div class="grid-3">
                                <svg style="width:24px;height:15px;" class="icon">
                                  <use xlink:href="#shape-code"></use>
                                </svg>
                                <div class="feature-item">
                                    easy structure
                                </div>
                            </div>
                            <div class="grid-3">
                                <svg style="width:25px;height:21px;" class="icon">
                                  <use xlink:href="#shape-customize"></use>
                                </svg>
                                <div class="feature-item">
                                    customizable animations
                                </div>
                            </div>
                        </div>
                        <div class="table-grid">
                            <div class="grid-3">
                                <svg style="width:32px;height:18px;" class="icon">
                                  <use xlink:href="#shape-velocity"></use>
                                </svg>
                                <div class="feature-item">
                                    powerd by velocity.js
                                </div>
                            </div>
                            <div class="grid-3">
                                <svg style="width:46px;height:22px;" class="icon">
                                  <use xlink:href="#shape-feather"></use>
                                </svg>
                                <div class="feature-item">
                                    lightweight
                                </div>
                            </div>
                            <div class="grid-3">
                                <svg style="width:27px;height:33px;" class="icon">
                                  <use xlink:href="#shape-accessible"></use>
                                </svg>
                                <div class="feature-item">
                                    accessible
                                </div>
                            </div>
                            <div class="grid-3">
                                <svg style="width:36px;height:38px;" class="icon">
                                  <use xlink:href="#shape-borat"></use>
                                </svg>
                                <div class="feature-item">
                                    It is a very nice
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tabs__content-item tab-setup">

                    <div class="t row">
                        <div class="t-c v-a-t grid-4">
                            <h2 class="yanone">Download</h2>
                            <div class="package-link">
                                npm install tabtab.js --save-dev
                            </div>
                            <div class="package-link">
                                bower install tabtab.js --save
                            </div>
                            <div class="manual f-s">or <a href="https://github.com/gijsroge/tabtab.js/releases/download/v0.1.3/tabtab.js-v0.1.3.zip">download latest version</a> manually</div>
                            
                        </div>
                        <div class="t-c v-a-t grid-3">
                            <h2 class="yanone">Usage</h2>
                            <div class="block">
                                <pre><code class="monokai_sublime">&lt;script src="velocity.min.js"&gt;&lt;/script&gt;
&lt;script src="tabtab.min.js"&gt;&lt;/script&gt;


&lt;script&gt;
    $('.tabs').tabtab();
&lt;/script&gt;</code></pre>
                            </div>
                        </div>
                        <div class="t-c v-a-t">
                            <h2 class="yanone">Requirements</h2>
                            <p>
                                jQuery &gt;1.8 <br />
                                Velocity.js (<a href="http://julian.com/research/velocity/">download</a>)
                            </p>
                        </div>
                    </div>
                        
                        <h2 class="yanone">Options</h2>
                        <div class="block">
                            <pre><code class="monokai_sublime">$('.tabs').tabtab({
    tabMenu: '.tabs__menu',             // direct container of the tab menu items
    tabContent: '.tabs__content',       // direct container of the tab content items
    next: '.tabs-controls__next',       // next slide trigger
    prev: '.tabs-controls__prev',       // previous slide trigger

    startSlide: 1,                      // starting slide on pageload
    arrows: true,                       // keyboard arrow navigation
    dynamicHeight: true,                // if true the height will dynamic and animated.
    useAnimations: true,                // disables animations.

    easing: 'ease',                     // http://julian.com/research/velocity/#easing
    speed: 350,                         // animation speed
    slideDelay: 0,                      // delay the animation
    perspective: 1200,                  // set 3D perspective
    transformOrigin: 'center top',      // set the center point of the 3d animation
    perspectiveOrigin: '50% 50%',       // camera angle

    translateY: 0,                      // animate along the Y axis (val: px or ‘slide’)
    translateX: 0,                      // animate along the X axis (val: px or ‘slide’)
    scale: 1,                           // animate scale (val: 0-2)
    rotateX: 90,                        // animate rotation (val: 0deg-360deg)
    rotateY: 0,                         // animate Y acces rotation (val: 0deg-360deg)
    skewY: 0,                           // animate Y skew (val: 0deg-360deg)
    skewX: 0,                           // animate X skew (val: 0deg-360deg)
});</code></pre>
                        </div>

                    </div>

                </div>
            </div>
            <div class="examples-indicator a-c">
                FAQ & Examples 
                <svg style="width:19px;height:16px;" class="icon">
                  <use xlink:href="#shape-pointer-down"></use>
                </svg>
            </div>
            
        </section>
        <div class="faq wrapper">
            <div class="faq__item v-a-t">
                <h2 class="yanone">Is this plugin ready for production use?</h2>
                <p>The plugin including the velocity.js library weighs 12kb when gzipped. If you use it without velocity.js it weighs 1-2kb.</p>
            </div>
            <div class="faq__item v-a-t">
                <h2 class="yanone">What is the browser support?</h2>
                <p>It supports IE8+ and all other modern browsers.</p>
            </div>
            <div class="faq__item v-a-t">
                <h2 class="yanone">Can i create a tabtab within a tabtab</h2>
                <p>Yes, but i have no clue why you would want to do that.</p>
            </div>
            <div class="faq__item v-a-t">
                <h2 class="yanone">Do i need to include a stylesheet?</h2>
                <p>No only tabtab.js and optionally velocity.js for animations. We do recommend to take a look at the included stylesheet to prevent FOUC.</p>
            </div>
            <div class="faq__item v-a-t">
                <h2 class="yanone">When should I use this plugin?</h2>
                <p>If you care about rendering performance and beautifull animations. You should check this plugin out.</p>
            </div>
            <div class="faq__item v-a-t">
                <h2 class="yanone">Can i use this in a commercial project?</h2>
                <p>This project is registered under the MIT license. So yes you can use it in a commercial project as long as you give credit.</p>
            </div>
            <div class="faq__item v-a-t">
                <h2 class="yanone">Can i prevent possible FOUC?</h2>
                <p>Yes. you should manually add an active class to your starting slide. You should also take a look at the included stylesheet in the zip file.</p>
            </div>
        </div>

        <div class="hidden democontent">
            <h2 class="yanone">Some random examples what you can achieve with TabTab.js</h2>
            <div class="tabdemo wrapper tabdemo--one">
                <ul class="tabdemo__menu menu">
                    <li><a href="#">Tabmenu Item</a></li>
                    <li><a href="#">Tabmenu Item</a></li>
                    <li><a href="#">Tabmenu Item</a></li>
                    <li><a href="#">Tabmenu Item</a></li>
                </ul>
                <div class="tabdemo__content content">
                    <div class="tabdemo__content-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quia, voluptas adipisci impedit quaerat dolorum eaque ducimus aut, eveniet vero ipsum! Placeat consequuntur eveniet, libero non earum, sunt repellat! Quas!</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                    <div class="tabdemo__content-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quia, voluptas adipisci impedit quaerat dolorum eaque ducimus aut, eveniet vero ipsum! Placeat consequuntur eveniet, libero non earum, sunt repellat! Quas!</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                    <div class="tabdemo__content-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quia, voluptas adipisci impedit quaerat dolorum eaque ducimus aut, eveniet vero ipsum! Placeat consequuntur eveniet, libero non earum, sunt repellat! Quas!</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                    <div class="tabdemo__content-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quia, voluptas adipisci impedit quaerat dolorum eaque ducimus aut, eveniet vero ipsum! Placeat consequuntur eveniet, libero non earum, sunt repellat! Quas!</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                </div>
            </div>
            <!-- <div class="tabdemo wrapper tabdemo--two">
                <ul class="tabdemo__menu menu">
                    <li><a href="#">Tabmenu Item</a></li>
                    <li><a href="#">Tabmenu Item</a></li>
                    <li><a href="#">Tabmenu Item</a></li>
                    <li><a href="#">Tabmenu Item</a></li>
                </ul>
                <div class="tabdemo__content content">
                    <div class="tabdemo__content-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quia, voluptas adipisci impedit quaerat dolorum eaque ducimus aut, eveniet vero ipsum! Placeat consequuntur eveniet, libero non earum, sunt repellat! Quas!</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                    <div class="tabdemo__content-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quia, voluptas adipisci impedit quaerat dolorum eaque ducimus aut, eveniet vero ipsum! Placeat consequuntur eveniet, libero non earum, sunt repellat! Quas!</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                    <div class="tabdemo__content-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quia, voluptas adipisci impedit quaerat dolorum eaque ducimus aut, eveniet vero ipsum! Placeat consequuntur eveniet, libero non earum, sunt repellat! Quas!</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                    <div class="tabdemo__content-item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quia, voluptas adipisci impedit quaerat dolorum eaque ducimus aut, eveniet vero ipsum! Placeat consequuntur eveniet, libero non earum, sunt repellat! Quas!</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    </div>
                </div>
            </div> -->
        </div>

        <!--Set cookie for fonts-->
        <script>
            /*! cookie function. get, set, or forget a cookie. [c]2014 @scottjehl, Filament Group, Inc. Licensed MIT */
            function cookie(e,i,o){if(void 0===i){var t="; "+window.document.cookie,n=t.split("; "+e+"=");return 2===n.length?n.pop().split(";").shift():null}i===!1&&(o=-1);var r;if(o){var c=new Date;c.setTime(c.getTime()+24*o*60*60*1e3),r="; expires="+c.toGMTString()}else r="";window.document.cookie=e+"="+i+r+"; path=/"};
        </script>


        <!--fontfaceobserver Copyright (c) 2014 - Bram Stein https://github.com/bramstein/fontfaceobserver/-->
        <script>
            !function(){"use strict";function t(t){this.a=c,this.b=void 0,this.d=[];var e=this;try{t(function(t){n(e,t)},function(t){o(e,t)})}catch(i){o(e,i)}}function e(e){return new t(function(t,i){i(e)})}function i(e){return new t(function(t){t(e)})}function n(t,e){if(t.a===c){if(e===t)throw new TypeError("Promise resolved with itself.");var i=!1;try{var r=e&&e.then;if(null!==e&&"object"==typeof e&&"function"==typeof r)return void r.call(e,function(e){i||n(t,e),i=!0},function(e){i||o(t,e),i=!0})}catch(a){return void(i||o(t,a))}t.a=0,t.b=e,s(t)}}function o(t,e){if(t.a===c){if(e===t)throw new TypeError("Promise rejected with itself.");t.a=1,t.b=e,s(t)}}function s(t){setTimeout(function(){if(t.a!==c)for(;t.d.length;){var e=t.d.shift(),i=e[0],n=e[1],o=e[2],e=e[3];try{0===t.a?o("function"==typeof i?i.call(void 0,t.b):t.b):1===t.a&&("function"==typeof n?o(n.call(void 0,t.b)):e(t.b))}catch(s){e(s)}}},0)}function r(e){return new t(function(t,i){function n(i){return function(n){s[i]=n,o+=1,o===e.length&&t(s)}}var o=0,s=[];0===e.length&&t(s);for(var r=0;r<e.length;r+=1)e[r].c(n(r),i)})}function a(e){return new t(function(t,i){for(var n=0;n<e.length;n+=1)e[n].c(t,i)})}var c=2;t.prototype.e=function(t){return this.c(void 0,t)},t.prototype.c=function(e,i){var n=this;return new t(function(t,o){n.d.push([e,i,t,o]),s(n)})},window.Promise||(window.Promise=t,window.Promise.resolve=i,window.Promise.reject=e,window.Promise.race=a,window.Promise.all=r,window.Promise.prototype.then=t.prototype.c,window.Promise.prototype["catch"]=t.prototype.e)}(),function(){"use strict";function t(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.f=document.createElement("span"),this.e=document.createElement("span"),this.d=-1,this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.e.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.f.style.cssText="display:inline-block;width:200%;height:200%;",this.b.appendChild(this.f),this.c.appendChild(this.e),this.a.appendChild(this.b),this.a.appendChild(this.c)}function e(t,e,i){t.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;visibility:hidden;position:absolute;width:auto;margin:0;padding:0;top:0;white-space:nowrap;font-size:100px;font-family:"+e+";"+i}function i(t){var e=t.a.offsetWidth,i=e+100;return t.e.style.width=i+"px",t.c.scrollLeft=i,t.b.scrollLeft=t.b.scrollWidth+100,t.d!==e?(t.d=e,!0):!1}function n(t,e){t.b.addEventListener("scroll",function(){i(t)&&null!==t.a.parentNode&&e(t.d)},!1),t.c.addEventListener("scroll",function(){i(t)&&null!==t.a.parentNode&&e(t.d)},!1),i(t)}function o(t,e){this.family=t,this.style=e.style||"normal",this.variant=e.variant||"normal",this.weight=e.weight||"normal",this.stretch=e.stretch||"stretch",this.featureSettings=e.featureSettings||"normal"}var s=null;o.prototype.a=function(i){i=i||"BESbswy";var o="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",r=document.createElement("div"),a=new t(i),c=new t(i),l=new t(i),f=-1,h=-1,d=-1,u=-1,p=-1,w=-1,m=this;return e(a,"sans-serif",o),e(c,"serif",o),e(l,"monospace",o),r.appendChild(a.a),r.appendChild(c.a),r.appendChild(l.a),document.body.appendChild(r),u=a.a.offsetWidth,p=c.a.offsetWidth,w=l.a.offsetWidth,new Promise(function(t,i){function y(){null!==r.parentNode&&document.body.removeChild(r)}function v(){if(-1!==f&&-1!==h&&-1!==d&&f===h&&h===d){if(null===s){var e=/AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);s=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}s?f===u&&h===u&&d===u||f===p&&h===p&&d===p||f===w&&h===w&&d===w||(y(),t(m)):(y(),t(m))}}setTimeout(function(){y(),i(m)},3e3),n(a,function(t){f=t,v()}),e(a,m.family+",sans-serif",o),n(c,function(t){h=t,v()}),e(c,m.family+",serif",o),n(l,function(t){d=t,v()}),e(l,m.family+",monospace",o)})},window.FontFaceObserver=o,window.FontFaceObserver.prototype.check=o.prototype.a}();    /*
             Fonts are loaded through @font-face rules in the CSS whenever an element references them.
             FontFaceObserver creates a referencing element to trigger the font request, and lsisten for font load events.
             When all 3 fonts are loaded, we enable them by adding a class to the html element
             */
            (function( w ){
                // if the class is already set, we're good.
                if( w.document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ){
                    return;
                }
                var YanoneLight = new w.FontFaceObserver( "Yanone Kaffeesatz", {
                    weight: 300
                });
                var YanoneRegular = new w.FontFaceObserver( "Yanone Kaffeesatz", {
                    weight: 400,
                });
                var openSansRegular = new w.FontFaceObserver( "Open Sans", {
                    weight: 400
                });
                var openSansRegularItalic = new w.FontFaceObserver( "Open Sans", {
                    weight: 400,
                    style: "italic"
                });
                w.Promise
                    .all([YanoneRegular.check(), YanoneLight.check(), openSansRegular.check(), openSansRegularItalic.check()])
                    .then(function(){
                        w.document.documentElement.className += " fonts-loaded";

                        //Set font cookie so we can check if the user already loaded the font's
                        cookie( "fonts-loaded", true );
                    });
            }( this ));
        </script>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js?__inline=true"></script>
        <script>
            hljs.initHighlightingOnLoad()
        </script>

        <!-- <script async="async" defer="defer" src="//<?php echo gethostname();?>:35729/livereload.js?snipver=1"></script> -->
    
    </body>
</html>
