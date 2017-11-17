# Utility Data Viewer
A stand-alone ReactJS single page application with a Node.JS backend to load the attached JSON file containing utility bill data.  The react front end loads the data from the server, and the server parses the JSON.

When the application is started, the user will be able to view in a web browser on [localhost:3000](http://localhost:3000/) an app that displays a time series graphical visualization of the utility data.
This project is created at the request of solstice for a job interview, it's not built for production neither for personal use.
## Getting Started
Please download the NodeJS repository from [HERE](https://github.com/kofm77/solstice-io-server).


 If you don't familiar with React and Node, the following links is highly recommended.
 [Tutorial: Intro To React](https://reactjs.org/tutorial/tutorial.html)
 [Node.js v9.2.0 Documentation](https://nodejs.org/dist/latest-v9.x/docs/api/)
 
## Running
 
### Install dependencies

#### *MAC OS X user:

Open your terminal and type:
```
brew install node
```
And then:
```
npm install
```

#### *WINDOWS user:


1-Download the Windows installer from the [Nodes.js® web site](https://nodejs.org/en/).

2-Run the installer (the .msi file you downloaded in the previous step.)

3-Follow the prompts in the installer



### Start the  Project

We have to start both ReactJS 'FrontEnd' and NodeJS 'BackEnd':

#### Start NodeJS server-part
Using your terminal / cmd, navigate to solstice-io-server:

```
cd solstice-io-server
```
Run the server:
```
node app.js
```
If everything went well, you will receive the next message:

```
Listening on port 4001
```
#### Start React client-part
Using your terminal / cmd, navigate to solstice-io-server:

```
cd solstice-io-client
```
Run the frontend:
```
npm start
```
If everything went well, you will receive the next message:

```
Starting the development server...
```


## Starting

After starting the server-part and the frontend-part, go to your browser and type this link:
```
http://localhost:3000/
```
Our web-app will appear, but you have to wait few seconds until the react load the data from the server. After that you will get this result:
![Alt text](/pics/Starting.png?raw=true "Main Vue")

### Using the App
#### KWH button
This button will allow you to view the consumption of Watt in a specific date
![Alt text](/pics/KWH.png?raw=true "Main Vue")
#### Bills button
This button will allow you to view the amount the bills in a specific date
![Alt text](/pics/Bills.png?raw=true "Main Vue")
#### Savings button
This button will allow you to view the amount of savings in a specific date
![Alt text](/pics/savings.png?raw=true "Main Vue")
#### Combined button
This button will allow you to view a combined data of the Watt consumption, bills and savings in a specific date in one chart.
You will be able to show and hide any type of data (exp: show the ratio bills/KWH)
![Alt text](/pics/Combined.png?raw=true "Main Vue")
#### ShowAll button
This button will allow you to view all the previews charts in a one page
![Alt text](/pics/all.png?raw=true "Main Vue")






## Built With

* [ReactJS](http://www.dropwizard.io/1.0.2/docs/) - The technology used for the FrontEnd
* [NodeJS](https://maven.apache.org/) - The technology used for the BackEnd
* [ChartJS](https://rometools.github.io/rome/) - The technology used to create the charts
* [Socket.IO](https://rometools.github.io/rome/) - Real-time engines for Node.js


## Authors

* **Oussema Kessentini**


## Reference
* [stackoverflow](https://stackoverflow.com/questions/31632967/chartjs-how-to-set-custom-scale-in-bar-chart)
* [stackoverflow](https://stackoverflow.com/questions/36528660/react-chartjs-gives-back-a-type-error-intermediate-valuecharttype-is-not-a)
* [github react-chartjs-2](https://github.com/jerairrest/react-chartjs-2)
* [chartjs configuration](http://www.chartjs.org/docs/latest/configuration/)
* [codepen project for the buttons design](https://codepen.io/cheeriottis/pen/inluv)






This project is created at the request of solstice for a job interview, it's not built for production neither personal use



