import React from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'

import { Label, Concert } from '../styled'
import Event from '../componenets/event'
import debug from '../lib/debug'

const log = debug('event')

const Loading = <Box>Data Loading</Box>
const NoData = <Box>No Data</Box>

class Events extends React.Component {
    render() {
        const { list, isFeatch } = this.props
        log(this.props)
        return <Flex column m={2}>
            {isFeatch && Loading}
            {!isFeatch && !list.size && NoData}
            {!isFeatch && !!list.size && list.map((data, idx) => <Event data={data} key={idx} />)}
        </Flex>
    }
}

function mapStateToProps(state) {
    return {
        list: state.event.get('list'),
        isFeatch: state.event.get('isFeatch')
    }
}

export default connect(mapStateToProps)(Events)
