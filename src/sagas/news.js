import { put } from 'redux-saga/effects';
import axios from "axios";

export default function* getNews() {
    try {
        const response = yield axios.get('/jsons/news.json');
        yield put({type: 'GET_NEWS', data: response.data});
    } catch (error) {
        console.log(error.toString());
    }
}