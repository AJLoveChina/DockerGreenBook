## 前言
> 我想这个教程最大的意义就是对于那些还没使用过wordpress的人，让他们了解一下wordpress吧。\
> 对于想用wordpress写博客的人也有帮助呀，毕竟本地安装wordpress的话是需要PHP环境的，我想很多开发者的老铁是没有PHP环境的吧。\
> 就算你有PHP环境，尝试一下不同的wordpress版本也好啊，比如试试最新的5.x版本

## 一步搞定
```bash
docker run --name some-wordpress -p 8888:80 -d wordpress
```

## 依次解释各个参数
<v-dockerCmdDesc cmd="docker run --name some-wordpress -p 8888:80 -d wordpress"/>


## 接下来测试一下
打开浏览器访问 `http://<your-host-machine-ip>:8888`, 这里我的地址是：`http://10.100.49.148:8888/` \
你应该能看到wordpress的傻瓜式指引界面（这里傻瓜式没什么恶意，是表扬，表扬wordpress非常优雅的用户指引）\
<img :src="$withBase('/wordpress-docker-test.jpg')" style="width:400px;"/>


但是很尴尬，wordpress这个镜像里面没有自带mysql，所以我们需要一个mysql服务。\
如果你手边暂时没有可用的mysql服务，可以尝试使用这个 <a :href="$withBase('/mysql')">Docker一键创建mysql服务教程</a> \
<img :src="$withBase('/wordpress-mysql.jpg')" style="width:400px;"/>

:::tip
数据库主机填写规范示例 `<mysql-server-ip>:<port>`
:::

数据库这一步设置完成的话，后面的操作就非常简单了，就不再赘述了哟~


## 总结
如果你还没用过wordpress，了解一下它吧。毕竟他是目前全球最火热的开源内容管理系统之一，可能去掉之一也是合理的。


## 常见问题
<v-FAQ />
