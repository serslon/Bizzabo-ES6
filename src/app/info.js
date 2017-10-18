import React from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'

import { getEvent } from '../redux/consts'
import { Label } from '../styled'
import debug from '../lib/debug'

const log = debug('info')

class Info extends React.Component {

    componentWillReceiveProps(next) {
        if (next.artist.name && next.artist.name !== this.props.artist.name) {
            log('send request for event')
            this.props.getEvent(next.artist.name)
        }
        return true
    }

    render() {
        const { artist, isFeatch } = this.props
        log(artist)
        return isFeatch ?
            <Flex>Data Loading</Flex> :
            <Flex mt={2}>
                <Box mr={2}><img src={artist.get('thumb_url')} /></Box>
                <Box>
                    <div><Label>Name: </Label>{artist.get('name')}</div>
                    {!!artist.get('facebook_page_url') && <Box>
                        <Label>Facebook: </Label>
                        <a href={artist.get('facebook_page_url')}>{artist.get('facebook_page_url')}</a>
                    </Box>}
                </Box>
            </Flex>
    }
}

function mapStateToProps(state) {
    return {
        artist: state.artist.get('detail'),
        isFeatch: state.artist.get('isFeatch')
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getEvent: artist => dispatch(getEvent(artist))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
