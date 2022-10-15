## typescript基础类型
分别为:都是小写的
常用写法:`let isDone: boolean = false;`
    1. boolean 
    2. number
    3. string 支持模板字符型``,可以在中间使用${}来进行拼接
数组对象类型:
数组类型: 在类型后添加[],表示某个数据类型的数组
表示方法一:`let list: number[] = [1, 2, 3];`
表示方法二:`let list:Array<number> = [1,2,3]` 使用泛式的形式来申明数据类型

元组类型: 是开始确定长度的数组,不必要求数据类型相同
`let x: [string, number];` 此处申明完了 数据的长度和类型就确定了,初始化必须按照位置去初始化
若访问越界的元素会报错,保证越界不会报错
枚举: 默认从0开始编号 后面不指定就在前面的值上加1 若指定了按指定的值计算
```ts
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green
```
unknwon与any 类型: 任意值,但是any 可以跳过所有的检查 unknwon 只能跳过自己的检查 赋值对象还是要检查的

null与undefined 类型
是所有数据的子类型,可以将他们赋给任意类型的子类型
开启严格模式后,就只能null 和 undefined 只能赋值给 any 和它们各自的类型 不能再赋给其他的值(例外undefined 还可以赋值给 void 类型)

类型断言:
```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
即 通过as的值来指定某个范围大的类型指定为单一类型的变量




