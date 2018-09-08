import React, { Component } from 'react';

class TableDataRow extends Component {
    
    permissionShow = () => {
        if(this.props.userRole === 1) {
            return "Admin";
        } else if(this.props.userRole === 2) {
            return "Moderator";
        } else { return "Normal User ";}
    }
    render() {
        return (
            <tr>
                <td >{this.props.userId}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.userPhone}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                    <div className="btn btn-warning sua">
                        <i className="fa fa-edit"> Edit </i>
                    </div>
                    <div className="btn btn-danger xoa">
                        <i className="fa fa-trash-o"> Delete</i>
                    </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;