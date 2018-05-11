<template>
    <canvas id="myCbox" width="1500" height="800"></canvas>
</template>

<script>
let c = document.getElementById("myCbox");
let ctx=c.getContext("2d");

export default {
    el:'myCbox',
    name:'myCbox',
    data() {
        return {

        }
    },
    mounted() {
        console.log(ctx);
    },
    methods: {
        
    }
};
</script>

<style scoped lang="less">
#myCbox {
    border: 1px solid #cccccc;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
</style>