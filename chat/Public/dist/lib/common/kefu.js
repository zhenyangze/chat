/**
 * Created by zhangyanpo on 2016/3/17.
 * 暂时没有使用
 */
//js初始化加载
(function(){
    var host_url = "http://127.0.0.1:3200";
    //加载初始化div
    var d_main_btn = document.createElement("div");
    d_main_btn.setAttribute("id", "kefu_main_btn");
    d_main_btn.innerHTML = "<a style=\"text-decoration: none; outline: none; font-family: Microsoft Yahei, Arial, Helvetica; color: #fff; font-size: 16px; display: inline-block; margin: 0; padding: 0; border: none; line-height:43px; float:none;cursor: pointer;\"><img style=\"vertical-align: middle; width: 31px; border:none; margin: -4px 10px 0 0; float: none; position: static; height: 27px;\" src=\""+host_url+"/Public/img/tb.png\"><span class=\"font-family: Microsoft Yahei, Arial, Helvetica; color: #fff; font-size:16px; margin: 0; padding: 0; \">在线客服<\/span></a>";
    document.body.appendChild(d_main_btn);

    d_main_btn.style.cssText = "position: fixed; z-index: 9999999999; box-sizing: content-box; height: 43px; bottom: 0px; padding: 0px 20px; border-radius: 4px 4px 0px 0px; right:80px; background-color:none;";
    //加载对话框div
    var d_main_box = document.createElement("div");
    d_main_box.setAttribute("id", "kefu_frame_box");
    d_main_box.style.cssText = "width: 320px; height: 480px; position: fixed; bottom: 0px; border-radius: 5px 5px 0px 0px;border:1px solid #E5E5E5; overflow: hidden; z-index: 9999999999; right: 80px;display:none;";
    //加载iframe
    var d_main_box_iframe = document.createElement("iframe");

    d_main_box_iframe.setAttribute("id","kefu_iframe");
    d_main_box_iframe.setAttribute("name","kefu_iframe");
    d_main_box_iframe.setAttribute("frameborder","no");
    d_main_box_iframe.setAttribute("scrolling","no");
    d_main_box_iframe.setAttribute("src", host_url+"/index.php?s=/Client/Index/index");

    d_main_box_iframe.style.cssText = "width: 100%; height: 100%; border: 0;";

    d_main_box.appendChild(d_main_box_iframe);
    document.body.appendChild(d_main_box);
    d_main_btn.onclick = function(){
        this.style.display = "none";
        d_main_box.style.display = "block";
    };

    //跨域调用
    var messenger = new Messenger('parent');
    var iframe = document.getElementById('kefu_iframe');
    messenger.addTarget(iframe.contentWindow, 'iframe');
    messenger.listen(function (msg) {
        var  $color = msg.split("|");
        if($color[0] == 'color'){
            d_main_btn.style.backgroundColor = $color[1];
        }else if(msg === 'ele_min'){
            d_main_box.style.display = "none";
            d_main_btn.style.display = "block";
        }
    });


})();

