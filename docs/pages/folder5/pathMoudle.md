引入 path模块 使用的是CommonJS 规范
`const path = require('path')`

path.join() 拼接路径字符串
拼接时 ../ 会抵消一层路径 

`path.join('__dirname','./files/test.txt')`