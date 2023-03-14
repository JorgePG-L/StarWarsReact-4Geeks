const BASE_URL = "https://www.swapi.tech/api"

async function getPeople() {
    const response = await fetch(BASE_URL+"/people", {method:"GET"})
    const dataResponse = await response.json();
    return dataResponse
}

export default getPeople;