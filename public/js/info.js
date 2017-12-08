$(document).ready(function(){
    var rsvpForm = $("#rsvpFormWrapper"),
		$text = $('#text');	
		
	$('.ui.checkbox').checkbox();
			
	var submitRSVP = $('#submit');
	
	//Sending Emails
	submitRSVP.on('click', function (event) {
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
		
		    emailSentMessageTL = new TimelineMax();
		    	
		    emailSentMessageTL
			.set($text, {x: '-=20px', text: "Thanks! Check your email!"})
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
			else if(!validateEmail(email)){
				alert("Please include a valid email address.");
				return false;
			}
			else{
				return true;
			}
		}  
		
		function validateEmail(mail){  
			var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		    
		    if(mail.match(mailFormat)){
		    	return true;
		    }
		    else{
		    	return false;
		    }
		}
	});
				
	function closeRSVP(e){
    	TweenMax.to(rsvpForm, 0.5 , {x: '-200%', force3D:false, ease: Power4.easeInOut});
    }
    
    function sendRSVP(firstName, lastName, email, attending, foodAllergies, comments){
    		
    	if(attending === "on"){
    		emailjs.send("gmail","rsvpAccept",{
    			firstName: firstName, 
    			lastName: lastName,
    			email: email,
    			attending: "Yes",
    			foodAllergies: foodAllergies,
    			comments: comments
    		});
    	}else{
    		emailjs.send("gmail","rsvpDecline",{
    			firstName: firstName, 
    			lastName: lastName,
    			email: email,
    			attending: "No",
    			foodAllergies: foodAllergies,
    			comments: comments
    		});
    	}
    }
});