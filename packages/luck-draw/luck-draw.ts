import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Ref } from 'vue-property-decorator';
import { Layer } from 'konva/lib/Layer';
import { Shape } from 'konva/lib/Shape';
import { Circle } from 'konva/lib/shapes/Circle';
import { Text } from 'konva/lib/shapes/Text';
import { Stage } from 'konva/lib/Stage';
import { Animation } from 'konva/lib/Animation';
import { Tween } from 'konva/lib/Tween';
import { Context } from 'konva/types/Context';

const SPEED = 0.001;
@Component({ name: 'LuckDraw' })
export default class extends Vue {
    /* ============model=========== */
    /* ============props=========== */
    @Prop({ type: Array, required: true }) prizes!: Array<{ text: string, icon?: string }>;
    @Prop({ type: Number, default: 300 }) size!: number;
    @Prop({ type: Number, default: 40 }) btnSize!: number;
    @Prop({ type: Number, default: 25 }) iconWidth!: number;
    @Prop({ type: Number, default: 22 }) borderWidth!: number;
    @Prop({ type: Number, default: 16 }) fontSize!: number;
    @Prop({ type: Array, default: () => ['#FEE200', '#FFF'] }) dotColors!: Array<string>;
    @Prop({ type: Number, default: 24 }) dotCount!: number;
    @Prop({ type: Number, default: 4 }) dotRadius!: number;
    @Prop({ type: Array, default: () => ['#ffd428', '#fff68b'] }) fanneColors!: Array<string>;

    /* ============data=========== */
    @Ref('container') container!: HTMLDivElement;

    innerRingLayer: Layer | null = null;
    innerPrizes: Array<{ text: string, icon?: HTMLImageElement, angle: number }> = [];
    rotateAngle = 0; // 记录内圈转盘转动的总角度
    speed = SPEED; // 旋转一度需要多少秒
    slowDown = 0; // 减速程度
    checkedIndex: number | null = null; // 表示抽中那个奖品
    running = false;
    slowDownTurns = 0; // 记录找到奖品后减速的圈数

    /* ============computed=========== */
    get radius() {
        return this.size * 0.5;
    }

    get count() {
        return this.prizes.length;
    }

    /** 扇形的角弧度 */
    get fanneAngle() {
        return 360 / this.count;
    }

    /* ============methods normal=========== */
    /** 外圈 */
    drawOutRing() {
        const layer = new Layer({
            x: this.radius,
            y: this.radius,
            offsetX: this.radius,
            offsetY: this.radius,
        });
        layer.add(new Circle({
            x: this.radius,
            y: this.radius,
            radius: this.radius,
            rotation: 10,
            fill: '#f05828',
        }));
        // 外圈上的圆点
        const dotAngle = 360 / this.dotCount;
        const offsetY = this.radius - this.borderWidth * 0.5;
        for (let i = 0; i < this.dotCount; i++) {
            layer.add(new Circle({
                x: this.radius,
                y: this.radius,
                offsetY,
                rotation: dotAngle * i,
                radius: this.dotRadius,
                fill: this.dotColors[i % this.dotColors.length],
                shadowBlur: 10,
                shadowColor: this.dotColors[i % this.dotColors.length],
            }));
        }
        return layer;
    }

    /** 内圈 */
    drawInnerRing() {
        const layer = new Layer({
            x: this.radius,
            y: this.radius,
            offsetX: this.radius,
            offsetY: this.radius,
        });
        // 扇形角弧度
        const fanneAngle = 2 * Math.PI / this.count;
        // 画圆弧时，默认起始弧度从水平向右方向，顺时针开始，这里先将起始弧度减去Math.PI * 0.5，表示从竖直向上方向顺时针，再减去扇形弧度的一半，以保证画的扇形的角是指向下面的
        const startAngle = -Math.PI * 0.5 - fanneAngle / 2;
        const endAngle = startAngle + fanneAngle;
        for (let i = 0; i < this.count; i++) {
            const { text, icon } = this.innerPrizes[i];
            layer.add(new Shape({
                x: this.radius,
                y: this.radius,
                fill: this.fanneColors[i % this.fanneColors.length],
                stroke: '#fff',
                strokeWidth: 0.5,
                sceneFunc: (context, shape) => {
                    context.rotate(fanneAngle * i);
                    // 画扇形背景
                    context.beginPath();
                    context.moveTo(0, 0);
                    context.arc(0, 0, this.radius - this.borderWidth, startAngle, endAngle, false);
                    context.closePath();
                    context.fillStrokeShape(shape);
                    // 画文字和图标
                    context.save();
                    context._context.textBaseline = 'top';
                    context._context.fillStyle = '#A17500';
                    context._context.font = `${this.fontSize}px Microsoft YaHei`;
                    const { width } = context.measureText(text);
                    const textY = this.borderWidth + 10 - this.radius;
                    context.fillText(text, -width * 0.5, textY);
                    if (icon) {
                        const iconHeight = this.iconWidth / icon.width * icon.height;
                        context.drawImage(icon, -this.iconWidth * 0.5, textY + this.fontSize + 10, this.iconWidth, iconHeight);
                    }
                    context.restore();
                },
            }));
        }
        return layer;
    }

    drawBtn() {
        const layer = new Layer();
        const outerRing = this.btnSize;
        const innerRing = this.btnSize - 5;
        const btnSceneFunc = (context: Context, shape: Shape) => {
            const radius: number = shape.getAttr('radius');
            context.beginPath();
            // 计算箭头y坐标
            const y = this.radius - radius * 1.4;
            context.moveTo(this.radius, y);
            context.arc(this.radius, this.radius, radius, -Math.PI * 0.44, Math.PI + Math.PI * 0.44, false);
            context.closePath();
            context.fillShape(shape);
        };

        layer.add(new Shape({
            sceneFunc: btnSceneFunc,
            fill: '#fff',
            shadowBlur: 10,
            shadowColor: '#aaa',
        }).setAttr('radius', outerRing));

        layer.add(new Shape({
            sceneFunc: btnSceneFunc,
            fill: '#fa4d29',
            shadowBlur: 5,
            shadowColor: '#FF5229',
        }).setAttr('radius', innerRing));

        const text = new Text({
            text: '立即\n抽奖',
            x: this.radius - innerRing,
            y: this.radius - innerRing,
            width: innerRing * 2,
            height: innerRing * 2,
            align: 'center',
            verticalAlign: 'middle',
            fontSize: innerRing / 1.8,
            fontFamily: 'Microsoft YaHei',
            fill: '#fff',
        });
        text.on('mouseenter', () => {
            this.container.style.cursor = 'pointer';
        });
        text.on('mouseout', () => {
            this.container.style.cursor = 'default';
        });
        text.on('click touchend', this.onLuckDraw);
        layer.add(text);
        return layer;
    }

    async handleInnerPrizes() {
        this.innerPrizes = await Promise.all(this.prizes.map(({ text, icon }, i) => {
            return new Promise<any>((resolve, reject) => {
                // 表示每个奖品在转盘竖直向上顺时针偏离的角度，用于旋转转盘角度以达到抽中该奖品的目的
                const angle = this.fanneAngle * i;
                if (!icon) {
                    return resolve({ text, angle });
                }
                const img = document.createElement('img');
                img.onload = () => {
                    resolve({ text, icon: img, angle });
                };
                img.onerror = e => reject(e);
                img.src = icon;
            });
        }));
    }

    /** 处理抽奖时转盘转动的动画 */
    handleInnerRingAnimation() {
        if (!this.running) return;
        // 逆时针旋转，一次转动一格（即一个扇形区域）
        this.rotateAngle += this.fanneAngle;

        // 转动了几圈
        const turnsNum = Math.floor(Math.abs(this.rotateAngle) / 360);
        // 将角度转换成1圈内的角度，方便判断旋转到了那个奖品（此角度+奖品所在角度=360时，表示该奖品旋转到了正上方，表示选中该奖品）
        let angle = this.rotateAngle - Math.floor(this.rotateAngle / 360) * 360;
        if (angle == 0) {
            // 不然无法选中索引为0的奖品
            angle = 360;
        }
        // 稳定转n圈以上，并且选中奖品首次旋转到正上方时，开始慢慢减速，若外部一直没有调用check选择抽中奖品，那么将会一直转
        if (turnsNum > 2 && this.checkedIndex != null && angle + this.innerPrizes[this.checkedIndex].angle == 360) {
            // 记录减速旋转的圈数
            this.slowDownTurns++;
        }
        // 开始减速
        if (this.slowDownTurns > 0) {
            this.speed += 0.0001 * this.slowDown;
            this.slowDown += 0.5;// 减速程度越来越大
        }
        new Tween({
            duration: this.fanneAngle * this.speed,
            node: this.innerRingLayer,
            rotation: this.rotateAngle,
            onFinish: () => {
                // 当减速n圈后再次到达奖品位置处时，停止旋转，表示抽中该奖品
                if (this.slowDownTurns == 4 && angle + this.innerPrizes[this.checkedIndex!].angle == 360) {
                    this.stop();
                    this.$emit('finish', this.checkedIndex);
                } else {
                    this.handleInnerRingAnimation();
                }
            },
        }).play();
    }

    /** 外部调用（请求服务器得到奖品索引后，调用此方法表示抽中该奖品） */
    check(index: number) {
        if (index < 0 || index > this.count - 1) {
            this.stop();
            throw new Error('奖品索引越界');
        }
        this.checkedIndex = index;
    }

    stop() {
        this.running = false;
    }

    /* ============methods event=========== */
    onLuckDraw() {
        // 当前正在抽奖，返回不做处理
        if (this.running) {
            return;
        }
        this.speed = SPEED;
        this.rotateAngle = 0;
        this.slowDownTurns = 0;
        this.slowDown = 0;
        this.checkedIndex = null;
        this.running = true;
        this.handleInnerRingAnimation();
        this.$emit('start');
    }

    /* ============Lifecycle Hooks=========== */
    mounted() {
        this.$nextTick(async () => {
            const stage = new Stage({
                container: this.container,
                width: this.size,
                height: this.size,
            });
            // 外圈
            const outerRingLayer = this.drawOutRing();
            // 外圈动画
            new Animation(() => {
                outerRingLayer.rotate(0.2);
            }, outerRingLayer).start();
            stage.add(outerRingLayer);

            // 内圈转盘
            await this.handleInnerPrizes();
            this.innerRingLayer = this.drawInnerRing();
            stage.add(this.innerRingLayer);

            // 抽奖按钮
            stage.add(this.drawBtn());
        });
    }

    /* ============watch=========== */
}
