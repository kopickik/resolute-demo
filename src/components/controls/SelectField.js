import React, { Component } from 'react'
import DropdownList from 'react-widgets/lib/DropdownList'

class SelectField extends Component {
    render() {
        const { label } = this.props;

        return (
            <div className="input">
                <h4 className="label">{label}</h4>
                <DropdownList {...this.props}/>
            </div>
        )
    }
}

export default SelectField