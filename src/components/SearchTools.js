import React, { Component } from "react";
import API from "../utils/API";

class SearchTools extends Component {

    state = {
        searchName: "",
        sortOptions: [],
        directory: [],
        results: []
    };

    componentDidMount() {
        API.allEmployees().then(res => {
            const employees = res.data.results;
            this.setState({ results: employees, directory: employees })
        });
    };

    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            searchName: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

    };

    searchByName = event => {
        event.preventDefault();
        let nameResults = [];

        this.state.results.forEach(person => {
            let fullName = `${person.name.first} ${person.name.last}`
            if (person.name.first === this.state.searchName || person.name.last === this.state.searchName || fullName === this.state.searchName) {
                nameResults.push(person)
            }
        })
        this.setState({ results: nameResults })

        if (this.state.searchName === "") {
            this.setState({results: this.state.directory})
        }
    }

    render() {
        return (
            <div className="SearchTools">
                <div>
                    <form>
                        <input name="searchName" value={this.state.searchName} onChange={this.handleInputChange} placeholder="Search by Name" />
                        <input name="sortBy" list="sortOptions" value={this.state.sortBy} />
                        <button onClick={this.searchByName}>Update</button>
                    </form>
                </div>
                <br />
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
            </div>
        )
    }
}

export default SearchTools;