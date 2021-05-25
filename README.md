# book-managing-system

前端：react + ant design

后端：nodejs + express

后端写的一坨，sql query语句纯手工封装，没用ORM，没有注入检测，甚至没有加个中间件检查session，只要登录后没刷新导致服务器检查session，客户端自己写个POST请求就能继续用admin权限

前端写的一坨，view和controller粘在一起，重复代码刷行数（ctrlcv+F2的时候很开心），console.log没整理，前端也没注入检测，组件传参一锅粥

问题很多，

但是能跑
