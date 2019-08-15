import React, { Component } from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Scatter,
} from 'recharts';

export default class Example2 extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9xopwa9v/';
    chart2 = () => {
        let sales = {}
        this.props.data.map(m => {
            if (sales[m.country]) {
                if (m.sold === true) {
                    sales[m.country]++
                }
            }
            else {
                if (m.sold === true) {
                    sales[m.country] = 1
                }
            }
        })
        return sales
    }
    updateData = (obj) => {
        let arr = []
        for (let i in obj) {
            const sale = {
                country: i,
                sales: obj[i]
            }
            arr.push(sale)
        }
        return arr
    }
    render() {
        let obj = this.chart2()
        let data = this.updateData(obj)
        return (
            <ComposedChart
                width={700}
                height={400}
                data={data}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" barSize={20} fill="#413ea0" />
                {/* <Scatter dataKey="cnt" fill="red" /> */}
            </ComposedChart>
        );
    }
}
