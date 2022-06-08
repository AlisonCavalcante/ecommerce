import { Constantes } from './../utils/Constantes';
import { Observable, take, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = new  BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLogged.asObservable();

  constructor(private http: HttpClient) { }

  authentication(user: any): Observable<any>{
    return this.http.post<any>(Constantes.URL_AUTHETICATION, user).pipe(
      take(1)
    )
  }

  updateLogin(isLogged: boolean){
    this.isLogged.next(isLogged);
  }

}
