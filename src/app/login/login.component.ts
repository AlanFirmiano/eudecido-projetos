import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

declare var Materialize:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  senha: string;
  constructor(private router: Router, private service: AppService) { }

  ngOnInit() {
  }

  logar() {
    this.service.logar(this.login, this.senha).subscribe(
      res => {
        Materialize.toast("Logado!", 3000, "green")
        localStorage.setItem("login", res.user._id)
        localStorage.setItem("token", res.token)
        this.router.navigate(['lista']);        
      },
      err => {
        Materialize.toast("Erro, tente novamente!", 3000, "red")
      }
    )
  }

}