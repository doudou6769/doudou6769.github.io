var lunbo = document.querySelector("#lunbo");
var about_me = document.getElementById("about_me");
var am_more = document.getElementById("am_more");
var Professional_skills = document.getElementById("Professional_skills");
var am_t = document.querySelectorAll("#about_me>div:not(:first-child)>div:first-child");
var am_b = document.querySelectorAll("#about_me>div:not(:first-child)>div:last-child");
var CANVAS_WIDTH = document.querySelector("#Professional_skills>div:not(:first-child)").offsetWidth * 0.7;

function login(){
	var login = document.querySelector("#login");
	login.onclick = function(){
		layer.open({
			title:'LOGIN',
  			type: 2,
  			content: 'login/index.html',
  			area:['500px','530px'],
  			closeBtn:1,
  			shade:0.2,
  			shadeClose:true,
  			anim:1
		});
	}
}
login();
//“关于我”渐显动画
function aboutMe(){
	window.addEventListener("scroll",function(){
		if(getWindowHeight() + getScrollTop() > lunbo.scrollHeight + 300){
			for(var i = 0; i < am_t.length; i++){
				am_t[i].style.opacity = "1";
				am_b[i].style.opacity = "1";
				am_t[i].style.marginLeft = "-25%";
				am_b[i].style.marginLeft = "-45%";
				am_b[i].style.boxShadow = "15px 15px 15px #aaa";
			}
		} else {
			for(var i = 0; i < am_t.length; i++){
				am_t[i].style.opacity = "0";
				am_b[i].style.opacity = "0";
				am_t[i].style.marginLeft = "-50%";
				am_b[i].style.marginLeft = "-55%";
				am_b[i].style.boxShadow = "0 0 0 #aaa";
			}
		}
	});
}
aboutMe();

function ring(cxt,data,strokeColor,backgroundColor){
	cxt.clearRect(0,0,cvs[0].width,cvs[0].height);
	cxt.lineWidth = "10";
	cxt.beginPath();
	cxt.arc(cvs[0].width/2,cvs[0].height/2,50,0,Math.PI * 2);
	cxt.strokeStyle = backgroundColor;
	cxt.stroke();
	cxt.beginPath();
	cxt.arc(cvs[0].width/2,cvs[0].height/2,50,1.5 * Math.PI,1.5 * Math.PI + Math.PI * 2 * data);
	cxt.strokeStyle = strokeColor;
	cxt.stroke();
	cxt.textAlign = "center";		//设置文本的水平对其方式 用来是文本水平居中
	cxt.textBaseline = "middle";	//设置文本的基线对其方式 用来是文本垂直居中
	cxt.fillStyle = strokeColor;
	cxt.font = "20px 微软雅黑";
	cxt.fillText(Math.floor(data * 100) + "%",cvs[0].width/2,cvs[0].height/2);
}
function drawRing(cvs,data,strokeColor,backgroundColor){
	var cxt = cvs.getContext("2d");
	ring(cxt,data,strokeColor,backgroundColor);
}
var cvs = document.querySelectorAll("canvas");
var datas = [
	[0.49,"#029ed9","rgba(2,158,217,0.4)"],
	[0.8,"#81ff38","rgba(129,255,56,0.4)"],
	[0.65,"#fb9100","rgba(251,145,0,0.4)"],
	[0.53,"#1cddb1","rgba(28,221,177,0.4)"]
];

for (var i = 0; i < cvs.length; i++) {
	cvs[i].width = CANVAS_WIDTH;
	cvs[i].height = CANVAS_WIDTH;
}
drawRing(cvs[0],datas[0][0],datas[0][1],datas[0][2]);
drawRing(cvs[1],datas[1][0],datas[1][1],datas[1][2]);
drawRing(cvs[2],datas[2][0],datas[2][1],datas[2][2]);
drawRing(cvs[3],datas[3][0],datas[3][1],datas[3][2]);
var skills_arr = document.querySelectorAll("#Professional_skills>div:not(:first-child)");
function setSkills(){
	window.addEventListener("scroll",function(){
		if(getWindowHeight() + getScrollTop() > lunbo.scrollHeight + about_me.scrollHeight + am_more.scrollHeight + 300){
			for (var i = 0; i < skills_arr.length; i++) {
				skills_arr[i].style.opacity = "1";
			}
			skills_arr[0].style.animation = "skills 1s";
			skills_arr[1].style.animation = "skills 1s 0.4s";
			skills_arr[2].style.animation = "skills 1s 0.8s";
			skills_arr[3].style.animation = "skills 1s 1.2s";
		} else {
			for (var i = 0; i < skills_arr.length; i++) {
				skills_arr[i].style.opacity = "0";
			}
			skills_arr[0].style.animation = "none";
			skills_arr[1].style.animation = "none";
			skills_arr[2].style.animation = "none";
			skills_arr[3].style.animation = "none";
		}
	});
}
setSkills();
