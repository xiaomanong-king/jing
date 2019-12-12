
	var exhibition = getElement('exhibition')[0];
	var small = getElement('small')[0];
	var mask = getElement('mask')[0];
	var big = getElement('big')[0];
	var bigImg = getElement('bigImg')[0];
	small.onmouseenter = function(e){	
		mask.style.display = 'block';
		big.style.display = 'block';
	}
	small.onmouseleave = function(){
		mask.style.display = 'none';
		big.style.display = 'none';
	}
	small.onmousemove = function(){
		var e = window.event || e;
		var pageX = e.clientX + scroll().left;
		var pageY = e.clientY + scroll().top;
		var x = pageX - exhibition.offsetLeft - mask.offsetWidth/2;
		var y = pageY - exhibition.offsetTop - mask.offsetHeight/2;
		var maxX = small.offsetWidth - mask.offsetWidth;
		var maxY = small.offsetHeight - mask.offsetHeight;
		if(x<0){
			x = 0;
		}
		if(x>maxX){
			x = maxX; 
		}
		if(y<0){
			y = 0;
		}
		if(y>maxY){
			y = maxY; 
		}
		mask.style.top = y + 'px';
		mask.style.left = x + 'px';
		bigImg.style.marginLeft = -x/small.offsetWidth*bigImg.offsetWidth + "px";
		bigImg.style.marginTop = -y/small.offsetHeight*bigImg.offsetHeight + "px";
	}
