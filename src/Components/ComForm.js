import React, { Component } from 'react';

class ComForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            address: '',
            technology: '',
            goodBoy: false,
        };
    }

    submitForm = (e) => {
        const { value, address, technology, goodBoy } = this.state;
        e.preventDefault();
        console.log(
            `my name is ${value}. i from ${address}. my favorite framwork is ${technology}. ${goodBoy}ly i am good boy`
        );
        this.setState({
            value: '',
            address: '',
            technology: '',
            goodBoy: '',
        });
    };

    handlerFrom = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                value: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                address: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                technology: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                goodBoy: e.target.checked,
            });
        } else {
            console.log('something went wrong');
        }
    };

    render() {
        const { value, address, technology, goodBoy } = this.state;
        return (
            <>
                <div>
                    <form onSubmit={this.submitForm}>
                        <div>
                            <input
                                type="text"
                                placeholder="enter something"
                                value={value}
                                onChange={this.handlerFrom}
                            />
                            <p>value: {value}</p>
                        </div>
                        <div>
                            <textarea
                                onChange={this.handlerFrom}
                                name="address"
                                value={address}
                                cols="30"
                                rows="10"
                            />
                            <p>value: {address}</p>
                        </div>
                        <div>
                            <select value={technology} onChange={this.handlerFrom}>
                                <option value="react">react</option>
                                <option value="angular">angular</option>
                            </select>
                            <p>value: {technology}</p>
                        </div>
                        <div>
                            <input type="checkbox" checked={goodBoy} onChange={this.handlerFrom} />
                        </div>
                        <div>
                            <button type="submit"> submit</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default ComForm;
