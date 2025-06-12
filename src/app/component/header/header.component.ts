import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  watchlist!: number 

   constructor(public api:MoviesService) {
 
  }
  ngOnInit() {
    this.api.sub.subscribe((res)=>this.watchlist=res)
  }


  menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

}
