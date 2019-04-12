import { put } from 'redux-saga/effects';
import axios from "axios";

export default function* getEvents() {
    try {
        const response = yield axios.get('/jsons/footprint.json');
        yield put({type: 'GET_FOOTPRINT', data: response.data});
    } catch (error) {
        console.log(error.toString());
    }
}