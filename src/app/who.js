import React from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'

import { Header, Input, Send } from '../styled'
import { getArtist, getEvents, GET_FAVORITE } from '../redux/consts'
import debug from '../lib/debug'

const log = debug('who')

class Who extends React.Component {

    // TODO need restore state from global after returned from extend information pages
    constructor(props) {
        super(props)
        this.state = {
            artist: ''
        }
        this.changeArtist = this.changeArtist.bind(this);
        this.catchEnter = this.catchEnter.bind(this);
    }

    changeArtist(evnt) {
        this.setState({ artist: evnt.target.value })
    }

    catchEnter(evnt) {
        if (evnt.charCode === 13) {
            this.findResult();
        }
        return true;
    }

    cleanResult() {
        log('Clear result search')
        this.setState({ artist: '' })
        this.input.focus()
    }

    findResult() {
        if (!this.state.artist) {
            log('Nothog to send')
            return
        }
        log('Send Search Result')
        this.props.findArtist(this.state.artist);
    }

    render() {
        const { artist } = this.state
        return <Box>
            <Header>Who's in town?</Header>
            <Input
                autoFocus
                innerRef={x => this.input = x}
                placeholder="Enter artist"
                value={artist}
                onChange={this.changeArtist}
                onKeyPress={this.catchEnter}
            />
            <Send onClick={() => this.findResult()}>Find</Send>
            <Send onClick={() => this.cleanResult()}>Clean</Send>
        </Box>

    }
}

const mapDispatchToProps = dispatch => {
    return {
        findArtist: artist => {
            dispatch(getArtist(artist))
            dispatch(getEvents(artist))
            dispatch({ type: GET_FAVORITE, artist: artist })
        }
    }
}
export default connect(null, mapDispatchToProps)(Who)
