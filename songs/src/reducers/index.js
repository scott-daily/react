import { combineReducers} from 'redux';

const songsReducer = () => {
    return [
        { title: 'So Much For The Afterglow', duration: '4:34'},
        { title: 'Macarena', duration: '2:48'},
        { title: 'No Scrubs', duration: '4:2753'},
        { title: 'Trust', duration: '4:27'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});