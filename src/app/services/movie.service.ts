import { Injectable } from '@angular/core';
import { fetchDataFromApi } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url!: any;
  //  genres!: any;
  constructor() {
    // this.fetchApiConfig() ;
    this.genresCall();

  }

  // async fetchApiConfig  ()  {
  //   fetchDataFromApi("/configuration").then((res) => {
  //       const url  = {
  //           backdrop: res.images.secure_base_url + "original",
  //           poster: res.images.secure_base_url + "original",
  //           profile: res.images.secure_base_url + "original",
  //       };
  //       this.url = url ;
  //       return url ;
  //   });
  // };

  genresCall = async () => {
    let promises: any = [];
    let endPoints = ["tv", "movie"];
    let allGenres: any = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item: any) => (allGenres[item.id] = item));
    });
    // this.genres = allGenres;

    return allGenres
  };

  async getUpComingMoviBackgroundImage() {
    try {
      const res = await fetchDataFromApi('/movie/upcoming');
      return res;
    } catch (err) {
      throw err;
    }
  }

  async getTrendingMovies(endpoint: string) {
    try {
      const res = await fetchDataFromApi(`/trending/movie/${endpoint}`);
      return res;
    } catch (err) {
      throw err;
    }
  }



  async getTopRatedMovies(endpoint: string, type_endpoint: "top_rated" | "popular") {

    try {
      const res = await fetchDataFromApi(`/${endpoint}/${type_endpoint}`);
      return res;
    } catch (err) {
      throw err;
    }
  }

  async getDetailMovie(id: string, endpoint: string) {
    try {
      const res = await fetchDataFromApi(`/${endpoint}/${id}`);
      return res;
    } catch (err) {
      throw err;
    }
  }

  async getMovieCredits(id: string, endpoint: string) {
    try {
      const res = await fetchDataFromApi(`/${endpoint}/${id}/credits`);
      return res;
    } catch (err) {
      throw err;
    }
  }

  async getSimilarMovies(id: string, endpoint: string) {
    try {
      const res = await fetchDataFromApi(`/${endpoint}/${id}/similar`);
      return res;
    } catch (err) {
      throw err;
    }
  }

  async getRecommandationMovies(id: string, endpoint: string) {
    try {
      const res = await fetchDataFromApi(`/${endpoint}/${id}/recommendations`);
      return res;
    } catch (err) {
      throw err;
    }
  }
  async searchForMovies(query: string, pageNum: number) {
    try {
      const res = await fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
      return res;
    } catch (err) {
      throw err;
    }
  }
}
