import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink

} from 'react-router-dom';


export default function paths() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/one' activeClassName="selected" >One</NavLink>
                        </li>
                        <li>
                            <NavLink to='/two' activeClassName="selected"> Two</NavLink>
                        </li>
                        <li>
                            <NavLink to="/three" activeClassName="selected">Three</NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/three">
                        < Three />
                    </Route>
                    <Route path="/two">
                        < Two />
                    </Route>
                    <Route path="/one">
                        < One />
                    </Route>
                </Switch>
            </div>
        </Router>

    );

}
function One() {
    return <h1>1</h1>
}
function Two() {
    return <h1>2</h1>
}
function Three() {
    return <h1>3</h1>
} 
let setvalue= JSON.parse(localStorage.getItem('formsData'));
   
        if (setvalue && setvalue.length){
            setvalue.push(this.state);
        }else{
            setvalue=[this.state]
        }
        localStorage.setItem('formsData', JSON.stringify(setvalue));