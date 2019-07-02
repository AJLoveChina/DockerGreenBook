<style scoped>
    pre{
        color:#eee;
        font-family: "Microsoft YaHei UI";
    }
</style>
<template>
    <div>
        <ol>
            <li>
                <p>数据库连接不成功？容器内部的服务无法被外部访问？</p>
                <ul style="list-style-type:circle;">
                    <li>检查docker宿主机器是否开启了防火墙，如果有请关闭防火墙。或者将宿主机器的端口加入到防火墙白名单。容器的端口没有关系，不需要做什么。</li>
                    <li>docker运行容器时，千万不能忘记 <Badge text="-p" type="tip" vertical="middle"/> 参数，这个参数决定了docker 容器内部的服务可以被外部访问</li>
                    <li>用<Badge text="docker container ls" type="tip" vertical="middle"/>检查你的容器是否启动成功了，很多情况不要忘记了 <Badge text="-d" type="tip" vertical="middle"/> 参数，这个参数可以让容器后台运行。</li>
                </ul>
            </li>
            <li>
                <p>几天之后再使用docker，找不到此命令？容器也不在了？</p>
                <ul style="list-style-type:circle;">
                    <li>很可能是你的宿主机器重启了，你需要重新启动docker服务，这很简单，尝试：
                        <pre>service start docker
或者
systemctl start docker</pre>
                        <h6>同理既然你的docker服务都重启了，那么你的容器也是需要被重启的，因为他们现在都处于stop状态，可以尝试：</h6>
                        <pre>
//查看所有的docker容器，包括运行中的、停止的。
docker container ls -a
// 输入你要启动的容器名称，它可以是一个名字也可以是一串字符串ID
docker start &lt;your container name>   </pre>
                    </li>
                </ul>
            </li>
            <li>
                <p>如果你怎么都尝试不成功，可以试试docker重启大法，这不是开玩笑，非常有效！</p>
                <pre>
systemctl stop docker
systemctl start docker</pre>
            </li>
        </ol>
    </div>
</template>
<script>
    export default {
        name: "v-FAQ",
        data() {
            return {};
        },
        components: {},
        computed: {},
        watch: {},
        created() {

        },
        mounted() {

        },
        methods: {}
    }
</script>
