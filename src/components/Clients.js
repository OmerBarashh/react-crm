import React, { Component } from 'react';
import '../componentsCss/Clients.css'
import Client from './Client'
class Clients extends Component {
    constructor() {
        super()
        this.state = {
            input: '' ,
            category: 'name'
        }
    }
    update = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        let searchBy = this.state.category
        console.log(searchBy)
        const data = this.props.data.filter(d => d[searchBy].includes(this.state.input))
        return (
            <div class="main">
                <div class="search">
                    <input type="text" name="input" placeholder="search" value={this.state.input} onChange={this.update}></input>
                    <select class="select" name = 'category' onChange = {this.update}>
                        <option value = 'name'>Name</option>
                        <option value = 'country'>Country</option>
                        <option value = 'emailType'>Email</option>
                        <option value = 'owner'>Owner</option>
                    </select>
                </div>
                <div class="yellowList">
                    <div>Name</div>
                    <div>Surname</div>
                    <div>Country</div>
                    <div>First Contact</div>
                    <div>Email</div>
                    <div>Sold</div>
                    <div>Owner</div>
                </div>
                <div class="clients">
                    {data.map(m => <Client data={m} />)}
                </div>
            </div>
        );
    }
}
export default Clients;