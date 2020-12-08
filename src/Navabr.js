import React, { Component } from 'react'

class Navabr extends Component {
    render() {
        return (
            <>
                <div className='navbar bg-green text-yellow font-big'>
                    <div>
                        {this.props.name}
                    </div>
                </div>
            </>
        )
    }
}

export default Navabr
