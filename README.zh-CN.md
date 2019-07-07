# restfutl-mysql



## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org

### 封装的目地

>简介

在egg基础上，进行简单封装，通过继承，基础公共的controll和service。实现mysql单表的快速列表查询，单条数据查询，删除，更新操作，减少重复的工作量。
小巧容易扩展，不满足自己业务需要，可在此基础上进行扩展。

需求： 

* 思考大部分业务，简单业务都是相同的，对单张单表，实现一张表增删查改。
* 能否通过，不用写过多的代码，通过配置数据库连接，配置表名称，即可快速实现。

Restful风格的api接口，实现规则如下：

Method|Path|Route Name|Controller.Action
--|:--:|:--:|--
GET|/posts|posts|app.controllers.posts.index
GET|/posts/new|new_post|app.controllers.posts.new
GET|/posts/:id|post|app.controllers.posts.show
GET|/posts/:id/edit|edit_post|app.controllers.posts.edit
POST|/posts|posts|app.controllers.posts.create
PUT|/posts/:id|post|app.controllers.posts.update
DELETE|/posts/:id|post|app.controllers.posts.destroy


----

未完待续

