import axios from "axios";
const urlAll = "https://studies.cs.helsinki.fi/restcountries/api/all/"

const getAll = () => {
    const request = axios.get(urlAll)
    return request.then(response => response.data)
}

export default { getAll }