## 前言
> I know, I know. Tomcat的安装非常简单，但是我还是想介绍一下Docker如何更简单的安装与使用Tomcat

## 提个小问题
* 你是不是遇到过要一个8.x，9.x版本的tomcat，但是电脑里面居然只有7.x版本的tomcat
* 你的tomcat是不是server.xml被你改的乱七八糟，以至于都无法运行了
* 什么？我的tomcat居然运行还会报错，catalina error，，，什么鬼？

> So， why not try Docker Tomcat？


## 一步搞定
```bash
docker run --name some-tomcat -d  -p 9999:8080 tomcat:8.0
```

## 依次解释各个参数
<v-dockerCmdDesc cmd="docker run --name some-tomcat -d  -p 9999:8080 tomcat:8.0"/>


## 接下来测试一下
打开浏览器访问 `http://<your-host-machine-ip>:9999`, 这里我的地址是：`http://10.100.49.148:9999/` \
你应该能看到一只汤姆猫\
<img :src="$withBase('/tomcat-docker-test.jpg')" />


## 部署你的应用
其实你最希望做的事情肯定不只是运行一个tomcat而已\
你可能需要进入到容器的内部，然后部署你的应用\
在内网或者局域网中，你可以在容器的内部通过 `wget` 命令来下载外部的文件,

或者你可以直接使用docker命令将宿主机器的文件传输到容器中，例如：
```bash
docker cp ./.  some-tomcat:/home
```
表示把当前目录的所有文件都传输给  some-tomcat容器中的 `/home`目录下

或者你只希望传输一个war包\
```bash
docker cp foo.war some-tomcat:/foo.war
```
表示将当前路径下的foo.war传输到 some-tomcat容器中的根目录下，并且文件名叫foo.war

## 总结
这次不打算总结点什么。。：）


## 常见问题
<v-FAQ />

<v-comment/>
