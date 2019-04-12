import { takeLatest, all } from 'redux-saga/effects';
import getAboutArmenia from './get_about_armenia'
import getBoard from './get_board'
import getBusinessSupportClub from './get_business-support_club'
import getCorporate from './corporate'
import getEvents from './events'
import getFootprint from './footprint'
import getHeader from './header'
import getHome from './home'
import getNews from './news'
import getPartners from './partners'
import getSocialBar from './social_bar'
import getTeam from './team'

function* actionWatcher() {
    yield takeLatest('GET_ABOUT_ARMENIA_ACTION', getAboutArmenia);
    yield takeLatest('GET_BOARD_ACTION', getBoard);
    yield takeLatest('GET_BUSINESS_SUPPORT_CLUB_ACTION', getBusinessSupportClub);
    yield takeLatest('GET_CORPORATE_ACTION', getCorporate);
    yield takeLatest('GET_EVENTS_ACTION', getEvents);
    yield takeLatest('GET_FOOTPRINT_ACTION', getFootprint);
    yield takeLatest('GET_HEADER_ACTION', getHeader);
    yield takeLatest('GET_HOME_ACTION', getHome);
    yield takeLatest('GET_NEWS_ACTION', getNews);
    yield takeLatest('GET_PARTNERS_ACTION', getPartners);
    yield takeLatest('GET_SOCIALBAR_ACTION', getSocialBar);
    yield takeLatest('GET_TEAM_ACTION', getTeam);
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}