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
