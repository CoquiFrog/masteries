import axios from 'axios';

let initialState = {
    asset_object: {},
    asset_id: 0,
    asset_list: [],
    assetName: '',
}

const UPDATE_ASSET_ID = "UPDATE_ASSET_ID";

export default function reducer(state = initialState, action){
    switch (action.type){
        case UPDATE_ASSET_ID:
        return Object.assign({}, state, {assetID: action.payload})

        default:
        return state
    }
}

export function updateName(assetName){
    return{
        type: UPDATE_ASSET_ID,
        payload: assetName
    }
}