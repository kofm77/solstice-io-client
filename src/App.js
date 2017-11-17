import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import {Bar, Line, Pie, Radar, Polar, Bubble, Scatter, Doughnut} from 'react-chartjs-2';
import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import $ from 'jquery'


class App extends Component {
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
    const { response } = this.state;
    socket.on("FromAPI2", data => this.setState({ response2: data }));
    const { response2 } = this.state;
    socket.on("FromAPI3", data => this.setState({ response3: data }));
    const { response3 } = this.state;
    socket.on("FromAPI4", data => this.setState({ response4: data }));
    const { response4 } = this.state;
    $(document).ready(function() {
        $('canvas:eq(0)').hide();
        $('canvas:eq(1)').show();
        $('canvas:eq(2)').hide();
        $('canvas:eq(3)').hide();
        $('p').hide();
    });
    
     $('#kwhAct').click(function() {
        $('canvas:eq(0)').hide();
        $('canvas:eq(1)').show();
        $('canvas:eq(2)').hide();
        $('canvas:eq(3)').hide();
        $('p').hide();
});
     $('#billAct').click(function() {

        $('canvas:eq(0)').hide();
        $('canvas:eq(1)').hide();
        $('canvas:eq(2)').show();
        $('canvas:eq(3)').hide();
        $('p').hide();
});
     $('#saveAct').click(function() {

        $('canvas:eq(0)').hide();
        $('canvas:eq(1)').hide();
        $('canvas:eq(2)').hide();
        $('canvas:eq(3)').show();
        $('p').hide();
});
     $('#combined').click(function() {
        $('canvas:eq(0)').show();
        $('canvas:eq(1)').hide();
        $('canvas:eq(2)').hide();
        $('canvas:eq(3)').hide();
        $('p').hide();
});
     $('#showAll').click(function() {

        $('canvas:eq(0)').show();
        $('canvas:eq(1)').show();
        $('canvas:eq(2)').show();
        $('canvas:eq(3)').show();
        $('p').show();
});

        
  }
  constructor() {

    super();
    this.state = {
      response: false,
      response2: false,
      response3: false,
      response4: false,
      endpoint: "http://127.0.0.1:4001",
      
    };
  }
  

  render() {
    const { response } = this.state;
    const { response2 } = this.state;
    const { response3 } = this.state;
    const { response4 } = this.state;
    var dateArr=[];
    var kwhAr=[];
    var bckGr=[];
    var bckGr2=[];
    var bckGr3=[];
    var billAr=[];
    var savingAr=[];
    for (var i = response.length;  i--;) {
      dateArr.push(response[i]);
      kwhAr.push(response2[i]);
      billAr.push(response3[i]);
      savingAr.push(response4[i]);
      bckGr.push('rgba(255,0,0,0.3)');
      bckGr2.push('rgba(124, 191, 100,0.3)');
      bckGr3.push('rgba(42, 153, 214,0.3)');
    }
    
    var chartData={
        labels: dateArr,
        datasets:[{
          label: 'Kwh',
          data:kwhAr,
          backgroundColor: bckGr3
        }]
      }
    var chartData2={
        labels: dateArr,
        datasets:[{
          label: 'Bills',
          data:billAr,
          backgroundColor: bckGr
        }]
      }
      var chartData3={
        labels: dateArr,
        datasets:[{
          label: 'Savings',
          data:savingAr,
          backgroundColor: bckGr2
        }]
      }
      var chartData4={
        labels: dateArr,
        datasets: [
        { 
        data: kwhAr,
        label: "Kwh",
        borderColor: "#fffcfc",
        borderWidth:3,
        backgroundColor: "rgba(42, 153, 214,0.3)",
        fill: false
      }, { 
        data: billAr,
        label: "Bills",
        borderColor: "#fffcfc",
        borderWidth:3,
        backgroundColor: "rgba(255,0,0,0.3)",
        fill: false
      }, { 
        data: savingAr,
        label: "Savings",
        borderColor: "#fffcfc",
        borderWidth:3,
        backgroundColor: "rgba(124, 191, 100,0.3)",
        fill: false
      }
    ]
      }
      var chartData5={
        labels: dateArr,

        datasets: [
        { 
        data: kwhAr,
        label: "Kwh",
        borderColor: "rgb(42, 153, 214)",
        backgroundColor: "rgb(42, 153, 214)",
      },
       { 
        data: billAr,
        label: "Bills",
        borderColor: "rgb(255,0,0)",        
        backgroundColor: "rgb(255,0,0)",
      }, { 
        data: savingAr,
        label: "Savings",
        borderColor: "rgb(124, 191, 100)",        
        backgroundColor: "rgb(124, 191, 100)",        
      }
    ]
      }

    return (
        
      <div className = "Chart" >
            <Line 

              data ={chartData5}
              options = {{
                elements: {
                    line: {
                        fill: false, // disables bezier curves
                    }
                },
                scales: {
                    xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5
                            }
                        }]
                },

                title:{
                  display:true,
                  text: 'Combined Data',
                  fontSize:40,
                  fontColor: '#ba50b6'
                },
                legend:{
                  display: true,
                  position:'bottom'
                },
                layout:{
                  height:100
                }
                }}
            /> 
            <Bar 
              data ={chartData}
              options = {{

                title:{
                  display:true,
                  text: 'KWH per Date',
                  fontSize:40,
                  fontColor: '#4286f4'
                },
                legend:{
                  display: true,
                  position:'bottom'
                },
                layout:{
                  height:100
                }
                }}
            /> 
           <center> <p>----------------------------------------------------------------------------------------------------------------------------------------------------</p></center>
            <Bar 
              data ={chartData2}
              options = {{
                title:{
                  display:true,
                  text: 'Bills per Date',
                  fontSize:40,
                  fontColor: '#ec4a41'
                },
                legend:{
                  display: true,
                  position:'bottom'
                },
                layout:{
                  height:100
                }
                }}
            /> 
            <center> <p>----------------------------------------------------------------------------------------------------------------------------------------------------</p></center>
            <Bar 
              data ={chartData3}
              options = {{
                title:{
                  display:true,
                  text: 'Savings per Date',
                  fontSize:40,
                  fontColor: '#7cbf64'
                },
                legend:{
                  display: true,
                  position:'bottom'
                },
                layout:{
                  height:100
                }
                }}
            /> 

            </div>


    );
  }
}
export default App;

