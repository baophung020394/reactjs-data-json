import React, { Component } from 'react';
import './../Css/App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm : false,
      data : DataUser,
      searchText : ''
    }
   
  }

  getTextSearch = (ipData) => {
    this.setState({
      searchText : ipData
    });
  }
  changeStateForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }
  render() {
    var result = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        result.push(item);
      }
    })
    console.log(result);
    return (
      <div>
         <Header />
         <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search con={() => this.changeStateForm()} displayForm={this.state.displayForm}
                  checkConProps={(ipData) => this.getTextSearch(ipData)}
                />
                <TableData dataUserProps={result} />
                <AddUser displayForm={this.state.displayForm}  />
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
