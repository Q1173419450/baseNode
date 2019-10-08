# 极客时间 NDOE 学习总结

## 什么是NODE？

官网：
  - 基于 `Chrome V8 引擎`的 JavaScript 运行环境。
  - `事件驱动`、`非阻塞 I/O` 的模型，使其轻量又高效。

- NODE.js 没有浏览器 API, 即 document、window 等。
- 加了许多 Node.js API。
- 用浏览器的方式去控制电脑。

## NODE 作用？

- 搜索引擎优化 + 首屏速度优化 = 服务端渲染
- 服务端渲染 + 前后端同构 = Node.js

## 技术预研

- 分析要做的需求，找出技术难点
- 针对每个技术难点进行攻克

项目说明：

NODE.js 作为 BFF 层（Backend for Frontend 中间渲染层）

对用户端提供 HTTP 服务

使用 后端 RPC 服务

## commonJS

## 异步 callback

node 规范，必须有抛出错误的提醒，再进行其他操作

当程序执行失败时，抛出的错误会在 node 全局，影响 node 后续代码执行。

事件循环、调用栈

过时的处理

- npm：async.js
- thunk

## 事件循环

Event Loop

## 其他

- process.argv 获取用户输入信息