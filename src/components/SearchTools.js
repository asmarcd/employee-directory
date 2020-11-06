import React, { Component } from "react";
import API from "../utils/API";

class SearchTools extends Component {

    state = {
        searchName: "",
        sortOptions: [],
        results: []
    }

    componentDidMount() {
        API.allEmployees().then(res => {
            const employees = res.data.results;
            console.log(employees);
            this.setState({ results: employees });
        })
    }

    handleInputChange = event => {
        this.setState({
            searchName: event.target.value
        })
    }

    searchByName = name => {

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
                </div>
            </div>
        )
    }
}

export default SearchTools;