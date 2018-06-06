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
  projeto:any = {nome:"",valor:0,descricao:""};
  constructor(private router: Router, private service: AppService) { }

  ngOnInit() {
  }

  salvar(){
    this.service.cadastrarProjeto(this.projeto).subscribe(
      res => {
        Materialize.toast("Projeto cadastrado!", 3000, "green");
        this.router.navigate(['']);
      },
      err => {
        Materialize.toast("Erro, "+err, 3000, "red");
      });
  }
}