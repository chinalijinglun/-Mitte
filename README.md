# mitte


## 项目配置

1、新增了`api`、`store`、`utils`目录

`	api/`存放所有请求或者存store的api

`store/`存放各个action等

`utils/`存放各种改写封装，自定义的通用方法

2、`utils`下工具，可以在index.js里面安装后使用，如需暴露给外层使用，把方法也暴露出来，入只需使用安装后，则不用暴露。

3、各个filter不要写在页面中，可以统一写在`utils/index.js`文件内，或者统一一个文件安装。

4、公共组件`components`下，建立各自的文件夹，然后统一通过安装的方式挂载到Vue

