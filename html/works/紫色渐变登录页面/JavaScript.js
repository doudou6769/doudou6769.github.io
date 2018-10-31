window.onload = function(){
	var user = document.getElementById("user_input");
		var password = document.getElementById("password_input");
		/*输入框获取焦点时执行的函数*/
		function focu(a){
			var fa = document.getElementById(a + "_fa");
			var hr = document.getElementById(a + "_hr");
			hr.style.left = "0";		/*显示黑色下划线*/
			fa.style.color = "#66f";	/*改变图标颜色为蓝色*/
		}
		/*输入框失去焦点时检查内容并作出提示*/
		function check(a){
			var hr_true = document.getElementById(a + "_hr_true");
			var hr_flase = document.getElementById(a + "_hr_flase");
			var fa = document.getElementById(a + "_fa");
			var hr = document.getElementById(a + "_hr");
			var input = document.getElementById(a + "_input").value;
			var reg_user = /^[a-zA-Z]\w+$/;
			var reg_password = /^[a-zA-Z0-9]{4,10}$/;
			if (input == "") {	/*当用户没有输入（输入框为空字符）时*/
				hr.style.left = "-101%";	
				fa.style.color = "#000";
				hr_true.style.left = "-101%";
				hr_flase.style.left = "-101%";
			}
			else{
				/*验证用户名是否合法*/
				if (a == "user") {
					if (reg_user.test(input)) {
						/*合法显示绿色下划线*/
						hr.style.left = "-101%";
						hr_flase.style.left = "-101%";
						hr_true.style.left = "0";
					}
					else{
						/*不合法显示红色下划线*/
						hr.style.left = "-101%";
						hr_true.style.left = "-101%";
						hr_flase.style.left = "0";
					}
				}
				/*验证密码是否合法*/
				else if (a == "password") {
					if (reg_password.test(input)) {
						/*合法显示绿色下划线*/
						hr.style.left = "-101%";
						hr_flase.style.left = "-101%";
						hr_true.style.left = "0";
					}
					else{
						/*不合法显示红色下划线*/
						hr.style.left = "-101%";
						hr_true.style.left = "-101%";
						hr_flase.style.left = "0";
					}
				}
			}
		}
		/*设置输入框的监听事件*/
		user.addEventListener("focus",function(){focu("user");});
		password.addEventListener("focus",function(){focu("password");});	
		user.addEventListener("blur",function(){check("user");});
		password.addEventListener("blur",function(){check("password");});
}