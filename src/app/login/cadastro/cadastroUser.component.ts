import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

declare var Materialize:any;
@Component({
  selector: 'app-cadastroUser',
  templateUrl: './cadastroUser.component.html',
  styleUrls: ['./cadastroUser.component.css']
})
export class CadastroUserComponent implements OnInit {

  usuario: any = {nome: '', login: '', senha: ''};
  constructor(private router: Router, private service: AppService) { }

  ngOnInit() {
  }

  salvar(){
    this.service.cadastrar(this.usuario).subscribe(
      res => {
        Materialize.toast("Usuario cadastrado!", 3000, "green");
        this.router.navigate(['']);
      },
      err => {
        Materialize.toast("Erro, "+err, 3000, "red");
      });
  }
}