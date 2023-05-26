## 前言
> Jenkins服务的安装虽然不复杂，但依然需要一些准备工作，例如java环境，运行参数等。但是使用Docker一键完成！


## 一步搞定
```bash
docker run -d -p 8088:8080 --name myjenkins -p 50000:50000 jenkins/jenkins:lts
```

## 依次解释各个参数
<v-dockerCmdDesc cmd="docker run -d -p 8088:8080 --name myjenkins -p 50000:50000 jenkins/jenkins:lts"/>

:::tip
Jenkins这个容器很特殊，它需要暴露俩个端口到外部宿主机器，一般情况我们不用考虑为什么，只要知道我们需要使用的是容器暴露的 8080 服务即可。
:::


## 接下来测试一下
我们这里在windows机器上面浏览器打开宿主jenkins看看效果\
> 这里我们的Docker宿主机器IP地址是10.100.49.148, 端口如上所述是8088，所以我们打开http://10.100.49.148:8088

<img :src="$withBase('/jenkins-login.jpg')" alt="jenkins-login.jpg">

:::tip
解释一下：
这里我windows机器与docker宿主机器在同一个WIFI网络中。
docker宿主机器的ip地址是 10.100.49.148，你在测试中IP地址应该和我的不一样哦！
:::
centos上面查看机器的IP地址的命令是： `ip a`


## 解锁jenkins
> 这里其实我们Docker安装jenkins的工作已经完成了，只不过jenkins第一次运行是需要开发者自己解锁的。
> 出于方便大家的目的，我们这里介绍一下后面解锁应该怎么做。
> 解锁jenkins的方法就是找到容器内部的initialAdminPassword文件，并把内容复制拷贝到浏览器的jenkins登录页

```bash
# 第一步： 进入myjenkins容器
docker exec -it myjenkins bash

# 第二步： 查看密码文件内容
tail -f /var/jenkins_home/secrets/initialAdminPassword
# 当你运行结束之后，你会得到一串密码，它像这个样子：73cf23dc900da30fa676c2766786bf6a
# 警告：当你尝试的时候，因为jenkins版本迭代的原因，这个文件名可能会改变，所以请以浏览器jenkins的登录页提示为准哦
# 提示：请使用tail命令哦，因为vi vim 在这个容器中是没有预安装的哦


# 第三步：在浏览器jenkins登陆页填写密码文件的内容 

# 第四部：选择插件，建议新手玩家选择默认插件配置，反正后面可以修改。老玩家就不用我说了，会玩。

# 第五步：配置用户名密码

# 完成 bingo!
```


## 总结
是不是非常简单？没想到使用docker安装jenkins一行命令就搞定了，所谓`工欲善其事必先利其器`就是这个道理吧。

并且你可以在同一台linux机器上面安装多个版本的jenkins哦，对于开发测试实在是太方便了，有木有？

## 常见问题
<v-FAQ />

<v-comment/>
