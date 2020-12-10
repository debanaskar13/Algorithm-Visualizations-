import React, { Component } from 'react'

class Svg extends Component {
    render() {
        return (
            <>
                <g transform={`translate(${this.props.translateX},${this.props.translateY})`}>
                    <rect height={this.props.height} width={this.props.width} style={{ fill: this.props.color }}>
                    </rect>
                    <text style={{ fontSize: `${this.props.fontSize}` }} dy='.35em' x={this.props.width / 2} y={this.props.texty}>
                        {this.props.number}
                    </text>
                </g>
            </>
        )
    }
}

export default Svg
