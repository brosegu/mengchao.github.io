/**
 * Created by Administrator on 2017/4/26.
 */
var WS = function () {
	var _ws = null, wsUrl = "//192.168.1.123:8014/websocketTest", rep = null,
	log=function(text){
		console.log(text);
	};
	return {
		init: function (url) {
			if("WebSocket" in window){
				_ws = new WebSocket("ws://" + ( url || wsUrl));
				_ws.onopen = function () {
					_ws.send("妹的！");
					log("WebSocket for orderNum connected!!");
				}
				_ws.onmessage=function(message){
					$("#order_num").text(message.data);
				}
				_ws.onerror=function(error){
					log(error);
				}
				$(window).on("unload",function(){
					log("WebSocket closed!!");
					_ws.close();
				});
			}else{
				var updateOrderNumByAjax=function(){
					$.ajax({
						url: url,
						dataType: "json",
						async: false
					}).done(function (rep) {
						$("#order_num").text(rep.data);
					});
				};
				setInterval(updateOrderNumByAjax,30000);
			}
		}
	}
}();