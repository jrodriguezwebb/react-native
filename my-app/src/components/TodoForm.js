
import React, {Component} from 'react';

export default class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    updateTodo(event) {
        this.setState({
            todo: event.target.value
        })
    }

    addTodo(event) {
        event.preventDefault();
        // Props sirve para acceder a las funciones que son pasadas por parametros en los componentes
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: ''
        });
    }

    render() {
        const {todo} = this.state;
        return (
            <form onSubmit={e => this.addTodo(e)}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="todo" className="sr-only">Todo</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="todo"
                            value={todo}
                            onChange={this.updateTodo.bind(this)}
                        />
                    </div>
                    <div className="col">
                        <button 
                            type="submit" 
                            className="btn btn-primary mb-2">
                            Añadir todo
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
