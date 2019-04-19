import React from 'react'
import {connect} from 'react-redux'
import actions from '../store/action/index'
import '../less/index.less'

class Counter extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div>
            <button className="btn" onClick={this.props.add}>+</button>
            <span className="main">{this.props.num}</span>
            <button className="btn" onClick={this.props.min}>-</button>
        </div>
    }
}

//state store.getState()===>store中最大的store，包含各个组件的数据
export default connect(state => ({...state.counter}), actions)(Counter)