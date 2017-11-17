import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
	constructor(props){
		super(props);
		this.state ={
			chartData:{
				labels: ['loven','loven','loven','loven','loven'],
				datasets:[{
					label: 'Population',
					data:[
					2000,
					2000,
					2000,
					2000,
					2000],
					backgroundColor:['rgba(255,0,0,0.3)','rgba(255,0,0,0.3)','rgba(255,0,0,0.3)','rgba(255,0,0,0.3)','rgba(255,0,0,0.3)'
					]
				}]
			}
		}

	}
    render() {
        return ( < div className = "Chart" >

            <Bar 
            	data ={this.state.chartData}
            	options = {{
                maintainAspectRatio: false
                }}
            /> 
            </div>
        )
    }
}
export default Chart;
