import axios from "axios";

const API = {
    allEmployees: function() {
        return axios(`https://randomuser.me/api/?nat=US,GB,FR&results=50&inc=name,nat,location,email,picture,id,phone`)
    },
    searchByName: function() {
        return axios(``)
    }
}

export default API;