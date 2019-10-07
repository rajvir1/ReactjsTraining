import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, FormGroup, Label, Collapse
} from 'reactstrap';

class Child extends Component {
    constructor(props) {
        super();
        this.state = {
            TotalUser: 250
        }
    }
    componentDidMount() {
        let userList = this.state.TotalUser
        this.props.callBack(userList)
    }
    render() {
        let designerTeam = [
            {
                id: 0,
                name: 'rajvir',
                city: 'mohali',
                profession: 'it'
            },
            {
                id: 0,
                name: 'himanshu',
                city: 'mohali',
                profession: 'it'
            },
            {
                id: 0,
                name: 'monika',
                city: 'mohali',
                profession: 'it'
            },
            {
                id: 0,
                name: 'harman',
                city: 'mohali',
                profession: 'it'
            },
        ]

        return (
            <div>
                <Button>Today Date is: {this.props.date}</Button>
                <div className="border-box" style={{ marginRight: 0, marginLeft: 0 }}>
                    <h2>Designers List</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>city</th>
                                <th>profession</th>
                            </tr>
                        </thead>
                        <tbody>
                            {designerTeam.map((d, i) => {
                                console.log(Object.keys(d));
                                return (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{d.name}</td>
                                        <td>{d.city}</td>
                                        <td>{d.profession}</td>
                                    </tr>
                                )
                            }
                            )}

                        </tbody>
                    </table>
                </div>
                <p>UserList: {this.props.name}</p>
                <p>UserList2: {this.props.userList2.name}</p>

            </div>
        )
    }
}
export default Child;
