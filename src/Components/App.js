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
      inputValue : ''
    }
   
  }

  
  getTextSearch = (ipData) => {
    //   console.log(ipData);
      this.setState({
          inputValue : ipData
      });
    //   console.log(this.state.inputValue);
  }
  changeStateForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }
  render() {
    var result = [];
    this.state.data.forEach((item) => {
        if(item.name.indexOf(this.state.inputValue) !== -1) {
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
