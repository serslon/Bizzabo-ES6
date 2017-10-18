import React from 'react'
import { connect } from 'react-redux'
import { Box } from 'grid-styled'

import { Header, Notice } from '../styled'
import Event from '../componenets/event'
import debug from '../lib/debug'

const log = debug('favorite')

class Favorites extends React.Component {
    render() {
        const { list } = this.props
        log(list)
        return <Box>
            <Header>Favorites</Header>
            <Box>
                {!list.size && <Notice>No favirites Yet</Notice>}
                {!!list.size && list.map((data, idx) => <Event data={data} key={idx} />)}
            </Box>
        </Box>
    }
}

function mapStateToProps(state) {
    return {
        list: state.favorite.get('list'),
    }
}

export default connect(mapStateToProps)(Favorites)
