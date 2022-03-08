# image-mosaic-web

## 背景介绍

> 主要是为了解决前端对图片进行打马赛克，并生成相对应的文件（用于上传后台）和 base64 图片（用于前端显示）。其原理是：前端通过读取用户传入的图片地址，并把图片下载下来并使用 canvas 进行渲染，然后用户可以在 canvas 中，对图片进行任意位置的打马赛克工作，最终再把打马赛克后的图片进行输出。

## 项目参数

> 可配参数

|  名称  |               描述                | 是否必传 | 默认值 |
| :----: | :-------------------------------: | :------: | :----: |
|   el   |     传入一个 canvas 标签节点      |    是    |   -    |
|  url   |       canvas 渲染的图片地址       |    是    |   -    |
| width  | canvas 的宽度，不传为图片原始宽度 |    否    |   -    |
| height | canvas 的高度，不传为图片原始高度 |    否    |   -    |
|  quan  |           马赛克的大小            |    否    |   3    |
|  num   |     一次操作包含马赛克的个数      |    否    |   9    |

> 可调用方法

|    名称     |                         描述                          |
| :---------: | :---------------------------------------------------: |
|   init()    |   画布初始化，会检查 url 和 canvas 节点，并描绘画布   |
| onRevoked() |        每次打马赛克都会记录操作，用于撤销修改         |
|  onClear()  |                用于清空马赛克修改记录                 |
|  onSave()   | 用于导出打马赛克的目标图片，返回一个{ file, img }对象 |
| update(url) |   动态更新 url 地址，会重新自动调用一次 init()方法    |

## 使用方式

1. script 方式

```javascript

// 引入js文件
<script type="text/javascript" src="index.js"></script>

// 初始化并调用
<script type="text/javascript">
  const mo = new mosaic({
    el: "canvans节点",,
    url: "图片地址"
  });
  mo.init();
</script>

```

2. npm 包方式

```javascript

// 安装npm包
  npm i @jeremypc/image-mosaic-web

// 项目中引入包
  import ImageMosaicWeb from "@jeremypc/image-mosaic-web"

// 初始化并调用
  const mo = new ImageMosaicWeb({
    el: "canvans节点",
    url: "图片地址"
  });
  mo.init();

```
