import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import { SearchList } from './components/search-list/search-list.component';

  class App extends Component {
    constructor(){
      super();
      this.state = {
        data: [],
        searchText:''
      }
    };
    
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({data:users}))
    };

    onDataChange = (e) => {
      this.setState({searchText:e.target.value})
    };

  render() {
    const {data, searchText} = this.state;
    const filterData = data.filter( _ => {
      return _.name.toLowerCase().includes(searchText.toLowerCase());
    })
    return (
      <div className="App">

      <SearchList placeholder='search users' handleChange={this.onDataChange}/>

      <CardList users={filterData} />

      </div>
      );
    }
  }

export default App;
