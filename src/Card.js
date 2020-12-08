import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Card extends Component {
    render() {
        return (
            <>
                <Link to={this.props.source} className='mr-5'>
                    <div className="card card-main" style={{ width: '18rem', borderRadius: '10px' }}>
                        <img className='card-image' src={this.props.img_path} alt="" />
                        <div className="card-body">
                            <div className="card-tilte font-weight-bold">
                                {this.props.name}
                            </div>
                        </div>
                    </div>
                </Link>

            </>
        )
    }
}

export default Card
