import {uuidv4 as uuid} from "../helpers/functions.js";

export default class User {
    constructor(firstname, lastname, email, phonenumber, address, city, zip) {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.phonenumber = phonenumber
        this.address = address
        this.city = city
        this.zip = zip
    }

    get displayName() {
        return `${this.firstname} ${this.lastname}`
    }

    get deteildInformation() {
        return `${this.email} ${this.phonenumber} ${this.address} ${this.city} ${this.zip}`
    }
    get id(){
        return uuid()
     }
}