import { put } from 'redux-saga/effects';
import axios from "axios";

export default function* getEvents() {
    try {
        const response = yield axios.get('/jsons/events.json');
        yield put({type: 'GET_EVENTS', data: response.data});
    } catch (error) {
        console.log(error.toString());
    }
}