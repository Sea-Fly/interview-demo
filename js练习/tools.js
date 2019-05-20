function move(obj,attr,target,speed,callback){
    //获取速度的正负值
    /*  如果从0向800移动，则speed为正
        如果从800向0移动，则speed为负
    * */
    var current=parseInt(getStyle(obj,attr));
    if(current > target){
        speed=-speed;
    }
    //关闭上一个计时器
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        //获取box1的原来的left值
        var oldValue=parseInt(getStyle(obj,attr));

        //在旧值的基础上增加
        var newValue = oldValue + speed;

        //判断newValue是否大于800
        if(newValue > target && speed>0 ||  newValue < target && speed < 0){
            newValue = target;
        }
        //将新值设置给box
        obj.style[attr] = newValue + "px";

        //当元素移动到target时，使其停止执行动画。
        if(newValue ==target){
            //达到目标，关闭定时器
            clearInterval(obj.timer);
            //函数执行完毕，调用回调函数
            callback && callback();
        }
    },30);
}
//获取样式封装的函数
function getStyle(obj,name) {
    if(window.getComputedStyle){
        //正常浏览器可以用
        return getComputedStyle(obj,null)[name];
    }
    else{
        //IE8的方式
        return obj.currentStyle[name];
    }
}

//定义一个函数，用来向一个元素中添加指定的class属性值
/*
*   参数：
*       obj 要添加的class属性的元素
*       cn  要添加的class值
* */
function addClass(obj,cn){
    //检查是否含有cn
    if(!hasClass(obj,cn)){
        obj.className+=" "+cn;
    }
}
/*
* 判断一个元素是否含有指定的class属性值
* */
function hasClass(obj,cn){

    //判断obj中有没有cn class
    //创建一个正则表达式
    // var reg=/\b\b/;  \b是单词边界
    var reg=new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}
/*删除一个元素中的指定的class属性
* */
function removeClass(obj,cn){
    //创建一个正则表达式
    var reg=new RegExp("\\b"+cn+"\\b");
    //删除class
    obj.className=obj.className.replace(reg,"");
}
/*
* toggleClass可以用来切换一个类
*   如果元素中具有该类，则删除。
*   如果元素中没有该类，则添加。
* */
function toggleClass(obj,cn){
    //判断obj中是否含有cn
    if(hasClass(obj,cn)){
        //有，删除
        removeClass(obj,cn);
    }else{
        //没有，则添加
        addClass(obj,cn);
    }
}