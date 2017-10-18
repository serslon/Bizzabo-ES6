const host = 'https://rest.bandsintown.com/'

export const GET_ARTIST = 'GET_ARTIST'
export const GET_EVENTS = 'GET_EVENTS'

export const GET_FAVORITE = 'GET_FAVORITE'
export const SET_FAVORITE = 'SET_FAVOTITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export const SHOW_INFORMATION = 'SHOW_INFORMATION'
export const HIDE_INFORMATION = 'HIDE_INFORMATION'

export const getArtist = artist => ({
    type: GET_ARTIST,
    $payload: {
        url: `${host}artists/${artist}?app_id=bizzabo-test`
    }
})

export const getEvents = artist => ({
    type: GET_EVENTS,
    $payload: {
        url: `${host}artists/${artist.replace('/', '')}/events?app_id=bizzabo-test`
    }
})
