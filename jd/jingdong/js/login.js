window.onload = function(){
	var unameInp = $id('username');     //用户名框
	var pwInp = $id('password');     //密码框
	var btn = getElements('btn')[0];      //登录
	var tipsBox = getElements('tips')[0]
	
	btn.onclick = function(){
		// 创建ajax对象
		var xhr = new XMLHttpRequest;
		//发送ajax请求
		xhr.open('get','http://127.0.0.1/jingdonglogin.php?username='+unameInp.value+'&password='+pwInp.value);
		xhr.send(null);
		xhr.onreadystatechange = function(){
			if(xhr.status==200&&xhr.readyState==4){
				if(xhr.response==1){
					tipsBox.innerHTML = "恭喜"+unameInp.value+"登录成功";
					window.location.href = 'http://127.0.0.1:8848/%E9%A1%B9%E7%9B%AE/jingdong/index.html';
				}else{
					tipsBox.innerHTML = "用户名或密码错误"
				}
			}
		}
	}
}