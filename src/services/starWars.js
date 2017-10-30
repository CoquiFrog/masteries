import axios from 'axios';

export const getLukeSkywalker = function(){
    return fetch('http://swapi.co/api/people/1')
    .then(res => res.json())
}

export const getLukeSkywalker2 = function(){
    axios.get('http://swapi.co/api/people/1')
    .then(res => res.json())
    // console.log(res);
}