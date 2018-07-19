function BuildMatrixCanvas() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var chars = "田A由B甲C申D甴E电F甶G男H甸I甹J町K画L甼M甽N甾O甿P畀Q畁R畂S畃T畄U畅V畇W畈X畉Y畊Z畋1界2畍3畎4畏5畐6畑7890";
	chars = chars.split("");

	var fontSize = 14;
	var columns = canvas.width/fontSize;

	var drops = [];
	
	for (var x = 0; x < columns; x++)
		drops[x] = 1;

	function draw()
	{
		context.fillStyle = "rgba(0, 0, 0, 0.05)";
		context.fillRect(0, 0, canvas.width, canvas.height);
		
		context.fillStyle = "#0F0";
		context.font = fontSize + "px arial";
	// Loop drops
		for (var i = 0; i < drops.length; i++) {
		// Random 'chars' character print
			var text = chars[Math.floor(Math.random()*chars.length)];
		// x = i*font_size, y = value of drops[i]*font_size
			context.fillText(text, i*fontSize, drops[i]*fontSize);
			
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
			if (drops[i]*fontSize > canvas.height && Math.random() > 0.975)
				drops[i] = 0;
			
		//incrementing Y coordinate
			drops[i]++;
		}
	}

	setInterval(draw, 40);
	$("#canvas").show();

	MoveNeo();
}

function MoveNeo() {
	$("#neo").show();

	var elem = document.getElementById("neo");
	var pos = -600;
	var id = setInterval(frame, 10);

	function frame() {
		if (pos == -200) {
			clearInterval(id);
		}
		else {
			pos++;
			elem.style.left = pos + 'px';
		}
	}
}