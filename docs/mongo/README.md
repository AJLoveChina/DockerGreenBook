## 前言
> mongo db的数据库安装虽然不复杂，但是这里我想单独写一章介绍Docker使用mongo DB数据库，因为mongo DB实在是太常用了。


## 一步搞定
```bash
docker run --name some-mongo -d -p 27077:27017 mongo:4
```

## 依次解释各个参数
<v-dockerCmdDesc cmd="docker run --name some-mongo -d -p 27077:27017 mongo:4"/>


## 接下来测试一下
<img :src="$withBase('/mongo-docker-test.jpg')" alt="docker-mongodb-test-result">

## 总结
额，非常简单好用吧，希望你喜欢。


## 常见问题
<v-FAQ />

<v-comment/>
