/**
 * 游戏准备资源类
 */
import all from './../assets/images/all.jpg'
import hero from './../assets/images/hero.png'
export default class Prepare {
    constructor() {
        this.context = document.getElementById('gameCanvas').getContext('2d');
        this.heroImg = new Image();
        this.allSpriteImg = new Image();
        const imgTask = (img, src) => {
            return new Promise(function (resolve, reject) {
                img.onload = resolve;
                img.onerror = reject;
                img.src = src;
            });
        };
        this.allresourceTask = Promise.all([
            imgTask(this.heroImg, hero),
            imgTask(this.allSpriteImg, all),
        ]);
    }

    /**
     * 获取准备资源
     * @returns {*}
     */
    getResource() {
        return this.allresourceTask;
    }

}