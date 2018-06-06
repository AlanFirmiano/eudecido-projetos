import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

declare var Materialize:any;
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  private texto;
  private ob: any;
  private usuario;
  
  constructor(private router: Router, private service: AppService) {
    this.ob = this.service.ob;
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit() {
    console.log(this.ob);
  }

  removerAll(){
    
    for(let i = 0; i<this.ob.likes.length;i++){
      if(this.ob.likes[i]._id == this.usuario._id){
        this.ob.likes.splice(i,1);
      }
    }
    for(let i = 0; i<this.ob.deslikes.length;i++){
      if(this.ob.deslikes[i]._id == this.usuario._id){
        this.ob.deslikes.splice(i,1);
      }
    }
  }
  bom(){
    this.removerAll();
    this.ob.likes.push(this.usuario);
    this.service.up(this.ob).subscribe(
      res => {
        Materialize.toast("Atualizado!", 3000, "green")
      }
    )
  }

  ruim(){
    this.removerAll();
    this.ob.deslikes.push(this.usuario);
    this.service.up(this.ob).subscribe(
      res => {
        Materialize.toast("Atualizado!", 3000, "green")
      }
    )
  }

  comentar(){
    this.ob.comentarios.push({texto: this.texto, user:this.usuario})
    this.service.up(this.ob).subscribe(
      res => {
        Materialize.toast("Comentado!", 3000, "green")
      }
    )
  }
}