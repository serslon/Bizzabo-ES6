import React from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'

import Who from './who'
import Inform from './info'
import Events from './events'
import Favorite from './favorites'
import EventInformation from './eventInformation'

const FullInformation =
    <Flex>
        <Box w={1 / 2}>
            <Who />
            <Inform />
            <Events />
        </Box>
        <Box w={1 / 2}>
            <Favorite />
        </Box>
    </Flex>

class App extends React.Component {

    render() {
        const { isShow } = this.props
        return isShow ? <EventInformation /> : FullInformation
    }
}

function mapStateToProps(state) {
    return {
        isShow: state.information.get('isShow'),
    }
}

export default connect(mapStateToProps)(App)
