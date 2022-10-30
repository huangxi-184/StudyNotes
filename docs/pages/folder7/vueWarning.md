1. 在 Vue 模板中不要使用 this,它的指向和在方法中使用的不一样的
2. 在模板渲染时,使用 iframe 进行渲染 Html 使用方法如下
   `<iframe class='web-con' :srcdoc="str1" scrolling="auto" :height="height" id="testFrame"></iframe> `
   > 是通过 srcdoc 将字符串进行渲染,可以保证样式的不被覆盖
   > 但是会有滚动条,需要设置好高度.
3. 高度设置方法如下

   ```js
   onMounted(() => {
     //使用JavaScript监听iframe元素的load事件，然后根据iframe中document的高度来动态调整iframe窗口的高度。
     var testFrame = document.getElementById("testFrame");
     // 操作DOM获取iframe 来获取属性
     testFrame.addEventListener("load", function () {
       testFrame.height = getHeight(testFrame.contentDocument);
     });
     // 监听

     function getHeight(doc) {
       var body = doc.body,
         html = doc.documentElement;

       var height = Math.max(
         body.scrollHeight,
         body.offsetHeight,
         html.clientHeight,
         html.scrollHeight,
         html.offsetHeight
       );
       return height;
     }
   });
   ```
