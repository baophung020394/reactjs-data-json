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
      data : '',
      inputValue : '',
      editUserStatus : false,
      userEditObject : {}
    }
  }

  componentWillMount = () => {
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data : temp
      });
    }
  }

  changeEditUserStatus = () => {
      this.setState({
        editUserStatus : !this.state.editUserStatus 
      });
  }
  /**
   * 
   * Delete User
   */
  deleteUser = (idUser) => {
    // console.log(idUser);
    var tempData =  this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data : tempData
    });

    //đẩy vao dữ liệu
    localStorage.setItem('userData', JSON.stringify(tempData));
  }
  /**
   * 
   * 
   */
  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value,key) => {
        if(value.id === info.id) {
            value.name = info.name,
            value.tel = info.tel,
            value.permission = info.permission
        } 
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }
  /**
   * Get value từ form insert & insert new user
   */
  insertNewUser = (name,tel,permission) => {
    var item = [];
    item.id = uuidv1(),
    item.name = name,
    item.tel = tel,
    item. permission = permission
    var items = this.state.data;
    items.push(item);
    this.setState({
       data : items
    });
    // localStorage.setItem('userData', JSON.stringify(this.state.data));
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

  /**
   * Function edit user
   */
  editFun = (user) => {
    console.log('đã truyền đc');
    this.setState({
        userEditObject : user
    });
    console.log(user);
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
                  editUserStatus={this.state.editUserStatus}
                  changeEditUserStatus={() => this.changeEditUserStatus()}
                  userEditObject = {() => this.state.userEditObject}
                  getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info) }
                />
                <TableData 
                deleteUser ={(idUser) => this.deleteUser(idUser)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editFunProps={(user) => this.editFun(user)} dataUserProps={result} />
                <AddUser displayForm={this.state.displayForm}
                    insertNewUser={(name,tel,permission) => this.insertNewUser(name,tel,permission)}   
                />
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
