
// run preloader code here
$(document).ready(function() {
    $('body').kycoPreload({
        loaderText: '',
    }); // This will preload all images on the page.
});

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

       // wait until window is loaded - meaning all images, stylesheets, js, fonts, media assets, and links
       window.addEventListener("load", function(e) {



/* Preloader Video DeSpace */
// var introPreviewVideo = document.getElementById("intro-preview-video");
var introPageContent = $('.intro-page'),
    introPageMenu = $('.intro-page .menu'),
    introPageCopyright = $('.intro-page .copyright');

// if(introPreviewVideo != null) {
//     introPreviewVideo.pause();
// }
// function playVideo() {
//     introPreviewVideo.play();
    //introPageContent.addClass('background-intro');
    // introPageMenu.css('opacity','1');
    // introPageCopyright.css('opacity','1');
    // rl.from(introPageContent, 1, {opacity:"0"});
// }
// function pauseVideo() {
//     introPreviewVideo.pause();
// }
function removePreloaderVideo(element) {
    if (typeof(element) === "string") {
        element = document.querySelector(element);
    }
    return function() {
       // setTimeout(function(){
            element.parentNode.removeChild(element);
            introPageMenu.css('opacity','1');
            introPageCopyright.css('opacity','1');
            rl.from(introPageContent, 1, {opacity:"0"});
        // }, 17000);
    };
}

var rl = new TimelineMax();

rl.from(introPageContent, 1, {opacity:"0"})
.to(introPageMenu, 1, {opacity:"1"})
.to(introPageCopyright, 1, {opacity:"1"});
// .call(removePreloaderVideo('#des-preview-video'));
    
/* Intro Page menu, hyperlapse */
var camera, scene, renderer;
    var cylinder;
    var texture;
    var normal_speed = 0.0008;
    var hyperspeed = 53;
    var hyperspeed_mode = false;
    var hyperspeed_upratio = 1.03;
    var hyperspeed_downratio = 1.3;
    var current_speed = normal_speed;

    var hyperspeed_upscale = 1.03;
    var hyperspeed_downscale = 1.3;
    var current_scale = 1;

    init();
    animate();

    function init() {

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );


        // Our Javascript will go here.
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 10000 );
        camera.position.set(0,0,7);
        camera.lookAt(scene.position);
        scene.add(camera);

        var light	= new THREE.DirectionalLight( 0x2528C9, 0.5 );
        light.position.set( 1, 1, 0 ).normalize();
        scene.add( light );
        
        var light	= new THREE.DirectionalLight( 0x2528C9, 0.5 );
        light.position.set( -1, 1, 0 ).normalize();
        scene.add( light );
        
        var light	= new THREE.PointLight( 0x6E1CB4, 10, 25 );
        light.position.set( 0, -3, 0 );
        scene.add( light );
        
        var light	= new THREE.PointLight( 0x2669D5, 15, 30 );
        light.position.set( 3, 3, 0 );
        scene.add( light );
        
        scene.fog	= new THREE.FogExp2( 0x000000, 0.15 );
        THREE.TextureLoader.prototype.crossOrigin = '';
'';
        texture = new THREE.TextureLoader().load( "https://threejs.org/examples/textures/water.jpg" );
        texture.wrapT = THREE.RepeatWrapping;
        texture.wrapS = THREE.RepeatWrapping;
        
        var material = new THREE.MeshLambertMaterial( {color: 0xffffff, opacity: 1, map: texture } );
        var cylinder_geometry = new THREE.CylinderGeometry( 1, 1, 30, 32, 1, true );

        cylinder = new THREE.Mesh( cylinder_geometry, material );
        material.side = THREE.BackSide;
        cylinder.rotation.x = Math.PI/2;
        scene.add( cylinder );

//				document.addEventListener( 'keydown', onKeyDown, false );

        
        // document.addEventListener( 'mousedown', onClick, false );
        // document.addEventListener( 'touchstart', onClick, false );
        // document.addEventListener( 'mouseup', onRelease, false );
        // document.addEventListener( 'touchend', onRelease, false );
        window.addEventListener( 'resize', onWindowResize, false );
    }

    function onKeyDown ( event ) {
        //console.log("keydown");
    }
    
    function onClickIntroPage ( event ) {
        setTimeout(function(){
            rl.to($('canvas.hyperlapse'), 1, {opacity:"1"}); 
        }, 500);
        setTimeout(function(){
            hyperspeed_mode = false;
            scene.fog= new THREE.FogExp2( 0x000000, 0.40 );
            setTimeout(function(){
                $('canvas.hyperlapse').remove();
                window.location.href = "https://despace.io/intro/";
            }, 1000);
        }, 3000);
    }
    
    function onClickAboutUs ( event ) {
        setTimeout(function(){
            rl.to($('canvas.hyperlapse'), 1, {opacity:"1"}); 
        }, 500);
        setTimeout(function(){
            hyperspeed_mode = false;
            scene.fog= new THREE.FogExp2( 0x000000, 0.40 );
            setTimeout(function(){
                $('canvas.hyperlapse').remove();
                window.location.href = "https://despace.io/about/";
            }, 1000);
        }, 3000);
    }
function onClickOnePager ( event ) {
        setTimeout(function(){
            rl.to($('canvas.hyperlapse'), 1, {opacity:"1"}); 
        }, 500);
        setTimeout(function(){
            hyperspeed_mode = false;
            scene.fog= new THREE.FogExp2( 0x000000, 0.40 );
            setTimeout(function(){
                $('canvas.hyperlapse').remove();
                window.location.href = "https://despace.io/space-paper/";
            }, 1000);
        }, 3000);
    }
/*
function onClickGitBook ( event ) {
        setTimeout(function(){
            rl.to($('canvas.hyperlapse'), 1, {opacity:"1"});
        }, 500);
        setTimeout(function(){
            hyperspeed_mode = false;
            scene.fog= new THREE.FogExp2( 0x000000, 0.40 );
            setTimeout(function(){
                $('canvas.hyperlapse').remove();
                window.location.href = "https://despace.gitbook.io/despace/";
            }, 1000);
        }, 3000);
    }
*/
    
function onClickOurBlog ( event ) {
        setTimeout(function(){
            rl.to($('canvas.hyperlapse'), 1, {opacity:"1"}); 
        }, 500);
        setTimeout(function(){
            hyperspeed_mode = false;
            scene.fog= new THREE.FogExp2( 0x000000, 0.40 );
            setTimeout(function(){
                $('canvas.hyperlapse').remove();
                window.location.href = "https://despaceprotocol.medium.com/";
            }, 1000);
        }, 3000);
    }

    function onClickDashboard ( event ) {
            setTimeout(function(){
                rl.to($('canvas.hyperlapse'), 1, {opacity:"1"});
            }, 500);
            setTimeout(function(){
                hyperspeed_mode = false;
                scene.fog= new THREE.FogExp2( 0x000000, 0.40 );
                setTimeout(function(){
                    $('canvas.hyperlapse').remove();
                    window.location.href = "https://despace.app/";
                }, 1000);
            }, 3000);
    }
    
    
    // function onRelease ( event ) {
    //     hyperspeed_mode = false;
    //     scene.fog= new THREE.FogExp2( 0x000000, 0.75 );
    //     setTimeout(function(){
    //         //$('canvas.hyperlapse').remove();
    //     }, 3000);

    // }

    function onWindowResize(){
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function animate() {
        requestAnimationFrame( animate );
        render();

    }
    
    function render () {
        if (hyperspeed_mode) {
            current_speed = current_speed >= hyperspeed ? hyperspeed : current_speed * hyperspeed_upratio;
            current_scale = current_scale <= 0.2 ? 0.2 : current_scale / hyperspeed_upscale;
        } else {
            current_speed = current_speed <= 1 ? 1 : current_speed / hyperspeed_downratio;
            current_scale = current_scale >= 1 ? 1 : current_scale * hyperspeed_downscale;
        }
        cylinder.scale.set(current_scale,1,current_scale);
        texture.offset.y	-= normal_speed * current_speed;
        texture.offset.y	%= 1;
        texture.needsUpdate	= true;

        // move the camera back and forth
        var seconds		= Date.now() / 1000;
        var radius		= 0.70;
        var angle			= 0.2 * seconds;
        //angle	= (seconds*Math.PI)/4;
//				camera.position.x	= Math.cos(angle - Math.PI/2) * radius;
//				camera.position.y	= Math.sin(angle - Math.PI/2) * radius;
        camera.rotation.z	= angle;

        renderer.render( scene, camera );

    }
$('#menu-intro-page').click(function(){
    rl.to(introPageContent, 0.3, {opacity:"0"});
    document.body.appendChild( renderer.domElement );
    renderer.domElement.setAttribute("class", "hyperlapse");
    hyperspeed_mode = true;
    onClickIntroPage('click');
});
$('#menu-about-us').click(function(){
        rl.to(introPageContent, 0.3, {opacity:"0"});
        document.body.appendChild( renderer.domElement );
        renderer.domElement.setAttribute("class", "hyperlapse");
        hyperspeed_mode = true;
        onClickAboutUs('click');
});
$('#menu-one-pager').click(function(){
    rl.to(introPageContent, 0.3, {opacity:"0"});
    document.body.appendChild( renderer.domElement );
    renderer.domElement.setAttribute("class", "hyperlapse");
    hyperspeed_mode = true;
    onClickOnePager('click');
});
// $('#menu-git-book').click(function(){
//     rl.to(introPageContent, 0.3, {opacity:"0"});
//     document.body.appendChild( renderer.domElement );
//     renderer.domElement.setAttribute("class", "hyperlapse");
//     hyperspeed_mode = true;
//     onClickGitBook('click');
// });
$('#menu-our-blog').click(function(){
    rl.to(introPageContent, 0.3, {opacity:"0"});
    document.body.appendChild( renderer.domElement );
    renderer.domElement.setAttribute("class", "hyperlapse");
    hyperspeed_mode = true;
    onClickOurBlog('click');
});

$('#menu-app-beta').click(function(){
        rl.to(introPageContent, 0.3, {opacity:"0"});
        document.body.appendChild( renderer.domElement );
        renderer.domElement.setAttribute("class", "hyperlapse");
        hyperspeed_mode = true;
        onClickDashboard('click');
});


/* Dashboard Top Menu Lang Menu */
const langButton = $('.dashboard-page .top-bar .socials .lang button'),
      langPanel = $('.dashboard-page .top-bar .socials .lang .choice');
      langButton.click(function(){
        langPanel.toggleClass('show');
        });
$(document).click(function (e) {
    if ( !langButton.is(e.target) && !langPanel.is(e.target) && langPanel.has(e.target).length === 0) {
        if(langPanel.hasClass('show')) {    
            langPanel.removeClass('show');
        }
    }
});

/* Dashboard */
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
    slidesPerView: 2,
    slidesPerGroup: 2,
    observer: true, 
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* Dashboard Click bottom navigation */
var tl= new TimelineMax();
$('.dashboard-page .bottom ul li a:not(".disable")').click(function(){
    var iconApp = $(this);
    $('.dashboard-page .bottom ul li a span').css('display','');
    $(iconApp).find('span').css('display','none');
    $('.dashboard-page .bottom ul li a').removeClass('active');
    iconApp.addClass('active');
        tl.to(iconApp, 0.3,
            { y: -40 });
        tl.to(iconApp,0.3, 
                { y: 0 });
        tl.to(iconApp, 0.3,
            { y: -40 });
        tl.to(iconApp,0.3, 
                { y: 0 });
    
});

/* Dashboard Tools Mining Panel Window Nav */
$('.tools-mining .mining-toolbar ul li a').click(function(){
    var goTo = $(this).attr('data-menu');
    $('.tools-mining .mining-toolbar ul li a').removeClass('active');
    $(this).addClass('active');
    $('.tools-mining .cards-tools').removeClass('show');
    $('.tools-mining').find('.' + goTo).addClass('show');
    
});

$('.window-app .top .controls ul li a.close').click(function(){
    $(this).closest('.window-app').addClass('d-none');
    $('.dashboard-page .bottom ul li a').removeClass('active');
    $('.dashboard-page .bottom ul li a span').css('display','');
});

$('.dashboard-page .bottom ul li a').click(function(){
    var toGo = $(this).attr('data-menu');
    setTimeout(function() {
        $('.window-app').addClass('d-none');
        $('.window-app.'+toGo).removeClass('d-none');
    }, 1500);
});
$('#de-globe-1, #de-globe-2, #de-globe-3').click(function(){
    var toGo = $(this).attr('data-menu');
    $('.dashboard-page .bottom ul li a').removeClass('active');
    $('.dashboard-page .bottom ul li a span').css('display','');
    $('.window-app').addClass('d-none');
    $('.window-app.'+toGo).removeClass('d-none');
});

$('.v1-mining .v1-items .v1-item .bottom-card .action a').click(function(){
    $(this).closest('.v1-mining').addClass('d-none');
    $(this).closest('.panel').find('.v1-deposit').removeClass('d-none');
});
$('.v1-deposit .v1-deposit-toolbar .back a').click(function(){
    $(this).closest('.v1-deposit').addClass('d-none');
    $(this).closest('.panel').find('.v1-mining').removeClass('d-none');
});

var dock = $('.dashboard-page .bottom'),
galaxycanvas = $('#galaxy-canvas'),
dashboard = $('.dashboard-page'),
deSpaceLogo = $('.de-space-bg-logo'),
planetFirst = $('#de-globe-1'),
planetSecond = $('#de-globe-2'),
planetThird = $('#de-globe-3');
planetFour = $('#de-globe-4');
// rl.call(playVideo, null, null, "-=0");

rl
// .call(playVideo, null, null, "-=0")
// .to(galaxycanvas,1,{opacity:'1'})
.to(dashboard, 1, {opacity:'1'})
.to(planetFirst, 1, {opacity:'1'}, '-=1')
.to(planetSecond, 1, {opacity:'1'}, '-=1')
.to(planetThird, 1, {opacity:'1'}, '-=1')
.to(planetFour, 1, {opacity:'1'}, '-=1')
.from(dock, 1, {y:30, opacity:'0'})
.from(deSpaceLogo,1,{css:{marginLeft:-60}, opacity:'0'},'-=1');


/* Stars BG Animation */
if($('#galaxy-canvas').length > 0) {
"use strict";
var canvas = document.getElementById('galaxy-canvas'),
  ctx = canvas.getContext('2d'),
  w = canvas.width = window.innerWidth,
  h = canvas.height = window.innerHeight,
    
  hue = 217,
  stars = [],
  count = 0,
  maxStars = 1400;

// Cache gradient
var canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
var half = canvas2.width/2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#fff');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

// End cache

function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }
  
  if (min > max) {
    var hold = max;
    max = min;
    min = hold;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x,y) {
  var max = Math.max(x,y),
      diameter = Math.round(Math.sqrt(max*max + max*max));
  return diameter/2;
}

var Star = function() {

  this.orbitRadius = random(maxOrbit(w,h));
  this.radius = random(60, this.orbitRadius) / 12;
  this.orbitX = w / 2;
  this.orbitY = h / 2;
  this.timePassed = random(0, maxStars);
  this.speed = random(this.orbitRadius) / 50000;
  this.alpha = random(2, 10) / 10;

  count++;
  stars[count] = this;
}

Star.prototype.draw = function() {
  var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
      twinkle = random(10);

  if (twinkle === 1 && this.alpha > 0) {
    this.alpha -= 0.05;
  } else if (twinkle === 2 && this.alpha < 1) {
    this.alpha += 0.05;
  }

  ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
  this.timePassed += this.speed;
}

for (var i = 0; i < maxStars; i++) {
  new Star();
}

function animationGalaxy() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
    ctx.fillRect(0, 0, w, h)
  
  ctx.globalCompositeOperation = 'lighter';
  for (var i = 1, l = stars.length; i < l; i++) {
    stars[i].draw();
  };  
  
  window.requestAnimationFrame(animationGalaxy);
}

animationGalaxy();
}

              // run all GSAP code here

            }, false);
        });