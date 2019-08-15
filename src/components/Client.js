import React, { Component } from 'react';
class Client extends Component {
    render() {
        const client = this.props.data
        return (
            <div class="client">
                <div>{client.name.split(" ")[0]}</div>
                <div>{client.name.split(" ")[1]}</div>
                <div>{client.country}</div>
                <div>{client.firstContact.split("T")[0]}</div>
                <div>{client.emailType === null ? "-" : client.emailType}</div>
                <div>{client.sold === true ? <i class="tiny material-icons">check</i> : "-"}</div>
                <div>{client.owner}</div>
            </div>
        );
    }
}
export default Client;