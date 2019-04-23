import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }
  private loginUrl = 'http://192.168.1.30:3000/api/customers';
  authenticate():Observable<any>{
    return this.http.get<[]>(this.loginUrl);
  }
}
