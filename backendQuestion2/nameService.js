import axios from "axios"


let nameService = {

    getFullName: function (id) {
        axios.get("/api/fullName/:id").then((data) => { return data}).catch((err) => { console.log(err) })

    },
    getFirstName: function (id) {
        axios.get("/api/lastName/:id").then((data) => { return data}).catch((err) => { console.log(err) })

    },
    getLastName: function (id) {
        axios.get("/api/lastName/:id").then((data) => { return data}).catch((err) => { console.log(err) })

    }
}

export default nameService;



