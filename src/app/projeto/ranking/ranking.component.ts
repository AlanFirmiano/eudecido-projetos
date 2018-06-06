import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

declare var Materialize:any;
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  rank = [];
  constructor(private router: Router, private service: AppService) { }

  ngOnInit() {
    this.lista();
  }

  lista(){
    this.service.ranking().subscribe(
      res =>{
        this.rank = res;
      }
    )
  }

}