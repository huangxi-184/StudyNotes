## vue 实现文件的渲染,都是直接使用`<a>`标签来实现

> target="-blank" 是打开使用另外一个网页打开 href="" 中间给上文件的链接

`<a target="_blank" href="/东富龙科学技术协会.pdf">相关论文</a>`

生产环境本地的需要加上/dist 目录来处理
在线环境直接上网址即可

如果不是在线预览的格式就会直接下载.
比如 execl 或者 word

## 使用微软的在线服务来处理 word excel ppt 等文件的在线浏览 无需下载 office 即可以使用

> 此时的资源必须要求是可以开放的 公网可以直接访问的

`http://view.officeapps.live.com/op/view.aspx?src=newteach.pbworks.com%2Ff%2Fele%2Bnewsletter.docx`

若不能访问就会无效.
