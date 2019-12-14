import { Component, OnInit, Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Movie } from '../models/movie';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiService } from '../services/themoviedb/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
  public movie: Movie

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getMovie(params.get('id')))
    ).subscribe(movie => this.movie = movie);
  }

}
