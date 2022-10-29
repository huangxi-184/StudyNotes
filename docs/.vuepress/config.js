module.exports = {
  title: "学习笔记",
  description: "Just playing around",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: "首页", link: "/" },

      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: "黄曦笔记", //默认显示
        ariaLabel: "黄曦笔记", //用于识别的label
        items: [
          { text: "网络", link: "/pages/folder1/computerNetwork.md" },
          { text: "三剑客", link: "/pages/folder2/less.md" },
          { text: "微信小程序", link: "/pages/folder3/mini_process.md" },
          { text: "Markdown", link: "/pages/folder4/Markdown.md" },
          { text: "node", link: "/pages/folder5/fsMoudle.md" },
          { text: "TS", link: "/pages/folder6/TypeScript01.md" },
          //点击标签会跳转至link的markdown文件生成的页面
          { text: "Vue", link: "/pages/folder7/vue-element-admin01.md" },
          { text: "其他", link: "/pages/others/User.md" },
        ],
      },
      {
        text: "王文卓笔记", //默认显示
        ariaLabel: "王文卓笔记", //用于识别的label
        items: [{ text: "电气", link: "/pages/wangwenzhuo/note1.md" }],
      },
      {
        text: "邢鑫亮笔记", //默认显示
        ariaLabel: "邢鑫亮笔记", //用于识别的label
        items: [{ text: "机械", link: "/pages/liang/liang.md" }],
      },
      //格式三：跳转至外部网页，需http/https前缀
      { text: "Github", link: "https://github.com/huangxi-184" },
    ],

    sidebar: {
      "/pages/folder1/": [
        {
          title: "底层知识", // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ["computerNetwork.md", "computerNetwork"], //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
          ],
        },
      ],
      "/pages/folder2/": [
        {
          title: "三剑客", // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ["naming-conventions.md", "命名规范"],
            ["async_await.md", "async_await"],
            ["less.md", "less"],
            ["promise.md", "promise"],
            ["rem.md", "rem"],
          ],
        },
      ],
      "/pages/folder3/": [
        {
          title: "微信小程序", // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ["mini_process.md", "mini_process"],
            ["uni-app.md", "uni-app"],
          ],
        },
      ],
      "/pages/folder4/": [
        {
          title: "Markdown", // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [["Markdown.md", "Markdown"]],
        },
      ],
      "/pages/folder5/": [
        {
          title: "node", // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ["fsMoudle.md", "fs模块"],
            ["pathMoudle.md", "path模块"],
          ],
        },
      ],
      "/pages/folder6/": [
        {
          title: "TS", // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ["TypeScript02.md", "TypeScript 接口"],
            ["TypeScript01.md", "TypeScript第一节笔记"],
          ],
        },
      ],
      "/pages/folder7/": [
        {
          title: "Vue", // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ["vue-count-to.md", "vue-count-to"],
            ["vue-element-admin02.md", "vue-element-admin学习笔记第二节"],
            ["vue-element-admin01.md", "vue-element-admin学习笔记第一节"],
            ["vueWarning.md", "vue注意事项"],
          ],
        },
      ],
    },
  },
};
