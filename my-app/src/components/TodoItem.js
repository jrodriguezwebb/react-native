
import React, { Component } from 'react';

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            todo: props.children
        }
    }

    onEditMode() {
        if(this.state.editMode) {
            const {onUpdateTodo} = this.props;

            onUpdateTodo(this.state.todo);
        }
        this.setState({
            editMode: !this.state.editMode
        });
    }

    handleChange(evt) {
        this.setState({todo: evt.target.value})
    }

    dynamicComponents() {
        let input, actionButon;
        const {editMode, todo} = this.state;

        if(editMode) {
            input = (
                <input
                    type="text"
                    className="form-control"
                    value={todo}
                    onChange={(e)=> this.handleChange(e)}
                />
            );
            actionButon = (
                <button
                    type="button"
                    className="btn btn-warning text-white"
                    onClick={this.onEditMode.bind(this)}
                >
                    Actualizar
                </button>
            );
        } else {
            input = todo;
            actionButon = (
                <button
                    type="button"
                    className="btn btn-warning text-white"
                    onClick={this.onEditMode.bind(this)}
                >
                    Editar                    
                </button>
            );
        }
        return {input, actionButon}
    }

    render() {
        const {index, onRemove} = this.props;
        const dynamicComponents = this.dynamicComponents();

        return (
            <tr style={{textAlign: 'center'}}>
                <th scope="col">#</th>
                <th scope="col">{index + 1}</th>
                <th scope="col">{dynamicComponents.input}</th>
                <th scope="col">
                    <div className="btn-group" role="group">
                        {dynamicComponents.actionButon}
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={onRemove}
                        >
                            Eliminar
                        </button>
                    </div>
                </th>
            </tr>
        );
    }
}