import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  private movieUrl = 'http://192.168.1.30:3000/api/movies';
  getMovies():Observable<any>{
    return this.http.get<[]>(this.movieUrl);
  }
  getMovieById(id):Observable<any>{
    return this.http.get<[]>(this.movieUrl+"/"+id);
  }
  editMovie(movie):Observable<any>{
    return this.http.put(this.movieUrl,movie.id);
  }
  deleteMovie(m):Observable<any>{
    return this.http.delete(this.movieUrl+"/"+m.id)
  }
  addMovie(movie):Observable<any>{
    return this.http.post(this.movieUrl,movie);
  }
}
