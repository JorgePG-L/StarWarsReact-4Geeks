const BASE_URL = "https://www.swapi.tech/api"

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
