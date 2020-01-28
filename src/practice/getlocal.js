import react from 'react';

export class table extends React.Component {
    constructor() {
        let localvalue = JSON.parse(localStorage.getItem("formsData"));
        this.state = {
            table: localvalue
        };
    }


}
