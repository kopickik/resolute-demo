import React, { Component } from 'react';

class SingleInput extends Component {
    render() {
        const { label, onChange } = this.props;

        return (
            <div className="input">
                <h4 className="label">{label}</h4>
                <input type="number" onChange={onChange} min={0} max={10} />
            </div>
        );
    }
}

export default SingleInput;