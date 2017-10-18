import { List, Map, fromJS } from 'immutable'
import { GET_EVENTS } from './consts'

import debug from '../lib/debug'
const log = debug('redux:event')

const actionFunctions = {
    [`${GET_EVENTS}_REQUEST`]: (state) => state
        .set('isFeatch', true)
        .set('list', List()),
    [`${GET_EVENTS}_SUCCESS`]: (state, action) => state
        .set('isFeatch', false)
        .set('list', List(action.data)),
    [`${GET_EVENTS}_FAILURE`]: (state) => state
        .set('isFeatch', false)
        .set('list', List()),
}

const event = (state = Map({ isFeatch: false, list: List() }), action) => {
    log(action);
    return actionFunctions[action.type] ? actionFunctions[action.type](state, action) : state
}

export default event
