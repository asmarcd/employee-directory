import React, { Component } from "react";
import API from "../utils/API";
import SearchResults from "./SearchResults"

class SearchTools extends Component {

    state = {
        searchName: "",
        sortOptions: [],
        results: []
    };

    componentDidMount() {
        API.allEmployees().then(res => {
            const employees = res.data.results;
            this.setState({ results: employees })
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
        console.log(this.state.searchName)
        this.state.results.forEach(person => {
            console.log(person.name.first);
            let fullName = `${person.name.first} ${person.name.last}`
            if (person.name.first === this.state.searchName || person.name.last === this.state.searchName || fullName === this.state.searchName) {
                nameResults.push(person)
            }
        })
 

        console.log(nameResults)
        // this.setState({results: nameResults})
        // console.log(this.state.results)
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
            </div>
        )
    }
}

export default SearchTools;