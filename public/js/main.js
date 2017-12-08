$(document).ready(function(){
	
	var landscapeModeCnt = 0;
	var portraitModeCnt = 0;
	
	//elements to manipulate
	var controller,
		$sun = $('#sunshine'),
		$sunCenter = $('#sunshine #center'),
		$outerRing = $('#sunshine #outerRing'),
		$innerRing = $('#sunshine #innerRing'),
		$BLC1 = $('#BackLeftCloud1'),
		$BLC2 = $('#BackLeftCloud2'),
		$MC1 = $('#MainCloud1'),
		$MC2 = $('#MainCloud2'),
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
		rsvpForm = $("#rsvpFormWrapper"),
		cancel = $("#cancel"),
	    rsvpSign = $("#rsvpSign"),
	    planningBtn = $('#planningBtn'),
	    registryBtn = $('#registryBtn'),
	    device = $('#device'),
	    rotateMsg = $('#rotateMsg'),
	    check = $('#check');
	    
	//animation values
	var balloonFloatDown,
		balloonMoveLeft,
		balloonMoveUp,
		scrollDownHideDuration,
		text1Duration,
		planeDuration,
		sunMovementDuration,
		sunColorDuration,
		balloonDuration,
		rsvpFormXOffset,
		thirdTextXOffset,
		thirdTextYOffset
		;
	
	function orientationChange() {
		//get device width
		// var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		var width = screen.width;
		var height = screen.height;
		
		//landscape
	    if(width > height){
			landscapeModeCnt += 1;
	    	
	    	if(portraitModeCnt === 1){
	    		window.location.reload();
	    	}
	    	
	    	if(width <= 668){
				balloonFloatDown = '-73%';
				balloonMoveLeft = '-78%';
				balloonMoveUp = '-83%';
				scrollDownHideDuration = 50;
				text1Duration = 900;
				planeDuration = 800;
				sunMovementDuration = 4000;
				sunColorDuration = 4500;
				balloonDuration = 4500;
				rsvpFormXOffset = '215%';
				thirdTextXOffset = '-=20px';
				thirdTextYOffset = '+=20px';
			}
			else if(width > 669 && width <= 1140){
				balloonFloatDown = '-76%';
				balloonMoveLeft = '-82%';
				balloonMoveUp = '-83%';
				scrollDownHideDuration = 50;
				text1Duration = 900;
				planeDuration = 800;
				sunMovementDuration = 4000;
				sunColorDuration = 4500;
				balloonDuration = 4500;
				rsvpFormXOffset = '215%';
				thirdTextXOffset = '-=20px';
				thirdTextYOffset = '+=20px';
			}
			else if(width > 1140){
				balloonFloatDown = '-83%';
				balloonMoveLeft = '-85%';
				balloonMoveUp = '-83%';
				scrollDownHideDuration = 100;
				text1Duration = 1000;
				planeDuration = 1500;
				sunMovementDuration = 8000;
				sunColorDuration = 7000;
				balloonDuration = 7000;
				rsvpFormXOffset = '200%';
				thirdTextXOffset = '+=80px';
				thirdTextYOffset = '+=60px';
			}
		
			//initialize scroll magic controller
			controller = new ScrollMagic.Controller();
		
			//Animate Balloon into view and tell user to scroll
			var BalloonIntroTL = new TimelineMax();
		
				BalloonIntroTL
					.set(rsvpForm, {autoAlpha: 1, x: rsvpFormXOffset})
					.set($text, {autoAlpha: 0})
					.set($PLinBalloon, {y: '-150%', autoAlpha: 1, scale: 1.8, transformOrigin: 'bottom center'})
					.set($scrollDown, {x: '-=80px'})
					.to($PLinBalloon, 5, {y: balloonFloatDown})
					.add('balloonIn')
					.fromTo($luisaEyes, 0.1, {scaleY:1, transformOrigin: 'center center'}, {scaleY:0.1, repeat: 1, yoyo: true}, 'balloonIn-=2')
					.fromTo($peterEyes, 0.1, {scaleY:1, transformOrigin: 'center center'}, {scaleY:0.1, repeat: 1, yoyo: true}, 'balloonIn-=1')
					.fromTo($luisaSmile, 1, {scale: 0.4, transformOrigin: 'center center'}, {scale: 1})
					.add('luisaSmiled')
					.fromTo($peterSmile, 1, {scale: 0.4, transformOrigin: 'center center'}, {scale: 1}, '-=0.5')
					.add('peterSmiled')
					.fromTo($luisaEyes, 0.1, {scaleY:1}, {scaleY:0.1, repeat: 1, yoyo: true}, 'luisaSmiled')
					.fromTo($luisaEyes, 0.1, {scaleY:1}, {scaleY:0.1, repeat: 1, yoyo: true}, 'luisaSmiled+=0.3')
					.fromTo($peterEyes, 0.1, {scaleY:1}, {scaleY:0.1, repeat: 1, yoyo: true}, 'peterSmiled')
					.fromTo($sandBag1, 3, {rotation: 5, transformOrigin: 'top center'}, {rotation: -5}, '-=2')
					.to($sandBag1, 1, {rotation: 0})
					.fromTo($sandBag3, 3, {rotation: -5, transformOrigin: 'top center'}, {rotation: 5}, '-=4')
					.to($sandBag3, 1, {rotation: 0}, '-=4')
					.to($PLinBalloon, 0.5, {x: balloonMoveLeft, y: balloonMoveUp, scale: 1, force3D:false, ease: Power1.easeInOut}, '-=1')
					.to($scrollDown, 1, {autoAlpha: 1, x: '0px', ease: Power4.easeInOut}, '-=1');
		
			//on scroll, hide scroll down command, and begin to move clouds up at different speeds
			var scrollDownHide = new TweenMax.to($scrollDown, 4, {autoAlpha: 0, y: '+=160px', ease: Power4.easeInOut});
		
			var RemoveInstructionsScene = new ScrollMagic.Scene({
				triggerElement: '#introHook',
				triggerHook: 0,
				duration: scrollDownHideDuration,
				reverse: true
			})
			// .addIndicators()
			.setTween(scrollDownHide)
			.addTo(controller);
		
			//Sun movement and color change of sky/sun
			var SunMovementTL = new TimelineMax();
				//get rid of the from to, it is causing the sun to jump on load for different screen sizes.
				SunMovementTL
					.to($sun, 1,{y: '-=30%', x: '+=5%'});
		
			var SunMoveScene = new ScrollMagic.Scene({
				triggerElement: '#introHook',
				triggerHook: 0,
				duration: sunMovementDuration,
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
				duration: sunColorDuration,
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
				duration: balloonDuration
			})
			// .addIndicators()
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
		    	duration: text1Duration
		    })
		    // .addIndicators()
		    .setTween(FirstTextTL)
		    .addTo(controller);
		    
		    var PlaneTL = new TimelineMax();
		
			  	PlaneTL
			  		.set($plane, {autoAlpha: 1})
			  		.to($plane, 15, {x: '350%'});
		
			var PlaneScene = new ScrollMagic.Scene({
				triggerElement: '#Cloud2',
				triggerHook: 0.5,
				duration: planeDuration
			})
		    // .addIndicators()
			.setTween(PlaneTL)
			.addTo(controller);
		
		    var SecondTextTL = new TimelineMax();
		
				SecondTextTL			
					.to($text, 1, {x: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
					.to($text, 1, {x: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=2')
					.set($text, {x: thirdTextXOffset, y: thirdTextYOffset, text: "Will you join us?"});
		
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
					.to($text, 0.3, {x: '+=30px', autoAlpha: 1, ease: Power4.easeInOut})
					.to(planningBtn, 0.5, {autoAlpha: 1, x: '+=20px', ease: Power3.easeInOut}, '+=0.5')
					.to(registryBtn, 0.5, {autoAlpha: 1, x: '+=20px', ease: Power3.easeInOut});
		
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
			 
	    }else{
	    	portraitModeCnt += 1;
	    	
	    	if(landscapeModeCnt === 1){
	    		window.location.reload();
	    	}
	    	
	    	TweenMax.set(device, {rotation: 0, autoAlpha: 1});
	    	TweenMax.set(rotateMsg, {x: '-=10px'});
	    	
	    	var rotateDeviceTL = new TimelineMax();
	    	
	    		rotateDeviceTL
	    			.to(rotateMsg, 1, {x: '+=10px', autoAlpha: 1, ease: Power3.easeInOut})
	    		    .to(device, 0.5, {rotation: -90, transformOrigin: 'center center', ease: Power4.easeInOut, ease: Power4.easeOut})
	    			.to(check, 0.2, {autoAlpha: 1, ease: Power4.easeIn});
	    }
	}
  
	window.addEventListener('orientationchange', orientationChange);
	  
	orientationChange();
	
	function animateSign(e){
		rsvpTL = new TimelineMax();
			
		rsvpTL
			.set(rsvpSign, {transformOrigin: 'bottom center'})
			.fromTo(rsvpSign, 0.2, {scale: 1}, {scale: 1.05})
			.fromTo(rsvpSign, 0.05, {rotation: 0}, {rotation:3})
			.fromTo(rsvpSign, 0.1, {rotation: 3}, {rotation: -3, repeat: 2, yoyo: true})
			.fromTo(rsvpSign, 0.05, {rotation: -3}, {rotation: 0})
			.fromTo(rsvpSign, 0.2, {scale: 1.05}, {scale:1});
	}
			
});
