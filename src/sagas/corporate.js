import { put } from 'redux-saga/effects';
import axios from "axios";

export default function* getCorporate() {
    try {
        const response = yield axios.get('/jsons/corporate.json');
        yield put({type: 'GET_CORPORATE', data: response.data});
    } catch (error) {
        console.log(error.toString());
    }
}