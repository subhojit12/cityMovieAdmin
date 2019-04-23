import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss'],
})
export class AddMoviesComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router) { }
  movie={
    name:'',
    image_url:'',
    language:'',
    production_house:'',
    type:'',
    year:'',
    rating:''
  }
  ngOnInit() {}
  addMovie(movie){
    movie.date='2019-05-05';
    this.movieService.addMovie(movie).subscribe((e)=>{
      this.router.navigate(['/movies']);
    });
    
  }

}
