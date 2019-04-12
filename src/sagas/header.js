import { put } from 'redux-saga/effects';
import axios from "axios";

export default function* getHeader() {
    try {
        const response = yield axios.get('/jsons/header.json');
        yield put({type: 'GET_HEADER', data: response.data});
    } catch (error) {
        console.log(error.toString());
    }
}