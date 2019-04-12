import { put } from 'redux-saga/effects';
import axios from "axios";

export default function* getBusinessSupportClub() {
    try {
        const response = yield axios.get('/jsons/business_support_club.json');
        yield put({type: 'GET_BUSINESS_SUPPORT_CLUB', data: response.data});
    } catch (error) {
        console.log(error.toString());
    }
}