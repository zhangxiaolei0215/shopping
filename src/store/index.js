import {createStore, applyMiddleware} from 'redux'
import reducers from './reducer/counter.js'

//引入中间件,logger用于打印
import logger from "redux-logger"

//实现派发异步动作，返回函数，将派发异步动作这个才做交给这个函数来控制
import reduxThunk from 'redux-thunk'

//
import reduxPromise from 'redux-promise'


let store = createStore(reducers, applyMiddleware(logger, reduxThunk, reduxPromise))
export default store
