import BaseActionsClass from './BaseActionsClass'
/**
 * 英雄类
 */
 export default class HeroClass  extends BaseActionsClass{
    constructor(props) {
        super();
        this.info = props;
        this.positionData = {
            x: 0,
            y: 0,
            width: 40,
            height: 40
        }
        this.oldPositionData = null;
    }

    checkPosition(callback1, callback2) {
        let result = this.positionDataInfo.filter( item => {
            return (item.x === this.positionData.x && item.y === this.positionData.y)
        })
        if(result.length > 0) {
            alert("遇见怪物，开始战斗！");
            callback1 && callback1()
        } else {
            callback2 && callback2();
        }
    }

    downPosition() {
        this.oldPositionData = Object.assign({}, this.positionData);
        if (this.positionData.y + 50 >= this.getCanvasMaxHeight()) {
            alert('不能再走了兄弟~穿模了~~');
            return this;
        }
        this.positionData.y = this.positionData.y + 50;
        this.checkPosition(()=>{
            this.positionData.y = this.positionData.y - 50;
        },()=>{
            this.changePositionData(this.positionData);
            this.heroAnimate();
        });
    }
    upPosition() {
        this.oldPositionData = Object.assign({}, this.positionData);
        if (this.positionData.y - 50 < 0) {
            alert('不能再走了兄弟~穿模了~~');
            return this;
        }
        this.positionData.y = this.positionData.y - 50;
        this.checkPosition(()=>{
            this.positionData.y = this.positionData.y + 50;
        },()=>{
            this.changePositionData(this.positionData);
            this.heroAnimate();
        });
    }
    rightPosition() {
        this.oldPositionData = Object.assign({}, this.positionData);
        if (this.positionData.x + 50 >= this.getCanvasMaxWidth()) {
            alert('不能再走了兄弟~穿模了~~');
            return this;
        }
        this.positionData.x = this.positionData.x + 50;
        this.checkPosition(()=>{
            this.positionData.x = this.positionData.x - 50;
        },()=>{
            this.changePositionData(this.positionData);
            this.heroAnimate();
        });
    }

    leftPosition() {
        this.oldPositionData = Object.assign({}, this.positionData);
        if (this.positionData.x - 50 < 0) {
            alert('不能再走了兄弟~穿模了~~');
            return this;
        }
        this.positionData.x = this.positionData.x - 50;
        this.checkPosition(()=>{
            this.positionData.x = this.positionData.x + 50;
        },()=>{
            this.changePositionData(this.positionData);
            this.heroAnimate();
        });
    }

    /** 重新赋值英雄的位置信息 **/
    changePositionData(positionData) {
        this.info.rect = positionData;
    }

    /** 重新赋值英雄图片的位置信息 用于切换英雄的背景图 **/
    changeImgPos(imgPosData) {
        this.info.imgPos = imgPosData;
        return this;
    }

    /** 英雄行走 **/
    heroAnimate() {
        this.clearDraw(this.oldPositionData);
        this.draw(this.info);
    }
}