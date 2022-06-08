import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  isLoggedIn$!: Observable<boolean>;

  constructor(private autherService: AuthService){
    this.isLoggedIn$ = this.autherService.isLoggedIn$;
  }

  logout(){
    this.autherService.updateLogin(false);
  }

}
