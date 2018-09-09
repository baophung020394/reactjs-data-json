import React, { Component } from 'react';
import './../Css/App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

const uuidv1 = require('uuid/v1'); 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm : false,
      data : DataUser,
      inputValue : ''
    }
  }

  /**
   * Get value từ form insert & insert new user
   */
  getDataInsert = (name,tel,permission) => {
    var item = [];
    item.id = uuidv1(),
    item.name = name,
    item.tel = tel,
    item.permission = permission
    var items = this.state.data;
    items.push(item);
    this.setState({
      data : items
    });
  }
  /* 
  * Get value from input Search
  */
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
    // console.log(result);
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
                <AddUser displayForm={this.state.displayForm}
                 insertDataProps={(name,tel,permission) => this.getDataInsert(name,tel,permission)}  />
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
