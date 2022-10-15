fs 模块
引入 fs模块 使用的是CommonJS 规范
`const fs = require('fs')`

读文件写法
```js
fs.readFile('test.txt', 'utf-8', (err, dataStr) => {
    if (err) {
        return console.log('打印失败', err.message)
    }
    console.log('打印成功', dataStr)
})
```

有三个参数 第一个是文件路径 第二个是编码格式(可选) 第三个是回调函数 注意是异步的 可能会乱

写文件方法
```js
fs.writeFile('score.txt', newStr, 'utf-8', (err) => {
        if (err) {
            return console.log('写入失败', err.message)
        }
        console.log('写入成功')
    })
```
有四个参数 第一个是文件路径 第二个是写入的字符串 第三个是编码格式(可选) 第四个是回调函数 注意是异步的 可能会乱
写方法默认是 直接清空该文件 再写的
如果没有文件 但路径正确会自动创建该文件
__dirname 表示当前路径 
如果使用绝对路径，对于`\` 需要进行转义 `\\`