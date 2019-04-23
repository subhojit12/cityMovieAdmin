import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit {

  constructor(private movieService:MovieService,private router:Router,private route:ActivatedRoute) { }
  movie:any;
  private sub:any;
  id:number;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
      this.id = +params['id'];
      this.movieService.getMovieById(this.id).subscribe((movie)=>{
        console.log(movie)
        this.movie=movie;
      })
    })
  }
  editMovie(movie){
    this.movieService.editMovie(movie);
    this.router.navigate(['/movies'])
  }

}
