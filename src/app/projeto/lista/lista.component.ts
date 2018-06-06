import { Router } from '@angular/router';
import { Component, OnInit, DoCheck } from '@angular/core';
import { AppService } from '../../app.service';

declare var Materialize:any;
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  projetos = [];
  
  constructor(private router: Router, private service: AppService) { }

  ngOnInit() {
    this.lista();
  }

  lista(){
    this.service.buscar().subscribe(
      res =>{
        this.projetos = res;
      }
    )
  }

  detalhes(ob){
    this.service.ob = ob;
    this.router.navigate(['detalhes']);
  }

}