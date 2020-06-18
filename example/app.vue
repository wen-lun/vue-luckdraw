<template>
    <div class="demo">
        <luck-draw ref="luckDraw" :prizes="prizes" @start="onStart" @finish="onFinish" />
        <div class="operation">
            <div class="item">
                选择奖品：
                <select v-model="checkIndex">
                    <option v-for="({text},i) in prizes" :key="i" :value="i">{{ text }}</option>
                </select>
                <button @click="onStopClick">停止抽奖</button>
            </div>
            <div class="item">抽中奖品：{{ prize&&prize.text||"尚未抽奖" }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkIndex: 0,
            prize: null,
            prizes: [
                {
                    text: '100元', // 奖品名称
                    icon: '/img/icon.png', // 图标，如果没有则不显示
                },
                { text: '10元', icon: '/img/icon.png' },
                { text: '1000元', icon: '/img/icon.png' },
                { text: '2元', icon: '/img/icon.png' },
                { text: '1元' },
                { text: '0.2元', icon: '/img/icon.png' },
                { text: '0.3元', icon: '/img/icon.png' },
                { text: '0.5元', icon: '/img/icon.png' },
            ],
        };
    },
    methods: {
        // 点击了开始抽奖
        onStart() {
            // 模拟200ms后请求到中奖奖品
            setTimeout(() => {
            // 调用check方法，选中一个奖品索引
                this.$refs.luckDraw.check(this.checkIndex);
            }, 200);
        },
        // 抽中奖品，并且停止转盘后调用
        onFinish(index) {
            this.prize = this.prizes[index];
        },
        onStopClick() {
            // 主动调用stop方法停止转盘转动，在请求中奖奖品的接口出异常时调用
            this.$refs.luckDraw.stop();
        },
    },
};
</script>

<style lang="scss" scoped>
.demo {
    display: flex;
    justify-content: center;
    .operation {
        padding-left: 40px;
        .item {
            padding: 10px 0;
            display: flex;
            align-items: center;
            button {
                margin-left: 15px;
            }
        }
    }
}
</style>
