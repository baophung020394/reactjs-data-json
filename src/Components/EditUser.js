import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id ,
            name : this.props.userEditObject.name ,
            tel : this.props.userEditObject.tel ,
            permission : this.props.userEditObject.permission 
        }
    }
    
    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });
    }
    saveButton = () => {
        var info = {};
        info.id = this.state.id,
        info.name = this.state.name,
        info.tel = this.state.tel,
        info.permission = this.state.permission 
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus(); // hidden form
    }
    render() {
        console.log(this.state);
        return (
            <div className="row">
               <div className="col-12">
                    <form method="post">
                        <div className="card text-white bg-warning mb-3">
                            <div className="card-header text-center">Edit User</div>
                            <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" className="form-control" name="name"  placeholder="User name" 
                                    defaultValue={this.props.userEditObject.name}
                                    onChange={(e) => this.isChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="tel" placeholder="Phone" 
                                    defaultValue={this.props.userEditObject.tel}
                                    onChange={(e) => this.isChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <select className="custom-select" required name="permission"
                                    defaultValue={this.props.userEditObject.permission}
                                    onChange={(e) => this.isChange(e)}
                                >
                                    <option value>--Chọn--</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                                <div className="invalid-feedback">Example invalid custom select feedback</div>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-danger"
                                onClick={() => this.saveButton()}
                                value="Edit"
                                />
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
            </div>
        );
    }
}

export default EditUser;