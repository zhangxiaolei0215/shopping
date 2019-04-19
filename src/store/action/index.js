import * as Types from "../action-types"

export default {
    add() {
        // return {type: Types.ADD}
        return function (dispatch, getState) {
            //dispatch :store.dispatch
            //getState:store.getState
            //getState 获取的是上一次的状态state值
            setTimeout(() => {
                dispatch({type: Types.ADD})
            }, 2000)
            console.log(getState())
        }
    },
    min() {
        return {
            type: Types.MINUS,
            //支持派发的动作是一个promise的实例
            payload: new Promise(function (resolve, reject) {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve(100)
                    } else {
                        reject(200)
                    }
                }, 2000)
            }).then(function (val) {
                return val;
            })

        }
    }
}