// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { locale } = this.props;
        return (
            <div>
                <h1>hello world {new Date().toLocaleTimeString(locale)}</h1>
            </div>
        );
    }
}

ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));
