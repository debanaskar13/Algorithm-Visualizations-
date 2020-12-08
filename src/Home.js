import React, { Component } from 'react'
import Card from './Card'
import Navabr from './Navabr'

class Home extends Component {
    render() {
        return (
            <>
                <Navabr name='Data Structure and Algorithm Visualizations' />
                <div className='container'>
                    <div className='row mt-5'>
                        <Card source='/BubbleSort' name='Bubble Sort' img_path='https://visualgo.net/img/gif/sorting.gif' />
                        <Card source='/SelectionSort' name='Selection Sort' img_path='https://i.stack.imgur.com/5ai2E.jpg' />
                        <Card source='BinarySearch' name='Binary Search' img_path='https://visualgo.net/img/gif/bst.gif' />
                    </div>
                </div>
            </>
        )
    }
}

export default Home
