window.onload = function(){
	// 页面卷曲
	var div = $id('scroll');
	window.onscroll = function(){
		var height = window.scroll().top;
		if(height>100){
			div.style.display = 'block';
			div.className = 'fixed';
		}else{
			div.style.display = 'none';
			div.className = '';
		}
	}
	
	
	// banner图
	var mySwiper = new Swiper('.swiper-container',{
		loop:true,
		pagination: {
		      el: '.swiper-pagination',
			  clickable:true
		    },
		 // 如果需要前进后退按钮
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		autoplay:{
			delay:2000
		}
	})
	var btnPrev = getElements('swiper-button-prev')[0];
	var btnNext = getElements('swiper-button-next')[0];
	var mainBanner = getElements('main-banner')[0];
	mainBanner.onmouseenter = function(){
		btnPrev.style.display = 'block';
		btnNext.style.display = 'block';
	}
	mainBanner.onmouseleave = function(){
		btnPrev.style.display = 'none';
		btnNext.style.display = 'none';
	}
	
	
	// 京东秒杀右边的banner图
	var pre = getElements('pre')[0];
	var next = getElements('next')[0];
	var ul = getElements('item-wap-outside')[0];
	var index = 0;
	
	next.onclick = function(){
		index++;
		for(var i=0;i<3;i++){
			if(index<3){
				animate(ul,{left:-index*610});
			}else{
				index = 0;
				animate(ul,{left:-index*610});
			}
		}
	}
	
	
	
	//Ajax数据登录
	var unameInp = $id('username');     //用户名框
	var pwInp = $id('password');     //密码框
	var loginBtn = getElements('loginBtn')[0];      //登录
	var showBox = getElements('showBox')[0]
	var inpBox = getElements('inpBox')[0]
	loginBtn.onclick = function(){
		// 创建ajax对象
		var xhr = new XMLHttpRequest;
		//发送ajax请求
		xhr.open('get','http://127.0.0.1/jingdonglogin.php?username='+unameInp.value+'&password='+pwInp.value);
		xhr.send(null);
		xhr.onreadystatechange = function(){
			if(xhr.status==200&&xhr.readyState==4){
				if(xhr.response==1){
					inpBox.style.display = "none";
					showBox.style.display = "block";
					showBox.innerHTML = "恭喜"+unameInp.value+"登录成功"
				}else{
					inpBox.style.display = "block";
					showBox.style.display = "none";
					unameInp.value = "";
					pwInp.value = "";
				}
			}
		}
	}
	
	
	// 倒计时
	var time = new Date();
	console.log(time);
}
