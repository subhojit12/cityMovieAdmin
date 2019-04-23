import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';
import { ignoreElements } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }
  data={
    email:'',
    password:''
  }
  res:any=[];
  login(data){
    console.log(data);
    this.loginService.authenticate().subscribe((result)=>{
      this.res=result;
      for(var i=0;i<this.res.length;i++){
        if(this.res[i].password==data.password){
          this.router.navigate(['/movies']);
          break;
        }
      }
    })
  }
  ngOnInit() {}

}
