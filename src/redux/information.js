import { Map } from 'immutable'

import { SHOW_INFORMATION, HIDE_INFORMATION } from './consts'

const actionFunctions = {
    [SHOW_INFORMATION]: (state, action) => state
        .set('isShow', true)
        .set('information', Map(action.data)),
    [HIDE_INFORMATION]: (state) => state
        .set('isShow', false)
        .set('information', Map())
}

const information = (state = Map({ isShow: false, information: Map() }), action) =>
    actionFunctions[action.type] ? actionFunctions[action.type](state, action) : state

export default information
