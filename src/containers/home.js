import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import List from '../components/list';
import { add_todo, update_todo, delete_todo } from '../actions/todo';
import { toggleFucntion } from '../actions/toggle';
import { TOGGLE_FUNCITON } from '../actions/constants';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, FormGroup, Label, Collapse
} from 'reactstrap';
import { timingSafeEqual } from 'crypto';
import Example from './hook';
import Child from './Child';
import stateAndProps from './stateAndProps';
import { createBrowserHistory } from 'history';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Add Todo',
            value: '',
            button: 'Add',
            id: null,
            collapse: false,
            toggle: false,
            date: Date(),
            designerList: null
        };
        this.delete = this.delete.bind(this);
        this.onSave = this.onSave.bind(this);
        this.toggle = this.toggle.bind(this);
        this.update = this.update.bind(this);
        this.onToggle = this.onToggle.bind(this)
        this.counterHandler = this.counterHandler.bind(this)
        this.callBackMethod = this.callBackMethod.bind(this)
    }

    onSave() {
        if (this.refs.demo.value.trim().length > 0) {
            if (this.state.id) {
                this.props.update_todo({ id: this.state.id, text: this.refs.demo.value });
                this.setState({ button: "Add", id: null });
            } else {
                this.props.add_todo(this.refs.demo.value);
            }
        }
        this.refs.demo.value = '';
    }
    update(value) {
        this.setState({ button: "Update", id: value.id });
        this.refs.demo.value = value.text;
        console.log(value);
    }
    delete(id) {
        this.props.delete_todo(id);
    }
    toggle() {
        this.setState(
            { toggle: !this.state.toggle }
        );
        this.props.history.push('/login')
    }

    onToggle = () => {
        this.props.toggleFucntion(!this.props.toggleValue)
    }
    counterHandler() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    callBackMethod(value) {
        this.setState({
            designerList: value
        }, () => {
            console.log(this.state.designerList)
        })
    }
    render() {
        let userList = {
            name: 'rajvir',
            Professsion: 'IT',
            city: 'chandigarh'
        }
        let userList2 = {
            name: 'rajvir001',
            Professsion: 'IT001',
            city: 'chandigarh001'
        }
        return (
            <div className="container-fluid">
                <Card>
                    {/* <CardImg  onClick={this.onToggle} top width="100%" height="400px" src="./images/react-img.png" alt="Card image cap" /> */}
                    {/* <Example/> */}
                    {/* <CardBody>
                        <CardTitle>React Training</CardTitle>
                        <CardText>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</CardText>
                        <div className="row">
                            <div className="col-sm-4">
                                <FormGroup>
                                    <Label for="todo">{this.state.name}</Label>
                                    <input
                                        type="text"
                                        ref="demo"
                                        className="form-control"
                                    //onChange={(event) =>  this.setState({value: event.target.value })}
                                    //value={this.state.value}
                                    />
                                </FormGroup>


                                <FormGroup>
                                    <Button onClick={this.onSave}>{this.state.button}</Button>
                                </FormGroup>
                            </div>
                            <div className="col-sm-6">
                                <FormGroup>
                                    <Label for="todo">Todo List</Label>
                                    <br />
                                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>View List</Button>
                                    <Collapse isOpen={this.state.collapse}>
                                        <Card>
                                            <CardBody>
                                                {this.props.todo.length > 0 ?
                                                    <List
                                                        list={this.props.todo}
                                                        _update={this.update}
                                                        _delete={this.delete}
                                                    />
                                                    :
                                                    'Empty list!'
                                                }

                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </FormGroup>
                            </div>
                        </div>
                    </CardBody> */}
                </Card>

                <div className="border-box">
                    <h2>State</h2>
                    <Button onClick={this.toggle} color="primary">
                        {this.state.toggle ? 'on' : 'off'}
                    </Button>
                </div>
                <div className="border-box">
                    <h2>Props</h2>
                    <Child {...userList} userList2={userList2} date={this.state.date} callBack={this.callBackMethod} />
                </div>

                <div className="border-box">
                    <h2>Designers List from child</h2>
                    <div>
                        Total Designers: {this.state.designerList}
                    </div>
                </div>

            </div>
        );
    }
}

Home.propTypes = {
};

const mapStateToProps = (state) => {
    console.log(state.products.toggleValue, 'states');
    return ({
        todo: state.todo,
        toggleValue: state.products.toggleValue,

    });
};

const mapDispatchToProps = (dispatch) => ({
    add_todo: bindActionCreators(add_todo, dispatch),
    update_todo: bindActionCreators(update_todo, dispatch),
    delete_todo: bindActionCreators(delete_todo, dispatch),
    toggleFucntion: bindActionCreators(toggleFucntion, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
