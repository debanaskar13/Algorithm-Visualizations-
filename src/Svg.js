import React, { Component } from 'react'

class Svg extends Component {
    render() {
        return (
            <>
                <g transform={`translate(${this.props.translateX},${this.props.translateY})`}>
                    <rect height={this.props.height} width='45' style={{ fill: this.props.color }}>
                    </rect>
                    <text dy='.35em' x='22.5' y={this.props.texty}>
                        {this.props.number}
                    </text>
                </g>
            </>
        )
    }
}

export default Svg
