import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

declare var Materialize:any;
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  politicos = [];
  nomePessoa: number;
  projeto:any = {nome:"", valor: 0, descricao:"",latitude:-4.969773182071033,longitude:-39.016051930308436};
  constructor(private router: Router, private service: AppService) { }

  ngOnInit() {
    this.listaPoliticos();
  }

  listaPoliticos(){
    this.service.buscarPoliticos().subscribe(
      res => {
        this.politicos = res;
        console.log(res);
      }
    );
  }

  placeMarker($event){
    this.projeto.latitude = $event.coords.lat;
    this.projeto.longitude = $event.coords.lng;
    console.log(this.projeto.latitude+" - "+this.projeto.longitude)
  }
  salvar(){
    this.service.cadastrarProjeto(this.projeto).subscribe(
      res => {
        Materialize.toast("Projeto cadastrado!", 3000, "green");
        this.router.navigate(['lista']);
      },
      err => {
        Materialize.toast("Erro, "+err, 3000, "red");
      });
  }
}