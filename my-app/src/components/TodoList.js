
import { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItemHead from './TodoItemHead';

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todos: ['todo1']
        };
    }

    updateTodo(todo, index) {

    }

    removeTodo(index) {

    }

    addTodo(todo) {

    }

    render() {
        const {todos} = this.state;

        if(!todos.length) {
            return (
                <div>
                    <TodoForm
                        addTodo={(todo) => this.addTodo(todo)}
                    />
                    <hr />
                    <div className="alert alert-danger">No hay todos</div>
                </div>
            );
        }

        return (
            <div className="col-md-12">
                <TodoForm
                    addTodo={(todo) => this.addTodo(todo)}
                />
                <hr />
                <table className="table">
                    <TodoItemHead />
                    <tbody>
                    {
                        todos.map((todo, index) => {
                            return (
                                <TodoItem
                                    onUpdateTodo={(todoUpdated) => this.updateTodo(todoUpdated, index)}
                                >
                                    {todo}
                                </TodoItem>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}