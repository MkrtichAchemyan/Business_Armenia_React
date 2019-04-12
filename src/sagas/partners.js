import { put } from 'redux-saga/effects';
import axios from "axios";

export default function* getPartners() {
    try {
        const response = yield axios.get('/jsons/partners.json');
        yield put({type: 'GET_PARTNERS', data: response.data});
    } catch (error) {
        console.log(error.toString());
    }
}