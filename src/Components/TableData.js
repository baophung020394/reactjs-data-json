import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    mappingDataUser = () =>  this.props.dataUserProps.map((value, key) => ( 
        <TableDataRow 
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        editFunClick={(user) => this.props.editFunProps(value )}
        key={key}  userId={value.id} userName={value.name} userPhone={value.tel} userRole={value.permission} stt={key} /> 
    ))

    render() {
        // console.log(this.props.dataUserProps)
        return (
            <div className="col">
                <table className="table table-striped table-hover table-{1:striped|sm|bordered|hover|inverse}">
                <thead>
                    <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.mappingDataUser()
                    }
                </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;