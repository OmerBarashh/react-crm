import React, { Component } from 'react';
import '../componentsCss/Navbar.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Clients from './Clients'
import Actions from './Actions'
import Analytics from './Analytics'
class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div class="navbar">
                        <Link to="/clients"><div class="navbarList">Clients</div></Link>
                        <Link to="/actions"><div class="navbarList">Actions</div></Link>
                        <Link to="/analytics"><div class="navbarList">Analytics</div></Link>
                    </div>
                    <Route path="/clients" exact render={() => <Clients data={this.props.data} />} />
                    <Route path="/actions" exact render={() => <Actions dataOwners={this.props.dataOwners} updateClients={this.props.updateClients} data={this.props.data} />} />
                    <Route path="/analytics" exact render={() => <Analytics data={this.props.data} />} />
                </div>
            </Router>
        );
    }
}
export default Navbar;