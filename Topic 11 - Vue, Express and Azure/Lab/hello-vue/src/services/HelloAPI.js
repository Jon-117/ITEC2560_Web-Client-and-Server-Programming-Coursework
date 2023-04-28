import axios from 'axios';
import {response} from "express";

let base = 'api'

export default {
        getHelloMessage() {
                return axios.get(base).then(response => {
                        return response.data
                })
        }
}