import './assets/css/index.scss'
import Prepare from './js/Prepare'
import MonsterClass from './js/MonsterClass'
import HeroClass from './js/HeroClass'

let prepare = new Prepare();
let heroInfo = {
    img: prepare.heroImg,
    context: prepare.context,
    imgPos: {
        x: 0,
        y: 0,
        width: 32,
        height: 32
    },
    rect: {
        x: 0,
        y: 0,
        width: 40,
        height: 40
    }
};
let darkMonsterInfo = {
    img: prepare.allSpriteImg,
    context: prepare.context,
    imgPos: {
        x: 858,
        y: 529,
        width: 32,
        height: 32
    },
    rect: {
        x: 100,
        y: 100,
        width: 40,
        height: 40
    }
}
let redMonsterInfo = {
    img: prepare.allSpriteImg,
    context: prepare.context,
    imgPos: {
        x: 858,
        y: 495,
        width: 32,
        height: 32
    },
    rect: {
        x: 150,
        y: 150,
        width: 40,
        height: 40
    }
}
/** 实例化英雄 **/
let hero = new HeroClass(heroInfo);
/** 实例化黑色怪物 **/
let darkMonster = new MonsterClass(darkMonsterInfo);
/** 实例化红色怪物 **/
let redMonster = new MonsterClass(redMonsterInfo);
console.log('redMonster', redMonster)
prepare.getResource()
.then(res =>{
    hero.draw();
    darkMonster.draw();
    redMonster.draw();
    document.documentElement.addEventListener('keydown', (e)=>{
        switch (e.keyCode) {
            case 38:
                hero.changeImgPos({
                    x: 0,
                    y: 96,
                    width: 32,
                    height: 32
                }).upPosition();
                break;
            case 40:
                hero.changeImgPos({
                    x: 0,
                    y: 0,
                    width: 32,
                    height: 32
                }).downPosition();
                break;
            case 37:
                hero.changeImgPos({
                x: 32,
                y: 32,
                width: 32,
                height: 32
            }).leftPosition();
                break;
            case 39:
                hero.changeImgPos({
                    x: 32,
                    y: 64,
                    width: 32,
                    height: 32
                }).rightPosition();
                break;
        }
    })
})

