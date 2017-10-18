import React from 'react'
import { connect } from 'react-redux'
import { SHOW_INFORMATION } from '../redux/consts'

import { Label, Concert } from '../styled'

export const Information = ({ data }) => <div>
    <div>
        <Label>Date: </Label>
        {data.datetime}
    </div>
    <div>
        <Label>Country:</Label>
        {data.venue.country}
    </div>
    <div>
        <Label>City:</Label>
        {data.venue.city}
    </div>
    <div>
        <Label>Name:</Label>
        {data.venue.name}
    </div>
</div>


class Event extends React.Component {
    render() {
        const { data, showInformation } = this.props
        return <Concert mt={1} onClick={() => showInformation(data)} style={{ cursor: 'pointer' }}>
            <Information data={data} />
        </Concert>
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showInformation: data => dispatch({ type: SHOW_INFORMATION, data: data })

    }
}
export default connect(null, mapDispatchToProps)(Event)
