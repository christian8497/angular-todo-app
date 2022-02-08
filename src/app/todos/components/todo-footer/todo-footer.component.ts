import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/reducers/app.reducer';
import * as actions from '../../shared/actions/filtro.actions';
import { borrarCompletados } from '../../shared/actions/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = ['todos','completados','pendientes'];
  pendientes: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    /*this.store.select('filtro')
      .subscribe(filtro => this.filtroActual = filtro );
    */
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado ).length;
    });
  }

  cambiarFiltro(filtro: actions.filtrosValidos): void {
    this.store.dispatch(actions.filtrar({ filtro: filtro }));
  }

  limpiarCompletados(): void {
    this.store.dispatch( borrarCompletados());
  }

}
