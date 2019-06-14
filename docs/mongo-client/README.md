## 前言
> 想不想试试网页版本的MongoDB客户端，麻雀虽小但是功能强大。导入导出，创建数据库，表，document等等功能都有哦\
> 别人看到时候肯定要问你用的这是神马MongoDB客户端，为什么这么有逼格？

## 一步搞定
```bash
docker run -it -d --name mongo-client -e ME_CONFIG_MONGODB_SERVER=10.100.49.148 -e ME_CONFIG_MONGODB_PORT=27077  -p 8081:8081 mongo-express
```

## 依次解释各个参数
<v-dockerCmdDesc cmd="docker run -it -d --name mongo-client -e ME_CONFIG_MONGODB_SERVER=10.100.49.148 -e ME_CONFIG_MONGODB_PORT=27077  -p 8081:8081 mongo-express"/>

:::tip
这里我们需要给容器传入俩个参数：\
ME_CONFIG_MONGODB_SERVER  ： mongodb数据库的ip地址\
ME_CONFIG_MONGODB_PORT    ： MongoDB所使用的端口
:::


## 接下来测试一下
打开浏览器访问 `http://<your-host-machine-ip>:8081`, 这里我的地址是：`http://10.100.49.148:8081/` 

<img :src="$withBase('/mongo-client-test.jpg')"/>


## 总结

当然这个MongoDB网页版客户端最大的弊端就是不能在网页上切换MongoDB的ip地址，因为我们在开发环境往往在多台机器上面部署有MongoDB服务，但是这个客户端一次只能对应着一个MongoDB服务。

例如：运行docker容器时候传入的那俩个参数server还有port，在运行容器的时候我们就已经指定了相应的MongoDB服务。


## 常见问题
<v-FAQ />
