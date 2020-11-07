import React, { Component } from "react";
import API from "../utils/API";

class SearchResults extends Component {

    state = {
        results: []
    };

    componentDidMount() {
        API.allEmployees().then(res => { 
            const employees = res.data.results;
            console.log(employees);
            this.setState({ results: employees })
        });
    };

    render() {
        return (
            <div className="card-deck">
                {this.state.results.map((person, index) => (
                    <div key={index}>
                        <div className="card flex-row flex-wrap">
                            <img src={person.picture.large} alt="Employee ID Picture" />
                            <div className="card-body">
                                <h5 className="card-title">{person.name.first} {person.name.last}</h5>
                                <p className="card-text">Email: {person.email}</p>
                                <p className="card-text">Phone: {person.phone}</p>
                                <p className="card-text"><small className="text-muted">{person.location.city}, {person.location.state}, {person.location.country}</small></p>
                            </div>
                        </div>
                        <br />
                    </div>
                ))}
            </div>
        )
    };
};

export default SearchResults;