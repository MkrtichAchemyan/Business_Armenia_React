import { put } from 'redux-saga/effects';
import axios from "axios";

export default function* getSocialBar() {
    try {
        const response = yield axios.get('/jsons/social_bar.json');
        yield put({type: 'GET_SOCIALBAR', data: response.data});
    } catch (error) {
        console.log(error.toString());
    }
}