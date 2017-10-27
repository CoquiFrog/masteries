const GOUP = "GOUP";
const GODOWN = "GODOWN";

const initialState = {currentValue: 0}

export default function counter (state = initialState, action){
    switch (action.type) {
        case GOUP:
        return {currentValue: state.currentValue + action.amount };
        case GODOWN:
        return {currentValue: state.currentValue - action.amount };
        default:
            return state;
    }
}

export function goup( amount ) {
    return {amount, type: GOUP};
}

export function decrement (amount ){
    return {amount, type: GODOWN};
}