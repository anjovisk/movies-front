import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../models/page';
import { Observable } from 'rxjs';
import { ApiService } from '../services/themoviedb/api.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  public pager: Page;
  public movies: Movie[];
  public queryValue: string = '';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.listPopularMovies(1).subscribe(result => {
      this.pager = result;
      this.movies = result.results;
    });
  }

  searchMovie() {
    console.log(this.queryValue);
    this.apiService.searchMovies(this.queryValue, 1).subscribe(result => {
      this.pager = result;
      this.movies = result.results;
    });
  }
}
