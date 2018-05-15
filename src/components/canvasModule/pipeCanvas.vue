<template>
    <canvas id="myCbox" ref="myCbox" width="1500" height="800"></canvas>
</template>

<script>
export default {
    name: "myCbox",
    data() {
        return {
            c: "",
            ctx: ""
        };
    },
    mounted() {
        // console.log(this.$refs);
        this.c = this.$refs.myCbox;
        // let c = document.getElementById("myCbox");
        let ctx = (this.ctx = this.c.getContext("2d"));
        // ctx.beginPath();
        // ctx.lineWidth = "5";
        // ctx.strokeStyle = "red"; // 红色路径
        // ctx.moveTo(0, 75);
        // ctx.lineTo(250, 75);
        // ctx.stroke(); // 进行绘制
        // ctx.closePath();
        // ctx.beginPath();
        //   ctx.closePath();
        // ctx.fillStyle = "#FF0000";
        // ctx.fillRect(0, 0, 150, 75);
        // ctx.fillStyle = "#ccc";
        // ctx.fillRect(200, 200, 150, 75);
        this.c.onmousedown = ev => {
            let e = ev || event;
            console.log(e);
            let x = e.offsetX;
            let y = e.offsetY;
            // console.log(x, y);
            // this.draw(x, y);
            this.drag(x, y);
        };
        this.draw(200, 200);
    },
    methods: {
        drag(x, y,w,h) {
            let ctx = this.ctx;
            if (ctx.isPointInPath(x, y)) {
                this.c.onmousemove = ev => {
                    var e = ev || event;
                    var ax = e.offsetX;
                    var ay = e.offsetY;
                    //鼠标移动每一帧都清楚画布内容，然后重新画圆
                    ctx.clearRect(x/2, y/2, 60, 60);

                    this.draw(ax, ay);
                };
            }
            this.c.onmouseup = () => {
                this.c.onmousemove = "";
                this.c.onmouseup = "";
            };
        },
        draw(x, y) {
            let ctx = this.ctx;
            ctx.beginPath();
            ctx.fillStyle = "blue";
            ctx.arc(x, y, 30, 0, 2 * Math.PI);
            ctx.fill();

            // ctx.beginPath();
            // ctx.fillStyle = "";
            // ctx.arc(x, y, 30, 0, 2 * Math.PI);
            // // ctx.globalCompositeOperation = "source-out";
            // ctx.fill();
        },
        clear() {}
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