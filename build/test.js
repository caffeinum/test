$(function () {
	function print( text ) {
		$('main').append("<p>"+text+"</p>");
	}

	var button = document.getElementById('myButton');
	var button2 = document.getElementById('myButton2');
	
	function runAway (event) {	
		$(event.target).css( 'left', Math.random() * 600 );
	    if(event.type=='mousedown'){
			event.target.innerHTML='You win';
		}
		
	}
	
	function runToward (event) {	
		$(event.target).css( 'right', Math.random() * 200 );
		$(event.target).css( 'top', Math.random() * 70 );
	    if(event.type=='mouseup'){
			event.target.innerHTML='You win';
		}
		
	}
	
	button.addEventListener('mouseover', runAway);
	button2.addEventListener('mouseover', runAway);
	button.addEventListener('mousedown', runAway);
	button2.addEventListener('mousedown', runAway);
	
	var buttons = [];
	var buttonProto = $('.button');

	for ( var i = 0; i < 10; i++ ) {
		// clone buttonProto
		button = buttonProto.clone();
		buttons.push( button )
		button.appendTo('body');
		button.on('mouseover mouseup', runToward);
		// add listeners
	}
	
	
	print('Try to catch the buttons!');
});