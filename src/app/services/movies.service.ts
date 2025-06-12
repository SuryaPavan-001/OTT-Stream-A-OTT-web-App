import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

 count = 0;
  sub = new Subject<number>();


  private apiKey = 'd38df71c3e83752f9637dc576e81982f';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private hc: HttpClient) {}

  getTrending(): Observable<any> {
    return this.hc.get(`${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`);
  }


  getTrendingShows(): Observable<any> {
  return this.hc.get(`${this.baseUrl}/trending/tv/week?api_key=${this.apiKey}`);}



  getPopularShows(): Observable<any> {
  return this.hc.get(`${this.baseUrl}/tv/popular?api_key=${this.apiKey}`);
}


getTopRatedShows(): Observable<any> {
  return this.hc.get(`${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}`);
}


getPopularMovies(): Observable<any> {
    return this.hc.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`);
  }


   getTopRatedMovies(): Observable<any> {
    return this.hc.get(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`);
  }

    getMovieById(id: any) {
    return this.hc.get(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

   

  


  updateWatchList() {
    this.count++;
    this.sub.next(this.count);
    console.log(this.count)
  }



}
