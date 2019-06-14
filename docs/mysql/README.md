## 前言
> mysql server 的安装极其繁琐，而且安装失败之后再次安装就不行了（很多系统上都是如此），但是如果使用Docker，这项工作就会变得非常简单


## 一步搞定
```bash
docker run -p 3306:3306 --name some-mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5
```

## 依次解释各个参数
<v-dockerCmdDesc cmd="docker run -p 3306:3306 --name some-mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5"/>
:::tip
MYSQL_ROOT_PASSWORD=123456  指定了mysql server的密码是123456. (默认用户名是root)
:::

## 接下来测试一下
我们这里在windows机器上面Navicat连接测试一下\
<img :src="$withBase('/docker-mysql-navicat.jpg')" style="width:300px" alt="docker-mysql-navicat">

:::tip
解释一下：
这里我windows机器与docker宿主机器在同一个WIFI网络中。
docker宿主机器的ip地址是 10.100.49.148，你在测试中IP地址应该和我的不一样哦！
:::
centos上面查看机器的IP地址的命令是： `ip a`

## 总结
是不是非常简单？以前安装mysql的痛苦还记得吗？没想到使用docker一行命令就搞定了，所谓`工欲善其事必先利其器`就是这个道理吧。

并且你可以在同一台linux机器上面安装多个版本的mysql server哦，对于开发测试实在是太方便了，有木有？

## 常见问题
<v-FAQ />

