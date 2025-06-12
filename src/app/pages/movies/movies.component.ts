import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  standalone: false,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

    trendingMovies: any[] = [];
    Pmovies: any = [];
    Tmovies: any = [];

    constructor(private ms:MoviesService) {}


     ngOnInit(){

    this.ms.getTrending().subscribe((res)=> {
      this.trendingMovies = res.results;
      console.log(this.trendingMovies);
    } );

     this.ms.getPopularMovies().subscribe((res)=> {
      this.Pmovies = res.results;
      console.log(this.Pmovies);
    } );

      this.ms.getTopRatedMovies().subscribe((res)=> {
      this.Tmovies = res.results;
      console.log(this.Tmovies);
    } );

}

update() {
    this.ms.updateWatchList()
  }
}