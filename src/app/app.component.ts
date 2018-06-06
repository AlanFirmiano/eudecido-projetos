import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  title = 'app';
  token = false
  constructor(private router: Router, private service: AppService) {}
  ngDoCheck(){
    this.token = localStorage.getItem('token')? true: false;
  }
  ngOnInit() {
    this.token = localStorage.getItem('token')? true: false;
  }

  deslogar(){
    localStorage.removeItem('token');
    this.service.token = undefined;
    this.router.navigate(['login']);
  }
}
