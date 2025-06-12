import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showdetails',
  standalone: false,
  templateUrl: './showdetails.component.html',
  styleUrl: './showdetails.component.css'
})
export class ShowdetailsComponent {

  showId: any =""
  showDetails:any = ""

  constructor(public ac: ActivatedRoute, public api:MoviesService) {
    this.ac.params.subscribe((p:any)=>this.showId=p.series_id)
  }


   update() {
    this.api.updateWatchList()
  }


}
