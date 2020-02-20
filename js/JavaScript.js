/*通用js文件*/

//获取浏览器滚动条到顶部的距离
function getScrollTop() {  
    var scrollPos;  
    if (window.pageYOffset) {  
    	scrollPos = window.pageYOffset; 
    } else if (document.compatMode && document.compatMode != 'BackCompat') { 
    	scrollPos = document.documentElement.scrollTop; 
    } else if (document.body) { 
    	scrollPos = document.body.scrollTop; 
    }
    return scrollPos;   
}
//文档的总高度
function getScrollHeight(){
	var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
	if(document.body){
		bodyScrollHeight = document.body.scrollHeight;
	}
	if(document.documentElement){
	　　documentScrollHeight = document.documentElement.scrollHeight;
	}
	scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
	return scrollHeight;
}
//浏览器视口的高度
function getWindowHeight(){
	var windowHeight = 0;
	if(document.compatMode == "CSS1Compat"){
	　　windowHeight = document.documentElement.clientHeight;
	}else{
	　　windowHeight = document.body.clientHeight;
	}
	return windowHeight;
}

//头像登录按钮弹出层
function login(){
	var login = document.querySelector("#login");
	login.onclick = function(){
		layer.open({
			title:'LOGIN',
  			type: 2,
  			content: '../login/index.html',
  			area:['500px','530px'],
  			closeBtn:1,
  			shade:0.2,
  			shadeClose:true,
  			anim:1
		});
	}
}
login();
var img_length = $("#lunbo img").length;
for(var i = 1; i < img_length; i++){
	$("img:eq("+i+")").css("display","none");
}
var index = 0;
function autoPlay(){
	setInterval(function(){
		index++;
		if(index > 4) {
			index = 0;
		}
		selectImg(index);
	},3000);
}
function selectImg(index){
	var curImg = $("img").eq(index);
	curImg.fadeIn(1000);
	curImg.siblings().fadeOut(800);
}
//设置淡入淡出轮播图效果
autoPlay();

//设置底部滚动条效果变化
function setFootScroll(){
	var foot = document.querySelector(".foot");
	window.addEventListener("scroll",function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		var reat = scrollTop / (getScrollHeight() - getWindowHeight()) ;
		foot.style.left = (1 - reat) * 50 + "%";
		foot.style.width = reat * 100 + "%";
	});
}
setFootScroll();
//设置返回顶部样式
var retTop = document.querySelector(".return-top");

document.onscroll = function(){
	if(getScrollTop() != 0){
		retTop.style.opacity = "1";
	}
	else
		retTop.style.opacity = "0";
	}
   	retTop.onclick=function(){
    	timer=setInterval(function(){
       	//获取当前滚动条的位置
	    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	    //通过除法计算每次运动的步长 实现缓停效果
	    //负号（-）是为了让滚动条向上滚动
	    var step=Math.floor(-scrollTop/6);
	    //如果当前滚动条的位置为0，清除定时器停止向上滚动
	    if(scrollTop==0){
	        clearInterval(timer);
	    }
	    //让滚动条向上运动ispeed距离
	    document.documentElement.scrollTop=document.body.scrollTop=scrollTop+step;
    },30);
};
