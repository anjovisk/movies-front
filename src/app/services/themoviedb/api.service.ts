import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from 'src/app/models/page';
import { Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  popularMoviesURL: string = 'https://api.themoviedb.org/3/movie/popular';
  singleMovieURL: string = 'https://api.themoviedb.org/3/movie';
  searchMovieURL: string = 'https://api.themoviedb.org/3/search/movie';
  apiKey: string = "Your API KEY";

  constructor(private httpClient: HttpClient) { }

  public listPopularMovies(pageNumber: number) {
    return this.httpClient.get<Page>(`${this.popularMoviesURL}?${this.apiKey}&page=${pageNumber}`)
  }

  public searchMovies(query: string, pageNumber: number) {
    return this.httpClient.get<Page>(`${this.searchMovieURL}?${this.apiKey}&query=${query}&page=${pageNumber}`)
  }

  public getMovie(id: string) {
    return this.httpClient.get<Movie>(`${this.singleMovieURL}/${id}?${this.apiKey}`)
  }
}
