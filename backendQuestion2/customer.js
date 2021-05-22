import nameService from "./nameService"
import orderService from "./orderService"

export default class Customer {

    fullName(id){
        return nameService.getFullName(id)
    }

    getFirstName(id){
        return nameService.getFirstName(id)
    }
    getLastName(id){
        return nameService.getLastName(id)
    }
    getRecentOrder(id){
        return orderService.getRecentOrder(id)
    }

    getLastOrder(id){
        return orderService.getLastOrder(id)
    }
    getOrderByOrderID(id){
        return orderService.getOrderByOrderID(id)
    }
}