import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  Pmovies:any=""
  movieId: any = ''
  movieDetails: any = ''
 
  constructor(public ac: ActivatedRoute, public api:MoviesService) {
    this.ac.params.subscribe((p:any)=>this.movieId=p.id)
  }
  update() {
    this.api.updateWatchList()
  }
  ngOnInit() {
    this.api.getMovieById(this.movieId).subscribe((res) => this.movieDetails = res)
   

 this.api.getPopularMovies().subscribe((res)=> {
      this.Pmovies = res.results;
      console.log(this.Pmovies);
    } );  
  }

}
