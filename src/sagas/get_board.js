import { put } from 'redux-saga/effects';
import axios from "axios";

export  default function* getBoard() {
    try {
        const response = yield axios.get('/jsons/board.json');
        yield put({type: 'GET_BOARD', data: response.data});
    } catch (error) {
        console.log(error.toString());
    }
}