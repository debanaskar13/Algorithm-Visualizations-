import React, { Component } from 'react'
import Navabr from './Navabr';
import Svg from './Svg';

class BubbleSort extends Component {
    constructor(props) {
        super(props)

        this.state = {
            array: [42, 16, 12, 4, 25, 50],
            i: 0,
            j: 0,
            swapped: false,
            colors: [],
            sorted: false,
        }
    }

    createArray() {

        let below50 = document.querySelector('#below50');
        let nullArray = document.querySelector('#null');
        let colors = [];
        let array = document.querySelector('#arrayInput').value.split(',');
        array.map((item, index) => {
            array[index] = Number(array[index]);
            colors.push('lightblue');
        });
        for (let i = 0; i < array.length; i++) {
            if (array[i] > 50) {
                below50.classList.remove('hidden');
                setTimeout(() => {
                    below50.classList.add('hidden');
                }, 5000)
                return
            }
        }
        if (array[0] !== 0) {
            if (document.querySelector('#sortBtn').classList.value.includes('hidden')) {
                document.querySelector('#sortBtn').classList.remove('hidden');
            }
            this.setState({ array: array, i: 0, j: 0, colors: colors, sorted: false })
        } else {
            nullArray.classList.remove('hidden');
            setTimeout(() => {
                nullArray.classList.add('hidden');
            }, 5000)
            return
        }
        if (document.querySelector('#nextBtn').classList.value.includes('hidden')) {
            document.querySelector('#nextBtn').classList.remove('hidden');
        }
    }

    sortArray() {
        let array = this.state.array;
        let n = array.length;
        let swapped = false;
        let colors = [];

        //  Traverse through all array elements
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) {
                break
            }
            colors.push('orange')
        }
        this.setState({ array: array, i: array.length - 1, j: 0, colors: colors, sorted: true })
        document.querySelector('#sortBtn').classList.add('hidden');
        document.querySelector('#nextBtn').classList.add('hidden');
    }

    next() {
        let array = this.state.array;
        let n = array.length;
        let i = this.state.i;
        let j = this.state.j;
        let swapped = this.state.swapped;
        let colors = this.state.colors;

        if (i < n) {
            if (j < n - i - 1) {
                if (j != 0) {
                    colors[j] = 'lightblue'
                    colors[j + 2] = 'green'
                }
                colors[j + 1] = 'green'
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true;
                }
                j = j + 1;
            }
            if (j === n - i - 1) {
                colors[n - i - 1] = 'orange'
                colors[n - i] = 'orange'
                j = 0
                i = i + 1;
                if (swapped === false) {
                    console.log('sorted')
                }
            }
        }

        this.setState({ array: array, i: i, j: j, swapped: swapped })
        if (i === 0 && j === 0) {
            document.querySelector('#prevBtn').classList.add('hidden');
            document.querySelector('#nextBtn').style.cssText = `margin-left:${(((1000 - this.state.array.length * 45) / 2) - 20 + this.state.array.length * 45 / 2)}px ;margin-right:10px`;

        } else {

            document.querySelector('#prevBtn').classList.remove('hidden')
            document.querySelector('#nextBtn').style.cssText = `margin-left:0px ;margin-right:10px`;
        }

        console.log(i, j, array)
    }

    previous() {
        // let array = this.state.array;
        // let n = array.length;
        // let i = this.state.i;
        // let j = this.state.j;
        // let swapped = this.state.swapped;

        // if (i < n) {
        //     if (j < n - i - 1) {
        //         if (array[j - 1] < array[j]) {
        //             let temp = array[j - 1];
        //             array[j - 1] = array[j];
        //             array[j] = temp;
        //         }
        //         j = j - 1;
        //     }
        //     if (j === 0) {
        //         j = n - i - 1
        //         i = i - 1;
        //     }
        // }

        // this.setState({ array: array, i: i, j: j, swapped: swapped })
        // if (i === 0 && j === 0) {
        //     document.querySelector('#prevBtn').classList.add('hidden');
        //     document.querySelector('#nextBtn').style.cssText = `margin-left:${(((1000 - this.state.array.length * 45) / 2) - 20 + this.state.array.length * 45 / 2)}px ;margin-right:10px`;

        // } else {

        //     document.querySelector('#prevBtn').classList.remove('hidden')
        //     document.querySelector('#nextBtn').style.cssText = `margin-left:0px ;margin-right:10px`;
        // }

        // console.log(i, j, array)
    }

    randomArray() {
        let array = [];
        let colors = [];
        let i = 0;
        let j = 0;

        for (let i = 1; i < 15; i++) {
            let item = Math.ceil(Math.random() * 50);
            array.push(item);
            colors.push('lightblue')
        }
        if (document.querySelector('#sortBtn').classList.value.includes('hidden')) {
            document.querySelector('#sortBtn').classList.remove('hidden');
        }
        this.setState({ array: array, i: i, j: j, colors: colors, sorted: false })
        if (document.querySelector('#nextBtn').classList.value.includes('hidden')) {
            document.querySelector('#nextBtn').classList.remove('hidden');
        }
    }

    componentDidMount() {
        this.randomArray();
        document.querySelector('#nextBtn').style.cssText = `margin-left:${(((1000 - this.state.array.length * 45) / 2) - 20 + this.state.array.length * 45 / 2)}px ;margin-right:10px`;
    }

    render() {

        return (
            <>
                <Navabr name='Bubble Sort Algorithm Visualization' />
                <div className="container">
                    <div className="row mt-4">
                        <div id='sort_viz'>
                            <svg id='viz-canvas' width='1000' height='250' >
                                {
                                    this.state.array.map((item, index) => {
                                        let height = item * 4.5;
                                        let offsetX = ((1000 - this.state.array.length * 45) / 2);
                                        return <Svg height={height} number={item} translateX={offsetX + 50 * index} translateY={230 - (height)} texty={height - 15} color={this.state.colors[index]} />
                                    })
                                }
                            </svg>
                        </div>
                    </div>
                    <div className='row'>
                        <button id='prevBtn' onClick={this.previous.bind(this)} style={{ marginLeft: `${(((1000 - this.state.array.length * 45) / 2) - 20 + this.state.array.length * 45 / 2)}px`, marginRight: '10px' }} className='btn btn-small btn-info hidden'><i className='fa fa-angle-left'></i></button>
                        <button id='nextBtn' onClick={this.next.bind(this)} className='btn btn-small btn-info'><i className='fa fa-angle-right'></i></button>
                    </div>
                    <div className="row mt-5">
                        <div className='col-12 font-weight-bold mb-3'>Enter comma separated Number :</div>

                        <input className='form-control' type="text" id="arrayInput" style={{ width: '60%' }} />
                        <button id='createBtn' onClick={this.createArray.bind(this)} className='btn ml-3 btn-success'>
                            Create
                        </button>
                        <button id='createBtn' onClick={this.randomArray.bind(this)} className='btn ml-3 btn-secondary'>
                            Random Array
                        </button>
                        <button id='sortBtn' onClick={this.sortArray.bind(this)} className='btn ml-3 btn-primary'>Sort</button>
                        <div id='below50' className="col-12 text-danger mt-3 font-weight-bold hidden">
                            Enter number below 50
                        </div>
                        <div id='null' className="col-12 text-danger mt-3 font-weight-bold hidden">
                            Enter Some Number to create an Array
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BubbleSort
