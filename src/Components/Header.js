import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                <h1 className="display-3">Quản lý thành viên bằng Reactjs</h1>
                <p className="lead">
                    với dữ liệu json
                </p>
                </div>
            </div>
        );
    }
}

export default Header;