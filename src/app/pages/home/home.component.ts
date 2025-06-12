import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  

  trendingMovies: any[] = [];

  trendingShows: any[] = [];


  constructor(private movies:MoviesService) {}

  ngOnInit(){

    this.movies.getTrending().subscribe((res)=> {
      this.trendingMovies = res.results;
      console.log(this.trendingMovies);
    } );

    this.movies.getTrendingShows().subscribe((res)=> {
      this.trendingShows = res.results;
      console.log(this.trendingShows);

  });

}

update() {
    this.movies.updateWatchList()
  }
}
