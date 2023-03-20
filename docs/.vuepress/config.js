module.exports = {
  title: "学习笔记",
  description: "Just playing around",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [

      { text: "首页", link: "/" },

      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: "黄曦笔记", //默认显示
        ariaLabel: "黄曦笔记", //用于识别的label
        items: [
          { text: "git常用命令", link: "/pages/tofflon/git.md" },
        ],
      },
      //格式三：跳转至外部网页，需http/https前缀
      { text: "Github", link: "https://github.com/huangxi-184" },
    ],

    sidebar: {
      "/pages/tofflon/": [
        {
          title: "git常用命令", // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ["git.md"], //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
          ],
        },
      ],
      // "/pages/folder2/": [
      //   {
      //     title: "三剑客", // 一级菜单名称
      //     collapsable: false, // false为默认展开菜单, 默认值true是折叠,
      //     sidebarDepth: 2, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
      //     children: [
      //       {
      //         title: "CSS", // 一级菜单名称
      //         collapsable: false, // false为默认展开菜单, 默认值true是折叠,
      //         sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
      //         children: [
      //           ["less_常用.md", "less_常用"],
      //           ["less.md", "less"],
      //           ["rem.md", "rem"],
      //         ]
      //       },
      //       {
      //         title: "JavaScript", // 一级菜单名称
      //         collapsable: false, // false为默认展开菜单, 默认值true是折叠,
      //         sidebarDepth: 1, //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
      //         children: [
      //           ["naming-bugfix.md", "bugfix"],
      //           ["async_await.md", "async_await"],
      //           ["javaScript_01.md", "javaScript_01"],
      //           ["jQuery_01.md", "jQuery_01"],
      //           ["promise.md", "promise"],

      //         ]
      //       }
      //     ],
      //   },
      // ]
    },
  },
};
