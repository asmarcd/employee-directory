import React, { Component } from "react";
import API from "../utils/API";

class SearchTools extends Component {

    state = {
        searchName: "",
        sortOptions: [],
        results: []
    };



    componentDidMount() {
        API.allEmployees().then(res => {
            const employees = res.data.results;
            console.log(employees);
            // this.setState({ results: employees });
            // for loop over each result and build the variables needed to create the cards.
        });
    };

    handleInputChange = event => {
        this.setState({
            searchName: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchByName(this.state.searchName).then(res => {
            const employees = res.data.results;
            // this.setState({ results: employees })
            // This function isn't quite right. it isn't the handleFormSubmit, it's the search by name functionality. Might have to split the search and filter into two diferent forms below to make the work simultaenously.
        });
    };

    searchByName = name => {
// Not done yet
    }

    render() {
        return (
            <div className="SearchTools">
                <div>
                    <form>
                        <input name="searchName" value={this.state.searchName} onChange={this.handleInputChange} />
                        <datalist>
                            {this.state.sortOptions.map(sortChoice => <option>{sortChoice}</option>)}
                        </datalist>
                        <input name="sortBy" list="sortOptions" value={this.state.sortBy} />
                        <button>Update</button>
                    </form>
                    {this.state.results.map(employees => employees)}
                    {/* use employees results here to display the results. Could this be a module itself in another component then fed into here? Don't see why not. */}
                </div>
            </div>
        )
    }
}

export default SearchTools;