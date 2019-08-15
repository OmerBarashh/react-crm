import React, { Component } from 'react';
import axios from 'axios'
class Actions extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            country: '',
            owner: '',
            nameUpdate: '',
            emailType: '',
            ownerUpdate: ''
        }
    }
    updateClients() {
        this.props.updateClients()
    }
    update = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    dateToday = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        return today
    }
    addNewClient = async () => {
        const client = {
            name: this.state.name,
            email: this.state.email,
            firstContact: this.dateToday(),
            emailType: null,
            sold: false,
            owner: this.state.owner,
            country: this.state.country
        }
        await axios.post('http://localhost:4000/client', client, function (res) {
        })
        alert("done")
        this.updateClients()
    }
    declare = async () => {
        const client = {
            name: this.state.nameUpdate
        }
        await axios.post('http://localhost:4000/declare', client, function (res) {
        })
        alert("done")
        this.updateClients()
    }
    transfer = async () => {
        const client = {
            name: this.state.nameUpdate,
            ownerUpdate: this.state.ownerUpdate
        }
        await axios.post('http://localhost:4000/transfer', client, function (res) {
        })
        alert("done")
        this.updateClients()
    }
    changeEmailType = async () => {
        const client = {
            name: this.state.nameUpdate,
            emailType: this.state.emailType
        }
        await axios.post('http://localhost:4000/changeEmailType', client, function (res) {
        })
        alert("done")
        this.updateClients()
    }
    render() {
        return (
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s2">
                            <input placeholder="Name" onChange={this.update} type="text" value={this.state.name} name="name" class="validate"></input>
                        </div>
                        <div class="input-field col s2">
                            <input placeholder="Email" onChange={this.update} type="text" value={this.state.email} name="email" class="validate"></input>
                        </div>
                        <div class="input-field col s2">
                            <input placeholder="Country" onChange={this.update} type="text" value={this.state.country} name="country" class="validate"></input>
                        </div>
                        <div class="input-field col s2">
                            <input placeholder="Owner" onChange={this.update} type="text" value={this.state.owner} name="owner" class="validate"></input>
                        </div>
                        <div class="input-field col s2">
                            <a onClick={this.addNewClient}>ADD NEW CLIENT</a>
                        </div>
                    </div>
                </form>
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s2">
                            <input list="clients" placeholder="Client name" onChange={this.update} value={this.state.nameUpdate} name="nameUpdate" class="validate"></input>
                            <datalist id="clients" onChange={this.update} name="nameUpdate">
                                {this.props.data.map(m => <option value={m.name}></option>)}
                            </datalist>
                        </div>
                        <div class="input-field col s2">
                            <select onChange={this.update} class="select" name="ownerUpdate">
                                <option disabled selected>Owner</option>
                                {this.props.dataOwners.map(a => <option value={a}>{a}</option>)}
                            </select>
                        </div>
                        <div class="input-field col s2">
                            <select class="select" onChange={this.update} name="emailType">
                                <option disabled selected>Email type</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div class="input-field col s2">
                            <a onClick={this.transfer}>TRANSFER</a>
                        </div>
                        <div class="input-field col s2">
                            <a onClick={this.changeEmailType}>SEND</a>
                        </div>
                        <div class="input-field col s2">
                            <a onClick={this.declare}>DECLARE</a>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}
export default Actions;