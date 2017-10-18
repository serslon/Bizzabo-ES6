import { Map } from 'immutable'

import { GET_ARTIST } from './consts'

// import debug from '../lib/debug'
// const log = debug('redux:artist')

const actionFunctions = {
    [`${GET_ARTIST}_REQUEST`]: (state) => state
        .set('isFeatch', true)
        .set('detail', Map()),
    [`${GET_ARTIST}_SUCCESS`]: (state, action) => state
        .set('isFeatch', false)
        .set('detail', Map(action.data)),
    [`${GET_ARTIST}_FAILURE`]: (state) => state
        .set('isFeatch', false)
        .set('detail', Map()),
}

const artist = (state = Map({ isFeatch: false, detail: Map() }), action) =>
    actionFunctions[action.type] ? actionFunctions[action.type](state, action) : state

export default artist
