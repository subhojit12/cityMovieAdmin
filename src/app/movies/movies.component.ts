import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router) { }
  movies:[]
  ngOnInit() {
    this.movieService.getMovies().subscribe((result)=>{
      console.log(result)
      this.movies=result;
    })
  }
  onSelect(m){
    this.router.navigate(['edit-movie/',m.id])
  }
  deleteMovie(m){
    this.movieService.deleteMovie(m).subscribe((e)=>{
      this.movieService.getMovies().subscribe((result)=>{
        this.movies=result
      })
    });
  }

}
