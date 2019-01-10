window.onload = function() {
init();
console.log('Connected to JS');
}
function init(){
console.log('init fired');

	
function Banner(){
	
  var keyword = "Obituary";
	var canvas;
	var context;
	
	var bgCanvas;
	var bgContext;
	
	var denseness = 10;
	
	//Each particle/icon
	var parts = [];
	
	var mouse = {x:-100,y:-100};
	var mouseOnScreen = false;
	
	var itercount = 0;
	var itertot = 40;
	
	this.initialize = function(canvas_id){
		canvas = document.getElementById(canvas_id);
		context = canvas.getContext('2d');
		
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.height = 280;
		
		bgCanvas = document.createElement('canvas');
		bgContext = bgCanvas.getContext('2d');
		
		bgCanvas.width = window.innerWidth;
		bgCanvas.height = window.innerHeight;
	
		canvas.addEventListener('mousemove', MouseMove, false);
		canvas.addEventListener('mouseout', MouseOut, false);
			
		start();
	}
	
	var start = function(){
			
		bgContext.fillStyle = "#000000";
		bgContext.font = '300px impact';
		bgContext.fillText(keyword, 15, 275);
		
		clear();	
		getCoords();
	}
	
	var getCoords = function(){
		var imageData, pixel, height, width;
		
		imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height);
		
		// quickly iterate over all pixels - leaving density gaps
	    for(height = 0; height < bgCanvas.height; height += denseness){
            for(width = 0; width < bgCanvas.width; width += denseness){   
               pixel = imageData.data[((width + (height * bgCanvas.width)) * 4) - 1];
                  //Pixel is black from being drawn on. 
                  if(pixel == 255) {
                    drawCircle(width, height);
                  }
            }
        }
        
        setInterval( update, 40 );
	}
	
	var drawCircle = function(x, y){
		
		var startx = (Math.random() * canvas.width);
		var starty = (Math.random() * canvas.height);
		
		var velx = (x - startx) / itertot;
		var vely = (y - starty) / itertot;	
		
		parts.push(
			{c: '#' + (Math.random() * 0x949494 + 0xaaaaaa | 0).toString(16),
			 x: x, //goal position
			 y: y,
			 x2: startx, //start position
			 y2: starty,
			 r: true, //Released (to fly free!)
			 v:{x:velx , y: vely}
			}
		)
	}
		
	var update = function(){
		var i, dx, dy, sqrDist, scale;
		itercount++;
		clear();
		for (i = 0; i < parts.length; i++){
					
			//If the dot has been released
			if (parts[i].r == true){
				//Fly into infinity!!
				parts[i].x2 += parts[i].v.x;
		        parts[i].y2 += parts[i].v.y;
			//Perhaps I should check if they are out of screen... and kill them?
			}
			if (itercount == itertot){
				parts[i].v = {x:(Math.random() * 6) * 2 - 6 , y:(Math.random() * 6) * 2 - 6};
				parts[i].r = false;
			}
			
	
			//Look into using svg, so there is no mouse tracking.
			//Find distance from mouse/draw!
			dx = parts[i].x - mouse.x;
	        dy = parts[i].y - mouse.y;
	        sqrDist =  Math.sqrt(dx*dx + dy*dy);
			
			if (sqrDist < 20){
				parts[i].r = true;
			} 			

			//Draw the circle
			context.fillStyle = parts[i].c;
			context.beginPath();
			context.arc(parts[i].x2, parts[i].y2, 4 ,0 , Math.PI*2, true);
			context.closePath();
	    	context.fill();	
				
		}	
	}
	
	var MouseMove = function(e) {
	    if (e.layerX || e.layerX == 0) {
	    	//Reset particle positions
	    	mouseOnScreen = true;
	    	
	    	
	        mouse.x = e.layerX - canvas.offsetLeft;
	        mouse.y = e.layerY - canvas.offsetTop;
	    }
	}
	
	var MouseOut = function(e) {
		mouseOnScreen = false;
		mouse.x = -100;
		mouse.y = -100;	
	}
	
	//Clear the on screen canvas
	var clear = function(){
		context.fillStyle = '#333';
		context.beginPath();
  		context.rect(0, 0, canvas.width, canvas.height);
 		context.closePath();
 		context.fill();
	}
}

var banner = new Banner();
banner.initialize("canvas");
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
//Scroll Skip Code
function AboScrl() {
  window.scrollBy(0, 325);
}
function AlbScrl () {
	window.scrollBy(0, 1100) ;
}
function Scr2() {
	window.scrollBy(0, 950) ;
}
function Scr3() {
	window.scrollBy(0, 1400) ;
}
function Scr4() {
	window.scrollBy(0, 2000) ;
}
function Scr5() {
	window.scrollBy(0, 2800) ;
}


//Raining Blood Code
(function() {
 var canvas2 = $('#canvas2')[0];
  

  if (canvas2.getContext) {
    var ctx = canvas2.getContext('2d');
    var w = canvas2.width;
    var h = canvas2.height;
    ctx.strokeStyle = 'rgba(255,0,0,0.5)';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    var init = [];
    var maxParts = 1000;
    for (var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10
      })
    }

    var particles = [];
    for (var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    }

    function move() {
      for (var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if (p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }

    setInterval(draw, 30);

  }
});


