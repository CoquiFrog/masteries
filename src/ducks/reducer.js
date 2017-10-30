// import axios from 'axios';

let initialState = {
    asset_object: {},
    asset_id: 0,
    asset_list: [],
    assetName: 'Billy Broc',
}

const UPDATE_ASSET_ID = "UPDATE_ASSET_ID";
const UPDATE_NAME = "UPDATE_NAME";

export default function reducer(state = initialState, action){
    switch (action.type){
        case UPDATE_ASSET_ID:
        return Object.assign({}, state, {asset_id: action.payload})
        case UPDATE_NAME:
        return Object.assign({}, state, {assetName: action.payload})

        default:
        return state
    }
}

export function updateName(assetName){
    return{
        type: UPDATE_NAME,
        payload: assetName
    }
}

export function updateID(asset_id){
    return{
        type: UPDATE_ASSET_ID,
        payload: asset_id,
    }
}