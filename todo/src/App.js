import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";

import "./App.css";

class App extends Component {
    state = {
        todo: [
            { id: 1, name: "Gym", status: false },
            { id: 2, name: "Code", status: true },
            { id: 3, name: "Read", status: false },
        ],
        curInput: "",
    };

    inputHandler = (event) => {
        this.setState({ curInput: event.target.value });
    };

    toggleStatusHandler = (id) => {
        const taskIndex = this.state.todo.findIndex((t) => {
            return t.id === id;
        });

        // const todoItem = {
        //     ...this.state.todo[taskIndex],
        // };
        const newtodo = [...this.state.todo];
        const todoItem = newtodo[taskIndex];

        todoItem.status = !todoItem.status;
        newtodo[taskIndex] = todoItem;

        this.setState({ todo: newtodo });
    };

    addTaskHandler = () => {
        let ntodo = [...this.state.todo]; // get the previous list
        let id = ntodo.length + 1;

        this.setState({
            todo: ntodo.concat({
                id: id,
                name: this.state.curInput,
                status: false,
            }),
            curInput: "",
        });
        console.log(this.state.curInput);
    };

    deleteTaskHandler = (id) => {
        console.log('Deleting Todo');
        const taskIndex = this.state.todo.findIndex((t) => {
            return t.id === id;
        });
        console.log(taskIndex)
        // arr.filter(item => item !== todoItem)
        let newtodo = [...this.state.todo]

        newtodo.splice(taskIndex, 1)
        console.log(newtodo)

        this.setState({ todo: newtodo });
    };

    render() {
        return (
            <div id="page">
                <div id="center">
                    <h1>My Todo List</h1>
                    <input type="text" onChange={this.inputHandler} />
                    <button id="btn" onClick={this.addTaskHandler}>
                        +
                    </button>
                    {this.state.todo.map((val, index) => {
                        return (
                            <ListItem
                                key={val.id}
                                id={val.id}
                                name={val.name}
                                status={val.status}
                                check={this.toggleStatusHandler}
                                delete={this.deleteTaskHandler}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default App;

// make the list scrollable
// add delete functionality
// move input to it's own component because, changes to it are rendering whole page
