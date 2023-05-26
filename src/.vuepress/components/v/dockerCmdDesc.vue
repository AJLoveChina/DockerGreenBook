<template>
    <div>
        <p><Badge text="docker run" type="tip" vertical="middle"/> ： 用docker命令运行一个容器</p>
        <ul>
            <li v-for="item in descList">
                <Badge :text="item[0]" type="tip" vertical="middle"/>
                <span v-html="item[1]"></span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "v-dockerCmdDesc",
        props: ['cmd'],
        data() {
            return {
                descList: []
            };
        },
        components: {},
        computed: {},
        watch: {},
        created() {

        },
        mounted() {
            let list = this.cmd.split(/\s/).map(item => item.trim());
            let nameIndex = list.findIndex(val => '--name' === val);
            this.name = list[nameIndex + 1];
            this.is_d = (list.findIndex(val => val === '-d') !== -1);
            let pIndex = list.findIndex(val => '-p' === val);

            let descList = [];
            let isLastItemParameterOrDockerCmd = false;
            list.forEach((item, index) => {
                switch (item) {
                    case 'docker':
                    case 'run':
                        isLastItemParameterOrDockerCmd = true;
                        break;
                    case "-e":
                        descList.push([`-e ${list[index + 1]}`, `设置容器运行的环境变量, 这些变量可能会被容器使用`]);
                        isLastItemParameterOrDockerCmd = true;
                        break;
                    case "--name":
                        descList.push([`--name ${list[index + 1]}`, `容器的名字叫做 ${list[index + 1]}`]);
                        isLastItemParameterOrDockerCmd = true;
                        break;
                    case "-d":
                        descList.push([`-d`, `后台运行容器`]);
                        isLastItemParameterOrDockerCmd = false;
                        break;
                    case "-p":
                        let port = list[index + 1];
                        let hostPort = port.split(":")[0];
                        let docPort = port.split(":")[1];
                        if (hostPort === docPort) {
                            descList.push([`-p ${port}`, `将运行容器内部的<b>${docPort}</b>端口桥接到宿主机器（也就是docker所在的机器）的<b>${hostPort}</b>端口 （左边的端口属于宿主机器，右边的端口属于容器）`]);
                        } else {
                            descList.push([`-p ${port}`, `将运行容器内部的<b>${docPort}</b>端口桥接到宿主机器（也就是docker所在的机器）的<b>${hostPort}</b>端口 （这里我强行用俩个不同的端口好让大家区分宿主机器与容器）`]);
                        }
                        isLastItemParameterOrDockerCmd = true;
                        break;
                    default:
                        if (!isLastItemParameterOrDockerCmd && item.indexOf("-") === -1) {
                            let image = item;
                            let imageName;
                            let imageVersion;
                            if (image.indexOf(":") !== -1) {
                                imageName = image.split(":")[0];
                                imageVersion = image.split(":")[1];
                            } else {
                                imageName = item;
                                imageVersion = null;
                            }
                            let desc = `使用${imageName}镜像，如果宿主机器没有这个镜像，就会从互联网下载。`;
                            if (imageVersion) {
                                desc += `${imageVersion} 是镜像所选择的版本`
                            } else {
                                desc += `这里没有指定镜像使用的版本，则默认使用最新的或者最稳的的版本`
                            }
                            descList.push([`${image}`, desc]);
                        }
                        if (item.indexOf("-") !== -1) {
                            isLastItemParameterOrDockerCmd = true;
                        } else {
                            isLastItemParameterOrDockerCmd = false;
                        }
                        break;
                }

            });

            this.descList = descList;

        },
        methods: {}
    }
</script>
