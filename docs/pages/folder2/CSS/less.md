# css预处理器-LESS

**定义:LESS是一种动态样式表语言，扩展了CSS的功能.是一门脚本语言,可拓展的css和将其编译成常规的css,提供诸如变量 函数 mixins 操作等**
优点: 
1. Less保持你的代码以模块化的方式,可以嵌套编写样式
2. 通过在规则集中引用Less来轻松地重用整个类
3. LESS提供使用操作，使得编码更快并节省时间

## 一:变量
1. 值变量
  定义好变量 `@color: #999;`  注: 后面的值不需要加引号
  引用方法: `background-color: @bg-color;` 属性值后接变量 @不能丢
  注意点:这样在工作中，就可以把 常用的变量 封装到一个文件中，这样利于代码组织维护。
  如:
  ``` LESS
    @lightPrimaryColor: #c5cae9;
    @textPrimaryColor: #fff;
    @accentColor: rgb(99, 137, 185);
  ```

2. 选择器变量
   定义选择器变量`@mySelector: #wrap;` 或者 `@yyds: wrap;`  可以只定义选择器的名字,也可以带上# . 等类和ID选择方法
   使用的方式或有不同. 只定义选择器名字的 `#@{yyds}{css内容}`  带上选择方法的 `@{mySelector}{css内容}`
   注意点:变量名引用时一定要用{}扩起来 不然不可以

3. 属性变量 
``` Less
    @a: border-style;
    @b:solid;
    #wrap{
    @{a}: @b;//变量名 必须使用大括号包裹
    }

    /* 生成的 CSS */
    #wrap{
    border-style:solid;
    }
    可以较为有效的较少代码量 可以一次指定 后面用字母量少的代替多的 感觉不实用 都是复制,还不利于代码阅读
```
4. url 变量
``` less
    @images: "../img";//需要加引号  此时是定义 

    //这里是使用 同样
    body {
    background: url("@{images}/dog.png");//变量名 必须使用大括号包裹
    }
    /* 生成的 CSS */
    body {
    background: url("../img/dog.png");
    }
    大量引用同一个路径下的文件时可用.
```
5. 声明变量 类似于定义了个函数,然后调用
``` Less 
@Rules:{
    width: 200px;
    height: 200px;
    border: solid 1px red;
};// 这里是申明 申明了一个@Rules的函数,后面如果需要使用就直接调用 但是如果没有参数 作用有限呀

//调用: @Rules() 即可
#con{
  @Rules();
}
```
6. 变量运算
1.注意点: 加减法时:以第一个数据的单位为基准.
          乘除法时:注意单位一定要统一
``` Less
@width:300px;
@color:#222;
#wrap{
  width:@width-20;
  height:@width-20*5;
  margin:(@width-20)*5;
  color:@color*2;
  background-color:@color + #111;
}
// 下面是编译后的效果  话说对颜色进行乘法 真的能控制了颜色嘞
#wrap{
  width:280px;
  height:200px;
  margin:1400px;
  color:#444;
  background-color:#333;
}
```

7. 变量作用域 
注意作用域为就近原则
```less
@var: @a;
@a: 100%;
#wrap {
  width: @var; // 在同一层中找 尽量以同层的解释为准
  @a: 9%;
}

/* 生成的 CSS */
#wrap {
  width: 9%;
}
```
## 二: 嵌套
1. &
   代表上一层选择器的名字 & 就是直接替换成上一层的名字
``` less
    #header{
       &:after{
         content:"Less is more!";
    }
      .title{
         font-weight:bold;  //只有在选择器里面再加一层选择器的才是嵌套
           }
      &_content{//理解方式：直接把 & 替换成 #header
        margin:20px;
               }
    } 

    /* 生成的 CSS */
    #header::after{
    content:"Less is more!";
    }
    #header .title{ //嵌套了
    font-weight:bold;
    }
    #header_content{//没有嵌套！
        margin:20px;
    }
```
2. 媒体查询(不同媒体类型定义不同样式规则,如电脑屏幕是一种规则,手机平板 打印设备又是其他的规则)
``` less
#main{
    //something...

    @media screen{
        @media (max-width:768px){
          width:100px;
        }
    }
    @media tv {
      width:2000px;
    }
}
/* 生成的 CSS */
@media screen and (maxwidth:768px){
  #main{
      width:100px; 
  }
}
@media tv{
  #main{
    width:2000px;
  }
}

```
3. 实战技巧 /* Less */
借助 Less 在元素中，去定义自己的私有样式。
``` less
#main{
  // something..
  &.show{
    display:block;
  }
}
.show{
  display:none;
}
```
``` js
const main = document.getElementById("main");
main.classList.add("show");
```
```CSS
#main.show{
  display:block;
}
.show{
  display:none; //会被覆盖。
}
```
感觉给的数据不全 谁id = main 都不清楚

## 三.混合方法
1. 无参数的方法
   直接将定义方法 直接差入到需要使用的选择器即可
   方法前还可以添加选择 . 或者 #
2. 默认参数方法
   Less 可以使用默认参数，如果 没有传参数，那么将使用默认参数
``` Less
.border(@a:10px,@b:50px,@c:30px,@color:#000){
    border:solid 1px @color;
    box-shadow: @arguments;//指代的是 全部参数
}
#main{
    .border(0px,5px,30px,red);//使用时,给定义的函数带值 必须带着单位
}

```
3. 方法的匹配模式
``` Less
.triangle(top,@width:20px,@color:#000){
    border-color:transparent  transparent @color transparent ;
}
.triangle(right,@width:20px,@color:#000){
    border-color:transparent @color transparent  transparent ;
}

.triangle(bottom,@width:20px,@color:#000){
    border-color:@color transparent  transparent  transparent ;
}
.triangle(left,@width:20px,@color:#000){
    border-color:transparent  transparent  transparent @color;
}
.triangle(@_,@width:20px,@color:#000){
    border-style: solid;
    border-width: @width;
}// 定义


// 使用
#main{
    .triangle(left, 50px, #999)
}


/* 生成的 CSS */ 它会优先匹配确定的参数 找到left对应的数据. 如果匹配程度相同，将全部选择，并存在着样式覆盖替换。 
若是匹配中存在变量 那可以匹配所有的该位置的参数
#main{
  border-color:transparent  transparent  transparent #999;
  border-style: solid;
  border-width: 50px;
}
```
4. 方法的命名空间
   