import axios from "axios";
import { environment } from "src/environments/environment.development";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = environment.TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url:string, params?:any)  => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
