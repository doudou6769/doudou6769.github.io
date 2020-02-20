function onApiLoaded(){

    //创建地图实例
    var map = new AMap.Map('container', {
        center: [114.3387630000,30.3489190000],             //设置地图中心点
        zoom: 15,                                   //设置地图缩放等级
        resizeEnable: true,                         
        mapStyle: 'amap://styles/light',          //设置地图样式
    });

    //创建点标记
    var marker = new AMap.Marker({
    position: new AMap.LngLat(114.3387630000,30.3489190000),
   	 title: '武汉工程科技学院'
	});

    //创建点标记标签
    marker.setLabel({
        //修改label相对于maker的位置
        offset: new AMap.Pixel(20, -20),
        content: "<div class='info'>我在这里</div>"
    });

    // 设置鼠标划过点标记显示的文字提示
    marker.setTitle('武汉工程科技学院');

    //设置工具条
    map.plugin(["AMap.ToolBar"], function() {
        map.addControl(new AMap.ToolBar());
    });
    map.add(marker);
}
var url = 'https://webapi.amap.com/maps?v=1.4.10&key=62220a35af1de5a4d0ff9167a1f91fef&callback=onApiLoaded';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);
