import axios from "axios";

const API = {
    allEmployees: function() {
        return axios(`https://randomuser.me/api/?nat=US,GB,FR&results=50&inc=name,location,email,picture,phone`)
    }
}

export default API;