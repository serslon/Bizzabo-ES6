import { Map, List } from 'immutable'
import { GET_FAVORITE, SET_FAVORITE, REMOVE_FAVORITE } from './consts'

const getFavorites = (artist) =>
    List(localStorage.getItem(artist) ? JSON.parse(localStorage.getItem(artist)) : [])

const setFavorite = (artist, data, store) => {
    localStorage.setItem(artist, JSON.stringify(store.push(data).toJS()));
    return getFavorites(artist);
}

const removeFavorite = (artist, data, store) => {
    const idx = store.findKey(el => el.id === data.id)
    if (idx !== undefined) {
        localStorage.setItem(artist, JSON.stringify(store.delete(idx).toJS()));
    }
    return getFavorites(artist)
}

const actionFunctions = {
    [GET_FAVORITE]: (state, action) => state
        .set('list', getFavorites(action.artist))
        .set('artist', action.artist),
    [SET_FAVORITE]: (state, action) => state
        .set('list', setFavorite(state.get('artist'), action.data, state.get('list'))),
    [REMOVE_FAVORITE]: (state, action) => state
        .set('list', removeFavorite(state.get('artist'), action.data, state.get('list')))
}

const favorites = (state = Map({ artist: '', list: List() }), action) => actionFunctions[action.type] ? actionFunctions[action.type](state, action) : state

export default favorites
