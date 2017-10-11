$(document).ready(function(){

	//variables
	var controller,
		$sun = $('#sunshine'),
		$sunCenter = $('#sunshine #center'),
		$outerRing = $('#sunshine #outerRing'),
		$innerRing = $('#sunshine #innerRing'),
		$sky = $('#skyColor'),
		$PLinBalloon = $('#PLinBalloon'),
		$luisaSmile = $('#smile'),
		$peterSmile = $('#smile1'),
		$luisaEyes = $('#eyes'),
		$peterEyes = $('#eyes1'),
		$sandBag1 = $('#sandBag1'),
		$sandBag2 = $('#sandBag2'),
		$sandBag3 = $('#sandBag3'),
		$scrollDown = $('#scrollDown'),
		$text = $('#text'),
		$plane = $('#Plane'),
		rsvpForm = $("#rsvpForm"),
		rsvpFormShell = $("#rsvpFormShell"),
		cancel = $("#cancel"),
	    rsvpSign = $("#rsvpSign");

	// //firework Variables
	// var srcSize = 30,
	// 	quantity = 200,
	// 	sizeMin = 1,
	// 	sizeMax = 10,
	// 	speed = 1,
	// 	gravity = 0.2,
	// 	explosionQuantity = 3;

	// var fw1Src = document.querySelectorAll('#firework1Src');

	// var explosions = [],
	// 	currentExplosion = 0,
	// 	container, i;

	// for (i=0; i < explosionQuantity; i++){
	// 	container = document.createElement("div");
	// 	container.style.cssText = "position:absolute; left:0; top:0; overflow:visible; z-index:5000; pointer-events:none;";
	// 	document.body.appendChild(container);
	// 	explosions.push({
	// 		container: container,
	// 		animation: createExplosion(container)
	// 	});
	// }

	// function createExplosion(container){
	// 	var firework1TL = new TimelineMax({paused: true}),
	// 		fireworks = [],
	// 		angle, length, firework, i, size;

	// 	for(i=0; i<quantity; i++){
	// 		firework = document.createElement('div');
	// 		fireworks.push(firework);
	// 		firework.className = 'firework';
	// 		size = getRandom(sizeMin, sizeMax);
	// 		container.appendChild(firework);
	// 		angle = Math.random() * Math.PI * 2;
	// 		length = Math.random() * (srcSize / 2 - size / 2);

	// 		TweenMax.set(firework, {
	// 			x:Math.cos(angle) * length,
	// 			y:Math.sin(angle) * length,
	// 			width:size,
	// 			height:size,
	// 			xPercent: -50,
	// 			yPercent: -50,
	// 			visibility: 'hidden',
	// 			force3D:true,
	// 			backgroundColor: 'white'
	// 		});

	// 		firework1TL.to(firework, 1 + Math.random(), {
	// 			opacity: 0,
	// 			visibility: 'visible',
	// 			physics2D:{
	// 				angle: angle * 180 / Math.PI,
	// 				velocity: (100 + Math.random() * 300) * speed,
	// 				gravity: 700 * gravity
	// 			}
	// 		}, 0);
	// 	}

	// 	firework1TL.set(fireworks, {visibility:'hidden'});

	// 	return firework1TL;
	// }

	// function explode(element){
		
	// 	var bounds = element.getBoundingClientRect(),
 //      		explosion;

	// 	if(++currentExplosion === explosions.length){
	// 		currentExplosion = 0;
	// 	}

	// 	explosion = explosions[currentExplosion];
	// 	TweenMax.set(explosion.container, {x:bounds.left + bounds.width / 2, y:bounds.top + bounds.height / 2});
	// 	explosion.animation.restart();
	// }

	// function getRandom(min, max){
	// 	return min + Math.random() * (max - min);
	// }

	// explode(fw1Src[0]);


	//initialize scroll magic controller
	controller = new ScrollMagic.Controller();

	//Animate Balloon into view and tell user to scroll
	var BalloonIntroTL = new TimelineMax();

		BalloonIntroTL
			.set(rsvpFormShell, {autoAlpha: 0, scale: 0.1})
			.set($text, {autoAlpha: 0})
			.set($PLinBalloon, {y: '-150%', scale: 1.8, transformOrigin: 'bottom center'})
			.set($scrollDown, {autoAlpha: 0, x: '-=80px'})
			.to($PLinBalloon, 5, {y: '-83%'})
			.add('balloonIn')
			.fromTo($luisaEyes, 0.1, {scaleY:1, transformOrigin: 'center center'}, {scaleY:0.1, repeat: 1, yoyo: true}, 'balloonIn-=2')
			.fromTo($peterEyes, 0.1, {scaleY:1, transformOrigin: 'center center'}, {scaleY:0.1, repeat: 1, yoyo: true}, 'balloonIn-=1')
			.fromTo($luisaSmile, 1, {scale: 0.4, transformOrigin: 'center center'}, {scale: 1})
			.add('luisaSmiled')
			.fromTo($peterSmile, 1, {scale: 0.4, transformOrigin: 'center center'}, {scale: 1}, '-=0.5')
			.add('peterSmiled')
			.fromTo($luisaEyes, 0.1, {scaleY:1, transformOrigin: 'center center'}, {scaleY:0.1, repeat: 1, yoyo: true}, 'luisaSmiled')
			.fromTo($luisaEyes, 0.1, {scaleY:1, transformOrigin: 'center center'}, {scaleY:0.1, repeat: 1, yoyo: true}, 'luisaSmiled+=0.3')
			.fromTo($peterEyes, 0.1, {scaleY:1, transformOrigin: 'center center'}, {scaleY:0.1, repeat: 1, yoyo: true}, 'peterSmiled')
			.fromTo($sandBag1, 3, {rotation: 5, transformOrigin: 'top center'}, {rotation: -5}, '-=2')
			.to($sandBag1, 1, {rotation: 0})
			.fromTo($sandBag3, 3, {rotation: -5, transformOrigin: 'top center'}, {rotation: 5}, '-=4')
			.to($sandBag3, 1, {rotation: 0}, '-=4')
			.to($PLinBalloon, 0.5, {x: '-85%', scale: 1, ease: Power1.easeInOut}, '-=1')
			.to($scrollDown, 1, {autoAlpha: 1, x: '0px', ease: Power4.easeInOut}, '-=1')
			;


	//on scroll, hide scroll down command, and begin to move clouds up at different speeds
	var FallingTL = new TimelineMax();

		FallingTL
			.to($scrollDown, 4, {autoAlpha: 0, y: '+=160px', ease: Power4.easeInOut})
			;

	var RemoveInstructionsScene = new ScrollMagic.Scene({
		triggerElement: '#introHook',
		triggerHook: 0,
		duration: 100,
		reverse: true
	})
	//.addIndicators()
	.setTween(FallingTL)
	.addTo(controller);

	//Sun movement and color change of sky/sun
	var SunMovementTL = new TimelineMax();

		SunMovementTL
			.fromTo($sun, 1, {y: '+=30%', x: '-=5%'}, {y: '-=30%', x: '+=5%'});

	var SunMoveScene = new ScrollMagic.Scene({
		triggerElement: '#introHook',
		triggerHook: 0,
		duration: 8000,
		reverse: true
	})
	.setTween(SunMovementTL)
	.addTo(controller);

	var SunColorTL = new TimelineMax();

		SunColorTL
			.fromTo($sunCenter, 1, {fill: '#FFFE4A'}, {fill:'#FFDB00', ease: Expo.easeIn})
			.fromTo($outerRing, 1, {attr:{r: '225'}}, {attr:{r: '175'}, ease: Expo.easeIn}, '-=1')
			.fromTo($innerRing, 1, {attr:{r: '175'}}, {attr:{r: '150'}, ease: Expo.easeIn}, '-=1');

	var SunColorScene = new ScrollMagic.Scene({
		triggerElement: '#introHook',
		triggerHook: 0,
		duration: 7000,
		reverse: true
	})
	.setTween(SunColorTL)
	.addTo(controller);


	var sandBag1TL = new TimelineMax();

    	sandBag1TL
    		.fromTo($sandBag1, 1, {rotation: 0, transformOrigin: 'top center'}, {rotation: 2.5})
    		.fromTo($sandBag1, 2, {rotation: 2.5}, {rotation: -2.5, repeat: 3, yoyo: true, ease: Back.easeInOut.config(1)})
			.to($sandBag1, 1, {rotation: 0});  

    var sandBag3TL = new TimelineMax();

    	sandBag3TL
    		.fromTo($sandBag3, 1, {rotation: 0, transformOrigin: 'top center'}, {rotation: -1})
    		.fromTo($sandBag3, 2, {rotation: -1}, {rotation: 1, repeat: 2, yoyo: true, ease: Back.easeInOut.config(1)})
			.to($sandBag3, 1, {rotation: 0});  

	var animateBalloonScene = new ScrollMagic.Scene({
		triggerElement: '#Cloud1',
		triggerHook: 1,
		duration: 7000
	})
	.setTween([sandBag1TL, sandBag3TL])
	.addTo(controller);

	var FirstTextTL = new TimelineMax();

		FirstTextTL
			.to($text, 1, {x: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
			.to($text, 1, {x: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=2')
			.set($text, {x: '-=30px', text: "...celebrate the marriage of Luisa and Peter!"});

    var FirstTextScene = new ScrollMagic.Scene({
    	triggerElement: '#Cloud1',
    	triggerHook: 0.5,
    	duration: 1300
    })
   // .addIndicators()
    .setTween(FirstTextTL)
    .addTo(controller);

    var PlaneTL = new TimelineMax();

	  	PlaneTL
	  		.to($plane, 15, {x: '350%'});

	var PlaneScene = new ScrollMagic.Scene({
		triggerElement: '#Cloud2',
		triggerHook: 0.5,
		duration: 1500
	})
	// .addIndicators()
	.setTween(PlaneTL)
	.addTo(controller);

    var SecondTextTL = new TimelineMax();

		SecondTextTL			
			.to($text, 1, {x: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
			.to($text, 1, {x: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=2')
			.set($text, {x: '+=60px', y:'-=20px', text: "Will you join us?"});

    var SecondTextScene = new ScrollMagic.Scene({
    	triggerElement: '#Cloud4',
    	triggerHook: 0.4,
    	duration: 2000
    })
    //.addIndicators()
    .setTween(SecondTextTL)
    .addTo(controller);

    var ThirdTextTL = new TimelineMax();

		ThirdTextTL		
			.to($text, 0.3, {x: '+=30px', autoAlpha: 1, ease: Power4.easeInOut});

    var ThirdTextScene = new ScrollMagic.Scene({
    	triggerElement: '#islandGround2',
    	triggerHook: 0.9,
    	duration: 0
    })
    //.addIndicators()
    .setTween(ThirdTextTL)
    .addTo(controller);

	//-----------RSVP
	rsvpSign.on('mouseover', animateSign);
	rsvpSign.on("click", openRSVP);
	cancel.on('click', closeRSVP);

	function animateSign(e){
		rsvpTL = new TimelineMax();

		rsvpTL
			.set(rsvpSign, {transformOrigin: 'bottom center'})
			.fromTo(rsvpSign, 0.2, {scale: 1}, {scale: 1.05})
			.fromTo(rsvpSign, 0.05, {rotation: 0}, {rotation:3})
			.fromTo(rsvpSign, 0.1, {rotation: 3}, {rotation: -3, repeat: 2, yoyo: true})
			.fromTo(rsvpSign, 0.05, {rotation: -3}, {rotation: 0})
			.fromTo(rsvpSign, 0.2, {scale: 1.05}, {scale:1})
			;

	}

	function openRSVP(e){
		TweenMax.to(rsvpFormShell, 0.4 , {autoAlpha: 1, scale: 1.2, ease: Power4.easeIn});
		rsvpSign.off('mouseover', animateSign);
		rsvpSign.off("click", openRSVP);
		rsvpSign.css({
			"cursor": "default"
		})
		console.log("RSVP opened");
	}

	function closeRSVP(e){
		TweenMax.to(rsvpFormShell, 0.4 , {autoAlpha: 0, scale: 0.1, ease: Power4.easeOut});
		rsvpSign.on('mouseover', animateSign);
		rsvpSign.on("click", openRSVP);
		rsvpSign.css({
			"cursor": "pointer"
		})
		console.log("RSVP closed");
	}


	//Sending Emails
	rsvpForm.on('submit', function (event) {
	    event.preventDefault();
	    console.log("Form Submitted");

	    var firstName = $('#firstName').val(),
	    	lastName = $('#lastName').val(),
	    	email = $('#email').val(),
	    	attending = $('#attending').val(),
	    	foodAllergies = $('#foodAllergies').val(),
	    	comments = $('#comments').val();

	    if(validateForm()){
	    	sendRSVP(firstName, lastName, email, attending, foodAllergies, comments);
	    	closeRSVP();

	    	emailSentMessage = new TimelineMax();

	    		emailSentMessage
	    			.to($text, 1, {x: '+=10px', autoAlpha: 0, ease: Power4.easeInOut})
					.set($text, {x: '-=80px', y:'-=10px', text: "Thanks! Check your email!"})
					.to($text, 1, {x: '+=20px', autoAlpha: 1, ease: Power4.easeInOut});
	    } 

	    function validateForm(){
			if(firstName === ""){
				alert("Please include your first name.");
				return false;
			}
			else if(lastName === ""){
				alert("Please include your last name.");
				return false;
			}
			else if(!ValidateEmail(email)){
				alert("Please include a valid email address.");
				return false;
			}
			else{
				return true;
			}
		}  

		function ValidateEmail(mail){  
			var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		    
		    if(mail.match(mailFormat)){
		    	return true;
		    }
		    else{
		    	return false;
		    }
		} 
	 });

	function sendRSVP(firstName, lastName, email, attending, foodAllergies, comments){

		if(attending === "yes"){
			emailjs.send("gmail","rsvpAccept",{
				firstName: firstName, 
				lastName: lastName,
				email: email,
				attending: attending,
				foodAllergies: foodAllergies,
				comments: comments
			});
		}else{
			emailjs.send("gmail","rsvpDecline",{
				firstName: firstName, 
				lastName: lastName,
				email: email,
				attending: attending,
				foodAllergies: foodAllergies,
				comments: comments
			});
		}
	}
});