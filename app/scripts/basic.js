/**
 * Created by hurui on 2017/7/20.
 */
var count = 1;
setTimeout(changeBackImg(), 5000);
var isOutNav = true;

var divObj = document.getElementsByClassName("main_type_detail")[0];

var imgar = [];
for(i=1;i<8;i++){
  imgar[i] = new Image();
  imgar[i].src = "../app/images/backBg"+i+".png";
  imgar[i].onload=function(){
    this.width = 960;
    this.height =380;
  }
}

function changeBackImg() {
  setInterval(function () {
    var backGroundImg = document.getElementsByClassName("main_type")[0];
    count++;
    if(count == 1){
      backGroundImg.style.backgroundImage = "url(../app/images/banner1.jpg)";
    }else if (count == 2){
      backGroundImg.style.backgroundImage = "url(../app/images/banner2.jpg)";
    }else if (count == 3){
      backGroundImg.style.backgroundImage = "url(../app/images/banner3.jpg)";
    }else if (count == 4){
      backGroundImg.style.backgroundImage = "url(../app/images/banner4.jpg)";
    }else if (count == 5){
      backGroundImg.style.backgroundImage = "url(../app/images/banner5.jpg)";
      count = 0;
    }
  }, 8000);
}

function setFocus() {
  var placeholderObj = document.getElementsByClassName("moniplaceholder")[0];
  var inputObj = document.getElementById("searchtext");
  placeholderObj.style.display = "none";
  inputObj.focus();

}

function goToXiaobai() {
  var placeholderObj = document.getElementsByClassName("moniplaceholder")[0];
  var inputObj = document.getElementById("searchtext");
  placeholderObj.style.display = "none";
  inputObj.focus();
  alert("开始前端学习");
}

function goToJava() {
  var placeholderObj = document.getElementsByClassName("moniplaceholder")[0];
  var inputObj = document.getElementById("searchtext");
  placeholderObj.style.display = "none";
  inputObj.focus();
  alert("开始Java学习");
}

function displayPlaceholder() {
  var placeholderObj = document.getElementsByClassName("moniplaceholder")[0];
  placeholderObj.style.display = "block";
}

function displayClassDetail(obj) {
  isOutNav = false;
  var aObj = obj.getElementsByTagName("a")[0];
  var value = aObj.innerHTML;
  var detail = document.getElementsByClassName("main_type_detail")[0];
  setDetailStyle(detail);
  if(value == "前端开发"){
    detail.style.backgroundImage = "url("+imgar[1].src+")";
  }else if(value == "后端开发"){
    detail.style.backgroundImage = "url("+imgar[2].src+")";
  }else if(value == "移动开发"){
    detail.style.backgroundImage = "url("+imgar[3].src+")";
  }else if(value == "数据库"){
    detail.style.backgroundImage = "url("+imgar[4].src+")";
  }else if(value.indexOf("云计算")!=-1){
    detail.style.backgroundImage = "url("+imgar[5].src+")";
  }else if(value.indexOf("运维")!=-1){
    detail.style.backgroundImage = "url("+imgar[6].src+")";
  }else {
    detail.style.backgroundImage = "url("+imgar[7].src+")";
  }
  setDetailContent(value);
}

function setDetailContent(value) {
  var fenlei = document.getElementsByClassName("fenlei_detail")[0];
  var tuijian = document.getElementsByClassName("tuijian_detail")[0];
  if(value == "前端开发"){
    fenlei.innerHTML = "基础：<a href='#'>HTML/CSS</a> / <a href='#'>JavaScript</a> / <a href='#'>JQuery</a><p style='height: 10px'></p>" +
      "进阶：<a href='#'>Html5</a> / <a href='#'>CSS3</a>/ <a href='#'>Node.js</a> / <a href='#'>AngularJS</a> / <a href='#'>Bootstrap</a> / <a href='#'>React</a> / <a href='#'>Vue.js</a><p style='height: 10px'></p>" +
      "其他：<a href='#'>前端工具</a>";
    tuijian.innerHTML = "<a href='#'>职业路径</a>" +
      "<a href='#'>前端小白入门手册</a><p style='height: 15px'></p>"+
      "<a href='#'>职业路径</a>" +
      "<a href='#'>HTML5与CSS3实现动态网页</a><p style='height: 15px'></p>" +
      "<a href='#'>实战</a>" +
      "<a href='#'>Vue+Node+MongoDB高级全栈开发</a><p style='height: 15px'></p>"+
      "<a href='#'>实战</a>" +
      "<a href='#'>Spring Boot微信点餐系统</a>";
  }else if(value == "后端开发"){
    fenlei.innerHTML = "<a href='#'>PHP</a> / <a href='#'>Java</a> / <a href='#'>Python</a> / <a href='#'>C</a> / <a href='#'>C++</a> / <a href='#'>Go</a> / <a href='#'>C#</a> / <a href='#'>Ruby</a> /";
    tuijian.innerHTML = "<a href='#'>职业路径</a>" +
      "<a href='#'>PHP从基础语法到原生项目开发</a><p style='height: 15px'></p>"+
      "<a href='#'>职业路径</a>" +
      "<a href='#'>Java基础语法与常用工具类</a><p style='height: 15px'></p>" +
      "<a href='#'>实战</a>" +
      "<a href='#'>高性能 高价值的PHP API接口开发</a><p style='height: 15px'></p>"+
      "<a href='#'>实战</a>" +
      "<a href='#'>基于Selenium的Web自动化测试</a>";
  }else if(value == "移动开发"){
    fenlei.innerHTML = "<a href='#'>Android</a> / <a href='#'>iOS</a> / <a href='#'>Unity 3D</a> / <a href='#'>Cocos2d-x</a> /";
    tuijian.innerHTML = "<a href='#'>职业路径</a>" +
      "<a href='#'>Android网络与数据存储</a><p style='height: 15px'></p>"+
      "<a href='#'>职业路径</a>" +
      "<a href='#'>iOS界面优化与数据存储</a><p style='height: 15px'></p>" +
      "<a href='#'>实战</a>" +
      "<a href='#'>Android通用框架设计与完整电商APP开发</a><p style='height: 15px'></p>"+
      "<a href='#'>实战</a>" +
      "<a href='#'>Kotlin系统入门与进阶</a><p style='height: 15px'></p>"+
      "<a href='#'>课程</a>" +
      "<a href='#' >Andriod中的马大姐与周大嘴ContentProvider与BroadcastReceiver</a>";
  }else if(value == "数据库"){
    fenlei.innerHTML = "<a href='#'>MySQL</a> / <a href='#'>MongoDB</a> / <a href='#'>Oracle</a> / <a href='#'>SQL Server</a> /";
    tuijian.innerHTML = "<a href='#'>实战</a>" +
      "<a href='#'>Spring Boot微信点餐系统</a><p style='height: 15px'></p>"+
      "<a href='#'>实战</a>" +
      "<a href='#'>python操作三大主流数据库 项目实战</a><p style='height: 15px'></p>"+
      "<a href='#'>课程</a>" +
      "<a href='#'>与MySQL的零距离接触</a><p style='height: 15px'></p>"+
      "<a href='#'>课程</a>" +
      "<a href='#'>MongoDB读写分离的适用性</a><p style='height: 15px'></p>";
  }else if(value.indexOf("云计算")!=-1){
    fenlei.innerHTML = "<a href='#'>大数据</a> / <a href='#'>云计算</a> /";
    tuijian.innerHTML = "<a href='#'>实战</a>" +
      "<a href='#'>大数据Spark SQL慕课网日志分析</a><p style='height: 15px'></p>"+
      "<a href='#'>课程</a>" +
      "<a href='#'>云安全的架构设计与实践之旅</a><p style='height: 15px'></p>"+
      "<a href='#'>课程</a>" +
      "<a href='#'>Hadoop大数据平台架构与实践--基础篇</a><p style='height: 15px'></p>"+
      "<a href='#'>课程</a>" +
      "<a href='#'>走进大数据之storm流式计算基础</a><p style='height: 15px'></p>";
  }else if(value.indexOf("运维")!=-1){
    fenlei.innerHTML = "<a href='#'>测试</a> / <a href='#'>Linux</a> /";
    tuijian.innerHTML = "<a href='#'>实战</a>" +
      "<a href='#' >Nginx从入门到实践</a><p style='height: 15px'></p>"+
      "<a href='#'>实战</a>" +
      "<a href='#'>基于Selenium的Web自动化测试</a><p style='height: 15px'></p>"+
      "<a href='#'>课程</a>" +
      "<a href='#'>shell编程之变量</a><p style='height: 15px'></p>"+
      "<a href='#'>课程</a>" +
      "<a href='#'>美女带你走入LR性能测试框架基础</a><p style='height: 15px'></p>";
  }else {
    fenlei.innerHTML = "<a href='#'>动画动效</a> / <a href='#'>APPUI设计</a> / <a href='#'>设计工具</a> / <a href='#'>设计基础</a> /";
    tuijian.innerHTML = "<a href='#'>课程</a>" +
      "<a href='#'>Maya3D建模攻略——葵花宝典</a><p style='height: 15px'></p>"+
      "<a href='#'>课程</a>" +
      "<a href='#'>跟我学做变形金刚CG短片</a><p style='height: 15px'></p>"+
      "<a href='#'>课程</a>" +
      "<a href='#'>PS入门教程——新手过招</a>";
  }
  var spans = divObj.getElementsByTagName("a");
  var isNeedRed = false;
  for(var i=0; i<spans.length; i++){
    var spanItem = spans[i];
    spanItem.style.textDecoration = "none";
    if(spanItem.innerHTML == "职业路径"){
      isNeedRed = true;
      spanItem.style.color = "red";
      spanItem.style.background = "#ffe5d7";
      spanItem.style.fontSize = "0.9em";
      spanItem.style.padding = "5px 10px";
    }else if(spanItem.innerHTML == "课程" || spanItem.innerHTML == "实战"){
      spanItem.style.color = "black";
      spanItem.style.background = "#e2e2e2";
      spanItem.style.fontSize = "0.9em";
      spanItem.style.padding = "5px 10px";
    }else {
      if(i!=0){
        spanItem.style.marginLeft = "10px";
      }
      if(isNeedRed){
        isNeedRed = false;
        spanItem.style.color = "red";
      }else {
        spanItem.style.color = "black";
      }
    }
  }
}

function setDetailStyle(detail) {
  if(!isOutNav){
    detail.style.width = "50%";
    detail.style.height = "435px";
    detail.style.left = "224px";
    detail.style.position = "absolute";
    detail.style.display = "block";
    detail.style.opacity = 1;
  }
}

function clearDetail() {
  isOutNav = true;
  var detail = document.getElementsByClassName("main_type_detail")[0];
  detail.style.display = "none";
}

function onDetailLayout() {
  isOutNav = false;
  var detail = document.getElementsByClassName("main_type_detail")[0];
  detail.style.display = "block";
}
