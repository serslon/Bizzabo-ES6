import React from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'

import { SET_FAVORITE, REMOVE_FAVORITE, HIDE_INFORMATION } from '../redux/consts'
import { Information } from '../componenets/event'
import { Header, Return, Section, Label } from '../styled'
import debug from '../lib/debug'

const log = debug('evntInformation')

class EventInformation extends React.Component {

    toggleFavorite(evnt) {
        evnt.target.checked ? this.props.setFavorite(this.props.information) : this.props.removeFavorite(this.props.information)
    }

    render() {
        const { information, favorites, closeExtendInformation } = this.props
        const inf = information.toJS();
        const isFavorite = favorites.findKey(el => el.id === inf.id !== undefined)

        return <Flex column>
            <Box w={1 / 4}>
                <Return onClick={() => closeExtendInformation()}>&larr; Back</Return>
            </Box>
            <Flex>
                <Box w={1 / 4}>
                    <Header>Who's in town?</Header>
                </Box>
                <Box style={{ lineHeight: '78px' }}>
                    <label><input type="checkbox" onChange={(evnt) => this.toggleFavorite(evnt)} checked={isFavorite} /> Add to Favotites</label>
                </Box>
            </Flex>
            <Section>
                <div><Label>Lineup: </Label> {inf.lineup.join(' ')}</div>
                <div><Label>Date: </Label> {inf.datetime}</div>
                <div><Label>Sale Date: </Label> {inf.on_sale_datetime}</div>
            </Section>
            <Section>
                <Information data={inf} />
            </Section>
            <Section>
                {inf.offers.map((elm, idx) => <div key={idx}>
                    <div><Label>Type:</Label>{elm.type}</div>
                    <div><Label>Status:</Label>{elm.status}</div>
                    <div><Label>Link:</Label><a href={elm.url}>{elm.url}</a></div>
                </div>
                )}
            </Section>
            <Section>
                ** Need implemented show map **
            </Section>
        </Flex>
    }
}

function mapStateToProps(state) {
    return {
        information: state.information.get('information'),
        favorites: state.favorite.get('list')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFavorite: data => dispatch({ type: SET_FAVORITE, data: data.toJS() }),
        removeFavorite: data => dispatch({ type: REMOVE_FAVORITE, data: data.toJS() }),
        closeExtendInformation: () => dispatch({ type: HIDE_INFORMATION })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInformation)
