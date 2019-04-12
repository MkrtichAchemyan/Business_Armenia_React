import {combineReducers} from 'redux';
import about_armenia_reducer from './about_armenia'
import board_reducer from './board'
import business_support_club_reducer from './business_support_club'
import corporate_reducer from './corporate'
import events_reducer from './events'
import footprint_reducer from './footprint'
import header_reducer from './header'
import home_reducer from './home'
import news_reducer from './news'
import partners_reducer from './partners'
import social_bar_reducer from './social_bar'
import team_reducer from './team'

const allReducers = combineReducers({
    about_armenia:about_armenia_reducer,
    board:board_reducer,
    business_support_club:business_support_club_reducer,
    corporate:corporate_reducer,
    events:events_reducer,
    footprint:footprint_reducer,
    header:header_reducer,
    home:home_reducer,
    news:news_reducer,
    partners:partners_reducer,
    social_bar:social_bar_reducer,
    team:team_reducer
})

export default allReducers