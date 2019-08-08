/**
 * 基类 用于管理game 人物、怪物等公用的方法
 */
class BaseActionsClass {
    constructor() {
        this._MAXWIDTH = 500; // canvas最大宽度
        this._MAXHEIGHT = 300; // canvas最大高度
    }

    getCanvasMaxWidth() {
        return this._MAXWIDTH;
    }
    getCanvasMaxHeight() {
        return this._MAXHEIGHT;
    }
    // 公共的绘制方法
    draw() {
        this.info.context.drawImage(
            this.info.img,
            this.info.imgPos.x,
            this.info.imgPos.y,
            this.info.imgPos.width,
            this.info.imgPos.height,
            this.info.rect.x,
            this.info.rect.y,
            this.info.rect.width,
            this.info.rect.height
        )
    }
    /** 对画板进行清除 **/
    clearDraw(positionInfo) {
        let { x, y, width, height } = positionInfo;
        this.info.context.clearRect(x, y, width, height);
    }
}

BaseActionsClass.prototype.positionDataInfo = [];
export default BaseActionsClass;