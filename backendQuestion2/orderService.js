import axios from "axios"

let orderService = {

    getRecentOrder: function (id) {
        axios.get("/api/recentOrder/:id").then((data) => { console.log }).catch((err) => { console.log(err) })

    },
    getLastOrder: function (id) {
        axios.get("/api/lastOrder/:id").then((data) => { console.log }).catch((err) => { console.log(err) })

    },
    getOrderByOrderID: function (id) {
        axios.get("/api/order/:id").then((data) => { console.log }).catch((err) => { console.log(err) })

    }
}

export default orderService;