import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super();
    }

    render() {
        var key = Object.keys(this.props);
        // var value = Object.values(this.props);
        // console.log(key)
        // console.log(value)
        // for(var i = 0; i < key.length; i++){
        //     console.log(key[i],this.props[key[i]])
        // }
        // key.map((d)=>console.log(d,this.props[d]))
        var phones = [9394572389, 7495834938];

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

        
        // let headerKey = {};
        //  designerTeam2.map((d)=>
        //     { 
        //         headerKey = {...d , headerKey};
        //         return true
        //     }
        // )

        let designerTeam2 = [
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
                profession: 'it',
                
            },
        ]
        let designerTeam2key = Object.keys(designerTeam2)
        return (
            <div>
                {key.map((d, i) => <div key={i}><label>{d}</label><span>{this.props[d]}</span></div>)}
                <div>phone = {phones.map((d, i) => <span key={i}>{d},</span>)}</div>
                <div>Phone = {phones.map((d, i) => <span key={i}>{phones[i]},</span>)}</div>
                <div style={{ border: '2px solid grey' }}>
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

                <div style={{ border: '2px solid grey' }}>
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
                            {designerTeam2.map((d, i) => {
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
                             {designerTeam2key.map((d, i) => {
                                console.log(Object.keys(d));
                                return (
                                    <tr key={i}>
                                        <td>{d} &nbsp; &nbsp; {d[d]}</td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Child;
