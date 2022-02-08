import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/reducers/app.reducer';
import * as actions from '../../shared/actions/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completados: boolean = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  toggleAll():void {
    this.completados = !this.completados;
    this.store.dispatch( actions.toggleAll({completado: this.completados}));
  }

}
