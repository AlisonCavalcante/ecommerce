import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  message: string = '';
  constructor() { }

  addMensagem(message: string){
    this.message = message;
    setTimeout( () => {
      this.clearMessage();
    }, 1000)
  }

  clearMessage(){
    this.message = '';
  }
}
