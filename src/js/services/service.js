const BASE_URL = "https://www.swapi.tech/api"

const IMG_URL = `https://starwars-visualguide.com/assets/img/characters/`

export async function getImgCharacter(id){
    const response = await fetch(IMG_URL+id+".jpg");
    const dataResponse = await response;
    return dataResponse;
}

export async function getPeople() {
    const response = await fetch(BASE_URL+"/people", {method:"GET"})
    const dataResponse = await response.json();
    return dataResponse;
}

export async function getInfoPeople(id){
    const response = await fetch(BASE_URL+"/people/"+id, {method:"GET"})
    const dataResponse = await response.json();
    return dataResponse;   
}

export async function getPlanets(){
    const response = await fetch(BASE_URL+"/planets", {method:"GET"})
    const dataResponse = await response.json();
    return dataResponse;
}

export async function getVehicles(){
    const repsonse = await fetch(BASE_URL+"/vehicles", {method:"GET"})
    const dataResponse = await repsonse.json();
    return dataResponse;
}
