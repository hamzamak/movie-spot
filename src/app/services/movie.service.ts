import { Injectable } from '@angular/core';
import { fetchDataFromApi } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url!: any;
  genres!: any;
  trendingMoviesData!: any;
  trendingMoviesLoading!: boolean ;

  constructor(){
    this.fetchApiConfig() ;
    this.genresCall();
    this.getTrendingMovies('day').then((data) => { // by default will fetch trending movies for actual day
      this.trendingMoviesLoading = true;
      this.trendingMoviesData = data;   
      this.trendingMoviesLoading = false;
    });
  }

  async fetchApiConfig  ()  {
    fetchDataFromApi("/configuration").then((res) => {
        const url  = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        };
        this.url = url ;
        return url ;
    });
  };

 genresCall = async () => {
  let promises:any = [];
  let endPoints = ["tv", "movie"];
  let allGenres:any = {};

  endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
  });

  const data = await Promise.all(promises);
  data.map(({ genres }) => {
      return genres.map((item:any) => (allGenres[item.id] = item));
  });
  this.genres = allGenres;
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

  async getTrendingMovies(endpoint : string) {
    try {
      const res = await fetchDataFromApi(`/trending/movie/${endpoint}`);
      return res;
    } catch (err) {
      throw err;
    }
  }

  setTrendingMovies(data : any) {
    this.trendingMoviesData = data ;

  }
}
