import React, { Component } from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';
import { throws } from 'assert';

export default class Example extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';
    chart1 = () => {
        let owners = {}
        this.props.data.map(m => {
            if (owners[m.owner]) {
                if (m.sold === true) {
                    owners[m.owner]++
                }
            }
            else {
                if (m.sold === true) {
                    owners[m.owner] = 1
                }
            }
        })
        return owners
    }
    updateData = (obj) => {
        let arr = []
        for (let i in obj) {
            const owner = {
                name: i,
                sales: obj[i]
            }
            arr.push(owner)
        }
        return arr
    }
    render() {
        let obj = this.chart1()
        let data = this.updateData(obj)
        console.log(data)
        return (
            <ComposedChart
                layout="vertical"
                width={700}
                height={400}
                data={data}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" barSize={20} fill="#413ea0" />
            </ComposedChart>
        );
    }
}
