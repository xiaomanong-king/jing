window.onload = function(){
	var unameInp = $id('username');
	var pwInp = $id('password');
	var btn = getElements('btn')[0];
	btn.onclick = function(){
		var xhr = new XMLHttpRequest;
		xhr.open('get','http://127.0.0.1/jingdongzhuce.php?username='+unameInp.value+'&password='+pwInp.value);
		xhr.send(null);
		xhr.onreadystatechange = function(){
			if(xhr.status==200&&xhr.readyState==4){
				if(xhr.response==1){
					window.location.href = 'http://www.baidu.com';
				}
			}
		}
	}
}