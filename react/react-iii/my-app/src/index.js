import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// let count = 0;

// class Contador extends React.Component {
//     addUm = () => {
//         count++
//         console.log(count)
//         ReactDOM.render(< Contador />, document.getElementById('root'));
//     }
//     subtrairUm = () => {
//         count--
//         console.log(count)
//         ReactDOM.render(< Contador />, document.getElementById('root'));
//     }
//     resetAll = () => {
//         count = 0
//         console.log(count)
//         ReactDOM.render(< Contador />, document.getElementById('root'));
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Count: {count}</h2>
//                 <button onClick={this.addUm}>+1</button>
//                 <button onClick={this.subtrairUm}>-1</button>
//                 <button onClick={this.resetAll}>Reset</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(< Contador />, document.getElementById('root'));

class Hidenshow extends React.Component {
    constructor(props)

    changeHidenshow = () => {
        if (this.state.visibilidade === true){

        } else {
            this.setState(() => {
                return {
                    visibilidade:true
                }
            })
        }
    }

    render() {
        return (
        <div>
            
            <h1>Hide 'n Show!</h1>
            <button onClick={}>{this.state.visibilidade ? Esconder visibilidade : mostrar visibilidade}</button>
            
            <p>{ghost}</p>
        </div>
    )}
}

ReactDOM.render(< Hidenshow />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
