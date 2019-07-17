import React, {Component} from 'react';

export default class TodoItemHead extends Component {
    render() {
        return (
            <thead>
                <tr style={{textAlign: 'center'}}>
                    <th scope="col">#</th>
                    <th scope="col">Indice</th>
                    <th scope="col">Todo</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
        );
    }
}