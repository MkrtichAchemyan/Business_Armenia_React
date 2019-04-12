import { put } from 'redux-saga/effects';
import axios from "axios";

export default function* getHome() {
    try {
        const response = yield axios.get('/jsons/home.json');
        yield put({type: 'GET_HOME', data: response.data});
    } catch (error) {
        console.log(error.toString());
    }
}