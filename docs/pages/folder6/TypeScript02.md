## 接口interface
通过接口的方式来规范你的代码或第三方代码

```ts
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

接口跟类型的使用方式很接近. 直接在需要的函数或者对象上 : 即可以实现接口. 它是不会考虑内部属性实现的顺序的
但是TS值检查值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的. 

接口里的属性不全都是必需的,添加那些不是必须的属性
定义方法:在可选属性名字定义的后面加一个 ? 符号 在 : 号之前
如:
```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
```
#### 只读属性
添加只读的属性 在属性前面添加readonly 字段保证只读.
`只能够在初始化的时候,给予赋值,后面无法修改`
```ts
interface Point {
  readonly x: number;
  readonly y: number;
}
```
`只读数组类型ReadonlyArray<T>,内部把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改`
而且把整个 ReadonlyArray 赋值到一个普通数组也是不可以的
只能通过断言的方式来转化 如: `其中ro 为ReadonlyArray<number>类型`
`a = ro as number[];`
### 添加其他的属性 通过添加 字符串索引签名
可以添加任意的键值对数据
```ts
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

## 函数的接口
只有参数列表和返回值类型 相对于其他语言中定义申明 不够简洁
```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```
`int sum(int a,int b);`

函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
需要保证参数类型和返回值的类型相同即可 
```ts
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};
```
且可以近一步简化 接口中申明了类型 不需要再写类型
``` ts
mySearch = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
};
```
添加了索引值后,不可以有可它不同属性?
```ts
interface NumberDictionary {
  [index: string]: number;
  length: number; // 可以，length是number类型
  name: string; // 错误，`name`的类型与索引类型返回值的类型不匹配
}
```


### 类的接口
意义:强制一个类去符合某种契约
```ts
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
}
```

**类分为静态部分的类型和实例的类型**
constructor 存在于类的静态部分，所以不在检查的范围内。 只会检查对其实例部分进行类型检查
