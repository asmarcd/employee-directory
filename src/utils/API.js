import axios from "axios";

// The allEmployees function pulls a list of 50 randomly generated employees from the US, France, or the UK, and gives them a name, email, location, picture, and phone number

const API = {
    allEmployees: function() {
        return axios(`https://randomuser.me/api/?nat=US,GB,FR&results=50&inc=name,location,email,picture,phone`)
    }
}

export default API;