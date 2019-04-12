import axios from "axios";
import { put } from 'redux-saga/effects';


export default function* getAboutArmenia() {
    try {
        const response = yield axios.get('/jsons/about_armenia.json');
        yield put({type: 'GET_ABOUT_ARMENIA', data: response.data});
    } catch (error) {
        console.log(error.toString());
    }
}