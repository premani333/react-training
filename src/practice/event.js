import React from 'react';

class Event extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            fname: '',
            sname: '',
            name: ''
        }
    }
    add() {
        this.setState({
            name: (this.state.fname) + (this.state.sname)
        })
    }
    render() {
        return (
            <div>
                <h3>Enter your name</h3>
                FirstName:
                <input type="text" value={this.state.fname}
                    onChange={(e) => { this.setState({ fname: e.target.value }) }} />
                <br /><br />
                LastName:
                <input type="text" value={this.state.sname}
                    onChange={(e) => { this.setState({ sname: e.target.value }) }} />
                <br /><br />
                <button type='button' onClick={() => { this.add() }}>submit</button>
                <p>yourname:
                    <input type="text" value={this.state.name} />  </p>
            </div>
        );
    }
}
export default Event;