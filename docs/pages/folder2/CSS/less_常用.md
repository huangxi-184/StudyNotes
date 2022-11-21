## less 预处理器

> Less 的文件后缀是.less,使 css 具备一定的逻辑能力,计算能力.浏览器不能识别 less 代码,需要引入.

vscode 插件推荐: EasyLess 插件

单行: // 单行注释不会被编译到 css 文件中了.
块注释: /\* \*/

### 特性一:使用 LESS 运算

加减乘 直接书写计算表达式
除法 需要添加小括号(推荐).或者在除号前添加一个`.`,即可.

`width:100 * 2px`
`width:(68/37.5 rem)`

### 特性二:使用嵌套的方式生成后代选择器(快速生成后代选择器)

```css
.father {
  width: 300px 
  .son {
    height: 999px;
    &:hover {
      color: green;
    }
  }
}
```

& 表示选择的是自己.(在谁的括号里就表示就是谁)
上面的表示: .father .son:hover

### less变量 (方便变更)

定义: @变量名:值  `@box-size:`
使用值: css属性: @变量名
```less
    @bg-color:pink;

    .box{
        color:@color;
    }
```


### less 导入
`@import 'base.less'`;(相对路径)
若是less,文件可以省略.less;
`@import 'base'`;


### less 导出
在文件的第一行添加
`// out: ./qqq/`
表示导出到那个位置的qqq文件夹内,

`// out: ./abc/xiaoming.css`
表示导出到文件夹内,且名字为xiaoming.css

禁止导出:
`// out: false`
