const BASE_URL = "https://www.swapi.tech/api"

export async function getPeople() {
    const response = await fetch(BASE_URL+"/people", {method:"GET"})
    const dataResponse = await response.json();
    return dataResponse;
}

export async function getInfoPeople(){
    const response = await fetch(BASE_URL+"/people/1", {method:"GET"})
    const dataResponse = await response.json();
    return dataResponse;
}

