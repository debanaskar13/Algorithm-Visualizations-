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
        document.querySelector('#sortBtn').disabled = false;
        document.querySelector('#nextBtn').disabled = false;
        let below50 = document.querySelector('#below50');
        let nullArray = document.querySelector('#null');
        let colors = [];
        let array = document.querySelector('#arrayInput').value.split(',');
        array.map((item, index) => {
            array[index] = Number(array[index]);
            colors.push('lightblue');
            return 0
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

    sortArray(time) {
        time = document.querySelector('#speedRange').value;
        document.querySelector('#sortBtn').disabled = true;
        document.querySelector('#nextBtn').disabled = true;
        document.querySelector('#createBtn').disabled = true;
        document.querySelector('#randomBtn').disabled = true;
        document.querySelector('#stopBtn').classList.remove('hidden');

        window.intervalId = setInterval(() => {
            this.next();
        }, time);
    }

    stopSorting() {
        clearInterval(window.intervalId);
        document.querySelector('#sortBtn').disabled = false;
        document.querySelector('#nextBtn').disabled = false;
        document.querySelector('#createBtn').disabled = false;
        document.querySelector('#randomBtn').disabled = false;
        document.querySelector('#stopBtn').classList.add('hidden');
    }

    selectRange(event) {
        clearInterval(window.intervalId);
        this.sortArray(event.target.value);
    }

    next() {
        if (this.state.sorted === true) {
            clearInterval(window.intervalId);
            document.querySelector('#stopBtn').classList.remove('hidden');
            document.querySelector('#createBtn').disabled = false;
            document.querySelector('#randomBtn').disabled = false;
            document.querySelector('#stopBtn').classList.add('hidden');
        };
        let array = this.state.array;
        let n = array.length;
        let i = this.state.i;
        let j = this.state.j;
        let swapped = false;
        let colors = this.state.colors;
        let sorted = this.state.sorted;

        if (sorted) {
            return
        } else {
            if (i < n) {
                if (j < n - i - 1) {
                    if (j !== 0) {
                        colors[j - 1] = 'lightblue'
                    }
                    colors[j + 1] = 'green'
                    colors[j] = 'green'
                    if (array[j] > array[j + 1]) {
                        let temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                        swapped = true;
                    }
                    if (swapped === false) {
                        j = j + 1;
                        colors[j - 1] = 'lightblue'
                        colors[j + 1] = 'green'
                    }
                }
            }
            if (j === n - i - 1) {
                colors[n - i - 1] = 'orange'
                colors[n - i] = 'orange'
                j = 0
                i = i + 1;
            }
        }
        if (i === n) {
            sorted = true;
        }
        this.setState({ array: array, i: i, j: j, swapped: swapped, sorted: sorted })
    }

    randomizeArray() {
        let arraySize = document.querySelector('#randomArraySize').value;
        if (arraySize) {
            this.createRandomArray(arraySize);
        } else {
            document.querySelector('#nullArraySize').classList.remove('hidden');
            setTimeout(() => {
                document.querySelector('#nullArraySize').classList.add('hidden');
            }, 3000)
        }
    }

    createRandomArray(size) {
        document.querySelector('#sortBtn').disabled = false;
        document.querySelector('#nextBtn').disabled = false;
        let array = [];
        let colors = [];
        let i = 0;
        let j = 0;

        for (let i = 0; i < size; i++) {
            let item = Math.ceil(Math.random() * size);
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
        this.createRandomArray(50);
        document.querySelector('#nextBtn').style.cssText = `margin-left:${(((1000 - this.state.array.length * 45) / 2) - 20 + this.state.array.length * 45 / 2)}px ;margin-right:10px`;
    }

    render() {
        return (
            <>
                <Navabr name='Bubble Sort Algorithm Visualization' />
                <div className="container">
                    <div className="row mt-4">
                        <div id='sort_viz'>
                            <svg id='viz-canvas' width='1200' height='250' >
                                {
                                    this.state.array.map((item, index) => {
                                        let width;
                                        let len = this.state.array.length;
                                        if (len < 15) {
                                            width = 45;
                                        } else {
                                            width = 850 / len;
                                        }
                                        let height = item * (200 / len);
                                        let offsetX = ((1200 - len * width) / 2);
                                        return <Svg key={index} width={width} height={height} fontSize={width / 2} number={item} translateX={offsetX + (width + width / 10) * index} translateY={230 - (height)} texty={height - 15} color={this.state.colors[index]} />
                                    })
                                }
                            </svg>
                        </div>
                    </div>
                    <div className='row'>
                        <button id='nextBtn' onClick={this.next.bind(this)} className='btn btn-small btn-info' style={{ marginLeft: `${(((1200 - this.state.array.length * 45) / 2) - 20 + this.state.array.length * 45 / 2)}px`, marginRight: '10px' }}><i className='fa fa-angle-right'></i></button>
                        <input onChange={this.selectRange.bind(this)} className='ml-5' type="range" min={1} max={1000} id="speedRange" />
                        <button id='stopBtn' onClick={this.stopSorting.bind(this)} className='btn ml-3 btn-danger hidden'>Stop</button>
                    </div>
                    <div className="row mt-5">
                        <input className='form-control' type="text" placeholder='Enter Comma Separated Integers...' id="arrayInput" style={{ width: '40%' }} />
                        <button id='createBtn' onClick={this.createArray.bind(this)} className='btn ml-3 btn-success'>
                            Create
                        </button>
                        <input className='form-control ml-3' type="number" placeholder='Enter Array Size' id="randomArraySize" style={{ width: '20%' }} />
                        <button id='randomBtn' onClick={this.randomizeArray.bind(this)} className='btn ml-3 btn-secondary'>
                            Randomize Array
                        </button>
                        <button id='sortBtn' onClick={() => { this.sortArray(1000) }} className='btn ml-3 btn-primary'>Start Sorting</button>
                        <div id='below50' className="col-12 text-danger mt-3 font-weight-bold hidden">
                            <i className='fas fa-praying-hands mr-2' style={{ fontSize: '48px', color: 'red' }}></i>Enter number below 50
                        </div>
                        <div id='null' className="col-12 text-danger mt-3 font-weight-bold hidden">
                            <i className='fas fa-praying-hands mr-2' style={{ fontSize: '48px', color: 'red' }}></i>Enter Some Number to create an Array
                        </div>
                        <div id='nullArraySize' className="col-12 text-danger mt-3 font-weight-bold hidden">
                            <i className='fas fa-praying-hands mr-2' style={{ fontSize: '48px', color: 'red' }}></i>Enter Array Size to create an Randomize Array
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BubbleSort
