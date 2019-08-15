

import React, { Component } from 'react';
import Example from './Chart1'
import Example2 from './Chart2'
import '../componentsCss/Analytics.css'
class Analytics extends Component {
    constructor() {
        super()
        this.state = {}
    }
    newMonth = () => {
        let count = 0
        const d = new Date()
        const nowMonth = d.getMonth() + 1
        const nowYear = d.getFullYear()
        this.props.data.map(m => {
            const checkMonth = parseInt(m.firstContact.split('-')[1])
            const checkYear = parseInt(m.firstContact.split('-')[0])
            if (nowMonth === checkMonth && nowYear === checkYear) {
                count++
            }
        })
        return count
    }
    emailSent = () => {
        let count = 0
        this.props.data.map(m => {
            if (m.emailType !== null)
                count++
        })
        return count
    }
    outClients = () => {
        let count = 0
        this.props.data.map(m => {
            if (m.sold !== true)
                count++
        })
        return count
    }
    hotCountry = () => {
        let countries = {}
        this.props.data.map(m => {
            if (countries[m.country]) {
                countries[m.country]++
            } else {
                countries[m.country] = 1
            }
        })
        let max = 0
        let country = ""
        for (let i in countries) {
            if (countries[i] > max) {
                max = countries[i]
                country = i
            }
        }
        return country
    }
    render() {
        return (
            <div>
                <div class="bar">
                    <div class="smallBar">
                        <img src="https://i.gyazo.com/57e307c04da9de2a7eea299af1135828.png" />
                        <div class="data">
                            <div class="num">{this.newMonth()}</div>
                            New Users
                        </div>
                    </div>
                    <div class="smallBar">
                        <img src="https://i.gyazo.com/ebd336e62f85079e7d4937329a5e9de8.png" />
                        <div class="data">
                            <div class="num">{this.emailSent()}</div>
                            Emails Sent
                        </div>
                    </div>
                    <div class="smallBar">
                        <img src="https://i.gyazo.com/697f3db8d91df8dd62a105a04b56bfb4.png" />
                        <div class="data">
                            <div class="num">{this.outClients()}</div>
                            Outstanding Clients
                        </div>
                    </div>
                    <div class="smallBar">
                        <img src="https://i.gyazo.com/0bea41805a5ffe0b604fc15c2651fe8e.png" />
                        <div class="data">
                            <div class="num"> {this.hotCountry()}</div>
                            Hottest Country
                        </div>
                    </div>
                </div>
                <div class="charts">
                    <div><Example data={this.props.data} /></div>
                    <div><Example2 data={this.props.data} /></div>
                </div>
            </div>
        );
    }
}
export default Analytics;