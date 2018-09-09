import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue : '',
            userObj : {}
        }
    }

    /**
     * Get info user 
     */
    getUserEditInfo = (info) => {
        this.setState({
            userObj : info
        });
        this.props.getUserEditInfoApp(info);
    }
    /**
     * Check status to show form Edit User
     */
    isShowEditForm = () => {
        if(this.props.editUserStatus === true) {
            return <EditUser 
            getUserEditInfo = {(info) => this.getUserEditInfo(info)}
            userEditObject = {this.props.userEditObject()}
            changeEditUserStatus={() => this.props.changeEditUserStatus()} />
        }
    }
    getValueInput = (e) => {
        this.setState({
            tempValue : e.target.value
        });
        this.props.checkConProps(this.state.tempValue)
        console.log('gia tri ben search la: ' + this.state.tempValue)
    }
    showButton = () => {
        if(this.props.displayForm === true) {
            return (
                <div className="btn btn-block btn-outline-secondary" onClick={()=> this.props.con()}>Đóng lại</div>
            )
        }else {
            return (
                <div className="btn btn-block btn-outline-info" onClick={()=> this.props.con()}>Thêm mới</div>
            )
        }
    }

    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                <div className="btn-group">
                    <input type="text" className="form-control" onChange={(e) => this.getValueInput(e)} placeholder="Nhập từ khóa" 
                    />
                    <div className="btn btn-info" onClick={(ipData) => this.props.checkConProps(this.state.tempValue)}>
                    Tìm kiếm
                    </div>
                </div>

                    <div className="btn-group1 mt-2">
                        {
                            this.showButton()
                        }
                        
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;