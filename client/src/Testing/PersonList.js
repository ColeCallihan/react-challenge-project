import axios from 'axios';
import { resolveSrv } from 'dns/promises';
import React from 'react';

export default class PersonList extends React.Component {

    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/companies')
        .then(result => {
            console.log(result);
            this.setState({ persons: result.data })
        })
    }

    render() {
        return (
            <ul>
                { this.state.persons.map(person => 
                <li key={person.id}>{person.name}</li>)}
            </ul>
        )
    }
}