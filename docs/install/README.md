:::tip
这里不会阐述Docker的详细安装过程，
我们只针对centos linux 7系统做演示，
如果你需要在其它的系统上安装Docker，请点击文档底部的官方教程链接。
:::
## 安装
:::tip
首次在新的主机上安装 Docker CE 之前，您需要设置 Docker 镜像仓库。然后，您可以从此镜像仓库安装和更新 Docker。
:::
1. 安装所需的软件包。yum-utils 提供了 yum-config-manager 实用程序，并且 devicemapper 存储驱动需要 device-mapper-persistent-data 和 lvm2。
```text
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

2. 使用下列命令设置 stable 镜像仓库。您始终需要使用 stable 镜像仓库，即使您还需要通过 edge 或 testing 镜像仓库安装构建也是如此。这里给出的阿里云镜像源站。
```bash
sudo yum-config-manager \
     --add-repo \
     http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

3. 更新 yum 软件包索引。
```bash
sudo yum makecache fast
```

4. 安装最新版本的 Docker CE
```bash
sudo yum install -y docker-ce
```

5. 启动 Docker
```bash
sudo systemctl start docker
```

6. 验证是否正确安装了 docker
```bash
docker version
```

7. 完成
> Docker安装的坑很少，基本没有，所以良心产品+1

## 链接
* [docker 中文文档](https://docs.docker-cn.com/)
* [docker 官方英文 centos 安装指南 非常nice！](https://docs.docker.com/install/linux/docker-ce/centos/)
* [使用阿里云镜像源站可能会遇到一些坑，可以参考这篇文章（centos7）](https://yq.aliyun.com/articles/110806)


<v-comment/>
