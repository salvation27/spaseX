import React from 'react';
// import logo from './logo.svg';
import './style.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import FetchData from './services/FetchData'

class App extends React.Component {
fetchData = new FetchData()

 state ={
   roket:'Falcon 12',
   roketFeatures:null,
   rockets:[]
 };

componentDidMount(){
  this.updateRocket()
}

updateRocket (){
  this.fetchData.getRocket()
    .then(data=>{
      this.setState({rockets:data.map(item=>item.name)})
      return data
    })
    .then(data => data.find(item => item.name === this.state.rocket))
    .then(roketFeatures => this.setState({roketFeatures}))
}

changeRoket = roket =>{
this.setState({
  roket
},this.updateRocket)
}
  render(){
    return (
      <>
      <Header rockets={this.state.rockets} changeRoket={this.changeRoket} />
      <Main roket={this.state.roket} />
      <Features />
      <Footer />
      </>
    );
  }
 
}

export default App;
