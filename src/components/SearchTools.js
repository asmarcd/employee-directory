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
            console.log(res)
            // this.setState({ results: res.})
        })
    }

    render() {
        return (
            <div className="SearchTools">
                <div>
                    <form>
                        <input name="searchName" value={this.state.searchName} />
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