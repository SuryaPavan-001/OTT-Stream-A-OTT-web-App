import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-shows',
  standalone: false,
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.css'
})
export class ShowsComponent {

trendingShows: any[] = [];
PShows: any[] = [];
TShows: any[] = [];


  
  
    constructor(private movies:MoviesService) {}
  
    ngOnInit(){
        this.movies.getTrendingShows().subscribe((res)=> {
        this.trendingShows = res.results;
        console.log(this.trendingShows);
  
    });

          this.movies.getPopularShows().subscribe((res)=> {
        this.PShows = res.results;
        console.log(this.PShows);
  
    });

      this.movies.getTopRatedShows().subscribe((res)=> {
        this.TShows = res.results;
        console.log(this.TShows);
  
    });
    
  
  }
update() {
    this.movies.updateWatchList()
  }
  
  }
  


