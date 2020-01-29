import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';
import Form from './form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Getlocal from './getlocal';



export default class Commentlist extends React.Component {

    state = {
        fields: {},
    };
    onSubmit = fields => {
        this.setState({ fields });
        console.log(fields);

    };

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/' className="btn btn-light">Home</Link>
                            </li>
                            <br />
                            <li>
                                <Link to='/adduser' className="btn btn-success "  >
                                    Adduser
                               </Link>
                            </li>
                             <Getlocal /> 

                        </ul>
                        <ul></ul>
                    </nav>
                    <Switch>
                        <Route path="/adduser">

                            <Adduser />

                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>

                    </Switch>

                </div>
            </Router>
        );
    }
}


function Adduser() {
    return <div>

        <Form onSubmit={fields => this.onSubmit(fields)} />
    </div>
}
function Home() {
    return <h4>click the Adduser to update your details</h4>
}
