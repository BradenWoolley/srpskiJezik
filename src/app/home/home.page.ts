import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private title;

  constructor(private http: HttpClient) {}

  ionViewWillEnter(){
    this.http.get('http://localhost:8080')
    .subscribe((value) =>{
      console.log(value);
      this.title = value;
    })
  }

  private test() {
    this.http.get('http://localhost:8080')
    .subscribe((value) =>{
      console.log(value);
    })
  }

}
