<?php
	header('content-type:text/html;charset=utf8');
	header('Access-Control-Allow-Origin:*');
	// echo 1;
	$connect = mysqli_connect("localhost","root","root","info",3306);
	if(mysqli_connect_error()){
		die('连接数据库失败');
	}
	$uname = $_REQUEST['username'];
	$pw = $_REQUEST['password'];
	$sql = "SELECT * FROM user WHERE username='$uname' AND password='$pw'";
	$result = mysqli_query($connect,$sql);
	$rows = mysqli_num_rows($result);
	
	if($rows>0){
		echo "1";
	}else{
		echo "0";
	}
?>