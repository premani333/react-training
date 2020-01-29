import React from 'react';

export default class table extends React.Component {
    constructor(props) {
        super(props);
        let localvalue = JSON.parse(localStorage.getItem('formsData'));
        const data = [localvalue];
        console.log(localvalue);


        for (let i = 0; i < data.length; i++) {
            data.push({ localvalue })


        }
        this.state = { data };
        console.log(this.state = { data });

    }

    render() {
        return (

            this.state.data.map((person, index) =>
                <p>{person.name}</p>
            )

        );
    }
}