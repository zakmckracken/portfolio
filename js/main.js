/* Author:
Juliane Doehler
04.10.2012
*/

var height = $(document).height() - 90;
var content_height = $(document).height() - 122;
$("#main").css("min-height", height);
$("#content").css("min-height", content_height);
$("#content_text").css("min-height", content_height);

$("#portfolio").mouseover(function(){
	$("#subnavi").css({"display":"block"});
	$("#portfolio_link").css({"color":"#999"});
});

$(".without_subnavi").mouseover(function(){
	$("#subnavi").css({"display":"none"});
	$("#portfolio_link").css({"color":"#000"});
});

