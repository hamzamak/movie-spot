import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { fetchDataFromApi } from 'src/app/utils/api';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  arrowRight = faArrowAltCircleRight
  loading!: boolean;
  query!: any;
  items !: any;
  totalPages!: number;
  genres !: any;
  url!: any;
  currentPage: any = 1;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;

    this.route.paramMap.subscribe(params => {
      this.query = params.get('query');
      this.movieService.searchForMovies(this.query, this.currentPage).then((data) => {
        this.items = data?.results
        this.totalPages = data?.total_pages
        console.log(data)
      });

      this.movieService.genresCall().then((data) => {
        this.genres = data
      });

      fetchDataFromApi("/configuration").then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        this.url = url;
      });
    });

    this.loading = false;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0);
      }
    });

  }

  ToNextPage() {
    if (this.currentPage + 1 <= this.totalPages) {
      this.currentPage += 1;
      this.movieService.searchForMovies(this.query, this.currentPage ).then((data) => {
        this.items =  [...this.items ,... data?.results]
        console.log(this.items)

      });
    }
  }
}