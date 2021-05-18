import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { DataService } from '../../data.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  registros: any = "";

  games: Game[] = [];

  text: string = "";

  mode: string = "";

  time: string = "";

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.text = "No se ha cargado ningún dato"
  }

  onClickConcurrent() {
    if (isNaN(this.registros)) {
      console.log("not a number")
      return;
    }

    this.text = "Cargando datos, espere";

    this.games = [];

    this.dataService.concurrent(this.registros).subscribe((res: any) => {
      this.games = this.formatResponse(res);
    })
  }

  onClickSequential() {
    if (isNaN(this.registros)) {
      console.log("not a number")
      return;
    }

    this.text = "Cargando datos, espere";

    this.games = [];

    this.dataService.sequential(this.registros).subscribe((res: any) => {
      this.games = this.formatResponse(res);
    })
  }

  formatResponse(array: []): [] {
    var lastitem: any = array.pop();

    if (lastitem !== undefined) {
      
      this.mode = lastitem.mode;

      this.time = lastitem.time;
    }

    return array;
  }
}
