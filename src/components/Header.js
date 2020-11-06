import React, { Component } from "react";

class Header extends Component {


    render() {
        return (
            <div className="Header">
                <div>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">GenericCo Employee Database</h1>
                            <p className="lead">Search the employee database below</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form>
                        <input name="searchName" value={this.state.searchName} />
                    </form>
                    <form>
                        <datalist>
                            {}
                        </datalist>
                        <input name="filterBy" list="filterOptions" value={this.state.filterBy} />
                    </form>
                </div>
            </div>
        )
    }
}

export default Header;