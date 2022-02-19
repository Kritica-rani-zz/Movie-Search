import React from 'react';
import './App.css';
import {data} from './data.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: [],
      inputData: "",
      filteredMovie: ''
    };
    
  }
  // async componentDidMount() {
  //   let url = "http://www.omdbapi.com/?i=tt3896198&apikey=37ae0c80";
  //   let data = await fetch(url)
  //   let parsedData = await data.json()
  //   this.setState({ movie: [parsedData] })
  // }


  // let parsedData = await data.json()
  
  // const arr=[{parsedData:parsedData}]
 componentDidMount(){
   this.setState({movie:data})
 }
  handleChange = (e) => {
    var value = e.target.value.toLowerCase();
    this.setState({ inputData: value })
    const filteredData = this.state.movie.filter((item) => {

     if (this.state.inputData === '') return item;
      else {

        return item.Title.toLowerCase().includes(this.state.inputData)

      }
    })
    this.setState({ filteredMovie: filteredData })
    // if(this.state.inputData===value){
   
    // this.setState({movie:filteredData})
    
    // }
    // else{
    //   this.setState({movie:[]})
    // }
    return (

      <ul>
        {filteredData.map((item) => {
          <li>{item.Title}</li>
        })}
      </ul>

    )
      
  }




  render() {
    const {filteredMovie}=   this.state
    console.log("movie",this.state.movie,"inputdata",this.state.inputData)

// console.log("filtereddata",this.state.filteredMovie)


    return (
      <div className="App">
        <input type="textarea" placeholder='search for movie' onChange={this.handleChange} value={this.state.inputData}id="input"></input>
        {filteredMovie && filteredMovie.map((item, index) => {
          return <div className='Movie_Item'><li>{item.Title}</li>
          </div>
        })}

      </div>
    );
  }
}

export default App;
