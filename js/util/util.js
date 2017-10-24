//手机号码正则表达式 /^(13[0-9]|14[5-7]|15[0-9]|18[0-9])\d{8}$/;
var mobileTest = /^(13[0-9]|14[5-7]|15[0-9]|18[0-9]|17[0-9])\d{8}$/;
//联通手机号码正则表达式  /^(0{0,1}|86{0,1})(13[0-2]|145|15[56]|18[56]|17[06])[0-9]{8}$/
var lianTongTest = /^1(3[0-2]|4[5]|5[56]|7[0156]|8[56])\d{8}$/;
//移动手机号码正则表达式  /^(13[4|5|6|7|8|9]|147|15[0|1|2|7|8|9]|18[2|7|8])\d{8}$/
var yiDongTest = /^1(3[4-9]|4[7]|5[0-27-9]|7[08]|8[2-478])\d{8}$/;
//电信手机号码正则表达式  /^(133|153|180|189)\d{8}$/
var dianXinTest = /^1(3[3]|4[9]|53|7[037]|8[019])\d{8}$/;
//电子邮箱正则表达式
var emailTest = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
//用户名正则表达式
var userNameTest = /^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){2,19}$/;
//密码正则表达式
var pwdTest = /^[a-z0-9_-]{6,18}$/;
//判断字符是否为空
function JudgeNull(s){
    if(s === undefined || s === null || s === ""){
        return true;
    }else{
        return false;
    }
};
//ajax 请求
function AjaxRequest(ajaxtype,ajaxdata,ajaxasync,ajaxcache,ajaxurl,ajaxdataType,ajaxerror,ajaxsuccess){
	$.ajax({
        type:ajaxtype,    //使用GET还是POST方法
        data: ajaxdata,   //要传送给服务器端的参数，可以是纯文本，也可以是XML字符串
        async: ajaxasync,     //是否异步执行
        cache: ajaxcache,     //是否从缓存中读取数据
        url: ajaxurl, //服务端的url
        //contentType: "application/json; charset=utf-8",
        dataType:ajaxdataType,  //预期服务器返回的数据类型，可以是xml,html,text等
        timeout : 60000  ,   //超时设置 90秒
        error : ajaxerror,  //服务器端运行异常后，客户端后续处理的回调函数
        success:ajaxsuccess //服务器端运行成功后，客户端后续处理的回调函数
    });
};
function showTip(tip){
	//showTipBlock('tip','',tip);
	layer.open({type:0,content:tip,title:false,shadeClose:true,btn:['确定']});
};
function showHtml(html){
	layer.open({type:1,content:html,title:false});
};
function showHtmlTip(html,tipTitle,sClose){
	layer.open({type:1,content:html,title:tipTitle,shadeClose:JudgeNull(sClose)?false:sClose,btn:['确定']});
};
function showTipToUrl(tip,toUrl){
	//showTipBlock('tip','',tip,toUrl);
	layer.open({type:0,content:tip,title:false,shadeClose:true,btn:['确定'],end:function(elem){window.location.href=toUrl;}});
};
function showIconTipToUrl(icon,tip,toUrl){
	//showTipBlock(icon,'',tip,toUrl);
	layer.open({type:0,content:tip,title:false,shadeClose:true,btn:['确定'],end:function(elem){window.location.href=toUrl;}});
};
function loading(){
	layerLoadingIndex = layer.open({
		type:2,
		shadeClose:false
	});
};
var showRefreshWin = '';
	showRefreshWin += '<div class="refresh-block">';
	showRefreshWin += '<span class="refresh-block-close" onclick="layer.closeAll();"><img src="images/mall/windows_tip_close.png" width="20" /></span>';
	showRefreshWin += '<div class="refresh-block-msg">';
	showRefreshWin += '<span class="">#tip#</span>';
	showRefreshWin += '</div>';
	showRefreshWin += '<div class="refresh-block-btns">';
	showRefreshWin += '<a href="javascript:;" onclick="location.reload();" class="refresh-block-btn">刷新</a>';
	showRefreshWin += '</div>';
	showRefreshWin += '</div>';
function showRefreshTip(tip){
    var showTip = showRefreshWin;//$("#showRefreshBlock").html();
	if(!JudgeNull(tip)){
		showTip = showTip.replace("#tip#",tip);
	}else{
		showTip = showTip.replace("#tip#",'');		
	}
    layer.open({
      type: 1
      ,content: showTip
      //,anim: 'up'
      ,shadeClose:true
      ,style: 'width:75%;max-width:600px;min-width:280px; min-height:160px; border: none;border-radius:5px; -webkit-animation-duration: .5s; animation-duration: .5s;'
    });
}
var nxLoadingWin = '';
	nxLoadingWin += '<div class="la-ball-clip-rotate la-sm">';
	nxLoadingWin += '<span class="loading-img"><img src="images/mall/loading_logo.png" width="100%" /></span>';
	nxLoadingWin += '<div></div>';
	nxLoadingWin += '</div>';
function nxloading(){
	nxLoadingIndex = layer.open({
      type: 1
      ,content: nxLoadingWin
      //,anim: 'up'
      ,shadeClose:false
      ,style: 'background: none;box-shadow: none;-webkit-animation-duration: .5s; animation-duration: .5s;'
    });
};
function nxloadingClose(){
    layer.close(nxLoadingIndex);
}
//Date format
/**
 * 时间格式化 返回格式化的时间
 * @param date {object}  可选参数，要格式化的data对象，没有则为当前时间
 * @param fomat {string} 格式化字符串，例如：'YYYY年MM月DD日 hh时mm分ss秒 星期' 'YYYY/MM/DD week' (中文为星期，英文为week)
 * @return {string} 返回格式化的字符串
 * 
 * 例子:
 * formatDate(new Date("january 01,2012"));
 * formatDate(new Date());
 * formatDate('YYYY年MM月DD日 hh时mm分ss秒 星期 YYYY-MM-DD week');
 * formatDate(new Date("january 01,2012"),'YYYY年MM月DD日 hh时mm分ss秒 星期 YYYY/MM/DD week');
 * 
 * 格式：   
 *    YYYY：4位年,如1993
 *　　YY：2位年,如93
 *　　MM：月份
 *　　DD：日期
 *　　hh：小时
 *　　mm：分钟
 *　　ss：秒钟
 *　　星期：星期，返回如 星期二
 *　　周：返回如 周二
 *　　week：英文星期全称，返回如 Saturday
 *　　www：三位英文星期，返回如 Sat
 */
function formatDate(date, format) {
	if(null==date || date==""){
		return " ";
	}
    if (arguments.length < 2 && !date.getTime) {
        format = date;
        date = new Date(date.time);
    }
	if(typeof date == 'string'){
		var arr = date.split(/[- : \/]/),
		date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
	}
    typeof format != 'string' && (format = 'YYYY-MM-DD hh:mm:ss');
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', '日', '一', '二', '三', '四', '五', '六'];
    return format.replace(/YYYY|YY|MM|DD|hh|mm|ss|星期|周|www|week/g, function(a) {
        switch (a) {
        case "YYYY": return date.getFullYear();
        case "YY": return (date.getFullYear()+"").slice(2);
        case "MM": return timeAdd0(date.getMonth() + 1);
        case "DD": return timeAdd0(date.getDate());
        case "hh": return timeAdd0(date.getHours());
        case "mm": return timeAdd0(date.getMinutes());
        case "ss": return timeAdd0(date.getSeconds());
        case "星期": return "星期" + week[date.getDay() + 7];
        case "周": return "周" +  week[date.getDay() + 7];
        case "week": return week[date.getDay()];
        case "www": return week[date.getDay()].slice(0,3);
        }
    });
};
function timeAdd0(m){return m<10?'0'+m:m }
//获取url参数
function getUrlParam(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r!=null) return unescape(r[2]); return null; //返回参数值
};

if (!Array.prototype.indexOf){
  Array.prototype.indexOf = function(elt /*, from*/){
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;
    for (; from < len; from++){
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
};
if(typeof TreeWords == "undefined"){
	var TreeWords = {
		'fu2':'福',
		'jian':'建',
		'nong':'农',
		'xin':'信',
		'yun':'云',
		'shan':'闪',
		'fu4':'付',
		'zhen':'真',
		'hao':'好',
		'yong':'用'
	}
}
if(typeof TreePrizes == "undefined"){
	var TreePrizes = {
		'four':3,
		'three':5,
		'two':7,
		'one':9,
		'spec':10
	}
}