import BaseActionsClass from './BaseActionsClass'
/**
 * 怪物类
 */
export default class MonsterClass extends BaseActionsClass{
    constructor(props) {
        super();
        super.positionDataInfo.push(props.rect);
        this.info = props
    }

}