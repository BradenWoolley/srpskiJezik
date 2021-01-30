import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private title;
  private answer;

  constructor(private http: HttpClient) {}

  ionViewWillEnter(){
    this.http.get('http://localhost:8080')
    .subscribe((value) =>{
      console.log(value);
      this.title = value;
    })
  }

  private submitAnswer(){

    let data = JSON.stringify({
      key: this.answer
    });

    this.http.post('http://localhost:8080', data, { headers:  {'Content-Type': 'application/json'} })
    .subscribe((response)=>{
      console.log(response);
    })
  }

}
