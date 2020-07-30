import React from 'react';
import Menu from './Menu';
import './SortingTimeVisualizer.css';

// import { getBubbleAnimations, bubbleAlgo } from '../algorithms/Bubble';
// import { getHeapAnimations, heapAlgo } from '../algoritHeap';
import { getInsertionAnimations } from '../algorithms/Insertion';
import { getMergeAnimations } from '../algorithms/Merge';
import { getQuickAnimations, quickAlgo } from '../algorithms/Quick';
import { getSelectionAnimations } from '../algorithms/Selection';

import UIfx from '../../node_modules/uifx';
import cardFlipMp3 from '../resources/card-flip.mp3';

const purple = '#8a2be2';
const red = '#dc143c';
const green = '#24682d';
const yellow = '#ffff00';

const cardFlip = new UIfx(cardFlipMp3, { throttleMs: 60 });

export default class SortingTimeVisualizer extends React.Component {
    constructor(props) {
        super(props);
        // array holds height values, bars holds the actual divs
        this.state = { array: [], bars: [], };
        
        this.cachedArray = [];
        this.animationInterval = 0;
        this.defaultLength = 60;
        this.maxHeight = 550;
        this.isRunning = false;

        this.generateArray = this.generateArray.bind(this);
        this.resetArray = this.resetArray.bind(this);
        this.speedChange = this.speedChange.bind(this);
        this.handleExecute = this.handleExecute.bind(this);
    }
    
    // initialize array to random values
    componentDidMount() {
        this.generateArray();
    }

    generateArray(length) {
        const array = document.getElementsByClassName('array');
        for (let i = 0; i < array.length; i++) {
            array[i].style.backgroundColor = green;
        }
        this.isRunning = false;

        let arraySize;
        if (length) {
            arraySize = length;
            this.defaultLength = length;
        } else {
            arraySize = this.defaultLength
        }

        const windowWidth = window.innerWidth;
        const margin = Math.max((windowWidth) / (10*arraySize), 1.5);
        const width = Math.max((windowWidth - 100) / (1.75*arraySize), 7);
        const topRadius = Math.max(width / 10, 3);
        const bottomRadius = topRadius / 3;

        // 85% of the distance between array container and menu
        this.maxHeight = 0.85 * (document.getElementById('bars-container').getBoundingClientRect().bottom - document.getElementById('menu-container').getBoundingClientRect().bottom)
        const newArray = [];
        for (let i = 0; i < arraySize; i++) {
            newArray.push(Math.floor(Math.random()*this.maxHeight + 15));
        }

        // const newArray = [ 250, 350, 100, 50, 550, 300, 175, 450 ];
        this.setState({
            array: newArray,
            bars: newArray.map((value, i) => <div className='array' key={i} idx={i} color={green} type={undefined} style={{
                height: value,
                margin: margin,
                width: width,
                borderTopLeftRadius: topRadius, borderTopRightRadius: topRadius,
                borderBottomLeftRadius: bottomRadius, borderBottomRightRadius: bottomRadius,
            }} />)
        });

        this.cachedArray = [];
        for (let i = 0; i < newArray.length; i++) {
            this.cachedArray.push(newArray[i]);
        }
    }

    resetArray() {
        const array = document.getElementsByClassName('array');
        const arraySize = array.length;

        for (let i = 0; i < arraySize; i++) {
            array[i].style.backgroundColor = green;
        }
        this.isRunning = false;

        const oldArray = []
        for (let i = 0; i < arraySize; i++) {
            array[i].style.height = this.cachedArray[i] + "px";
            array[i].type = undefined;
            oldArray.push(this.cachedArray[i])
        }

        this.setState({array: oldArray});
    }

    speedChange(interval) {
        // compute reciprocal of interval to make the slider feel linear
        this.animationInterval = interval < 5 ? 300 : 1500/interval - 15;      
        // this.animationInterval = 800;  
    }

    async animateSelectionSort() {
        const animations = getSelectionAnimations(this.state.array)
        const arr = document.getElementsByClassName('array')
        
        // first bar will be purple (current min)
        arr[0].style.backgroundColor = purple;
        await wait(this.animationInterval);
        
        for (let i = 1; i < animations.length; i++) {
            if (!this.isRunning) return;
            // swapping animations[i][0] and animations[i][1]
            if (typeof animations[i][1] === 'number') {
                cardFlip.play();
                // the last arraybar is currently red, change it back
                arr[animations[i - 1][0]].style.backgroundColor = green;
                const [idx1, idx2] = animations[i];

                arr[idx1].style.backgroundColor = yellow;
                arr[idx2].style.backgroundColor = yellow;
                await wait(this.animationInterval);

                const temp = arr[idx1].style.height;
                arr[idx1].style.height = arr[idx2].style.height;
                arr[idx2].style.height = temp;
                await wait(this.animationInterval);

                arr[idx1].style.backgroundColor = purple;
                arr[idx2].style.backgroundColor = green;
                await wait(this.animationInterval);
            }
            // coloring a bar red or purple to indicate comparison
            else {
                const [idx, color, type] = animations[i];
                arr[idx].style.backgroundColor = color;
                arr[idx].type = type;

                if (animations[i - 1][1] === red) {
                    arr[animations[i - 1][0]].style.backgroundColor = green;
                }
                // if this is the new min, reset the last min
                if (color === purple) {
                    for (let j = idx - 1; j > 0; j--) {
                        if (arr[j].type === 'sorted') {
                            break;
                        }
                        if (arr[j].style.backgroundColor === 'rgb(138, 43, 226)') { //purple
                            arr[j].style.backgroundColor = green;
                            break;
                        }
                    }
                }
                await wait(this.animationInterval);
            }
        }
        
        arr[arr.length - 1].style.backgroundColor = purple;
        await wait(this.animationInterval);

        for (let i = 0; i < arr.length / 2; i++) {
            arr[i].style.backgroundColor = green;
            arr[i].type = undefined;
            arr[arr.length - i - 1].style.backgroundColor = green;
            arr[arr.length - i - 1].type = undefined
            await wait(0.5 * this.animationInterval);
        }
        
        this.isRunning = false;
    }

    async animateInsertionSort() {
        const animations = getInsertionAnimations(this.state.array);
        const arr = document.getElementsByClassName('array');

        // first bar will be purple (current min)
        arr[0].style.backgroundColor = purple;
        await wait(this.animationInterval);
        
        for (let i = 0; i < animations.length; i++) {
            if (!this.isRunning) {
                for (let i = 0; i < arr.length; i++) {
                    arr[i].style.backgroundColor = green;
                }
                return;
            }

            // swapping
            if (typeof animations[i][1] === 'number') {
                const [idx1, idx2] = animations[i];
                
                arr[idx1].style.backgroundColor = yellow;
                arr[idx2].style.backgroundColor = red;
                await wait(this.animationInterval);

                const temp = arr[idx1].style.height;
                arr[idx1].style.height = arr[idx2].style.height;
                arr[idx2].style.height = temp;
                arr[idx1].style.backgroundColor = red;
                arr[idx2].style.backgroundColor = yellow;
                await wait(this.animationInterval);

                arr[idx2].style.backgroundColor = purple;
                if (i === animations.length - 1 || typeof animations[i + 1][1] !== 'number') {
                    cardFlip.play();
                    await wait(this.animationInterval);
                    arr[idx1].style.backgroundColor = purple;
                }
            }
            // coloring
            else {
                const [idx, color] = animations[i];
                arr[idx].style.backgroundColor = color;
                await wait(this.animationInterval);
            }
        }

        await wait(this.animationInterval);

        for (let i = 0; i < arr.length / 2; i++) {
            arr[i].style.backgroundColor = green;
            arr[arr.length - i - 1].style.backgroundColor = green;
            await wait(0.5 * this.animationInterval);
        }
        
        this.isRunning = false;
    }

    async animateMergeSort() {
        const animations = getMergeAnimations(this.state.array);
        const arr = document.getElementsByClassName('array');

        for (let i = 0; i < animations.length; i++) {
            if (!this.isRunning) return;

            const color = animations[i][0]
            if (animations[i].length === 3) {
                const [, idx1, idx2] = animations[i];

                arr[idx2].style.backgroundColor = yellow;
                await wait(this.animationInterval);

                const temp = arr[idx2].style.height;
                for (let i = idx2; i > idx1; i--) {
                    arr[i].style.height = arr[i - 1].style.height;
                }
                arr[idx1].style.height = temp;
                arr[idx1].style.backgroundColor = yellow;
                arr[idx2].style.backgroundColor = color;
                await wait(this.animationInterval);

                arr[idx1].style.backgroundColor = color;
                await wait(this.animationInterval);
            }
            else {
                const [, idx] = animations[i];
                arr[idx].style.backgroundColor = yellow;
                await wait(this.animationInterval);

                arr[idx].style.backgroundColor = color;
                await wait(this.animationInterval);
            }
        }

        for (let i = 0; i < arr.length / 2; i++) {
            arr[i].style.backgroundColor = green;
            arr[arr.length - i - 1].style.backgroundColor = green;
            await wait(0.5 * this.animationInterval);
        }

        this.isRunning = false;
    }

    async animateQuickSort() {
        console.log('Todo: Quicksort')
        // const animations = getQuickAnimations(this.state.array);
    }

    // async animateBubbleSort() {
    //     console.log('Todo: Bubble sort')
    //     const animations = getBubbleAnimations(this.state.array);
    // }

    // async animateHeapSort() {
    //     console.log('Todo: Heapsort')
    //     const animations = getHeapAnimations(this.state.array);
    // }

    // generates many large arrays, logs 'true' for each correct sort
    testSort(mySort) {
        const startTime = new Date();
        for (let i = 0; i < 100; i++) {
            const testArr = [];
            const length = Math.floor(Math.random()*1000)
            for (let j = 0; j < length; j++) {
                testArr.push(Math.floor(Math.random()*500))
            }
            const testArr2 = [...testArr];
    
            mySort(testArr);
            correctSort(testArr2);
    
            console.log(arrayEquality(testArr, testArr2));
        }
        const elapsedTime = new Date() - startTime;
        console.log("Elapsed time: ", elapsedTime, " ms");
    }

    async handleExecute(algorithm) {
        if (this.isRunning) return;
        this.isRunning = true;

        if (algorithm === 'selection')
            this.animateSelectionSort();
        else if (algorithm === 'insertion')
            this.animateInsertionSort();
        else if (algorithm === 'merge')
            this.animateMergeSort();
        else if (algorithm === 'quick')
            this.animateQuickSort();
        // else if (algorithm === 'bubble')
        //     this.animateBubbleSort();
        // else
        //     this.animateHeapSort();
    }

    // everything rendered on screen is here
    render() {
        return (
            <div>
                <div id='color-strip' />
                <Menu onGenerate={this.generateArray} onReset={this.resetArray} onSpeedChange={this.speedChange} onExecute={this.handleExecute} />
                    <div id='bars-container'>
                        {this.state.bars}
                        <button id='test-sort' onClick={this.testSort.bind(this, quickAlgo)}>Test Sort</button>
                    </div>
            </div>
        )
    }
}

// effectively a synchronous sleep function
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// for testing purposes
function correctSort(arr) {
    return arr.sort((a, b) => a - b);
}

// checks if two arrays are equal (for testing)
function arrayEquality(arr1, arr2) {
	if (arr1.length !== arr2.length) {
        return false;
    }
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
