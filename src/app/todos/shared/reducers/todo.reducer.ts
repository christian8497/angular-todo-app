import { createReducer, on } from "@ngrx/store";
import { crear, toggle, editar, borrar, toggleAll, borrarCompletados } from '../actions/todo.actions';
import { Todo } from '../../models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Ver Ironman'),
  new Todo('Jugar smash'),
  new Todo('Ver peliculas'),
  new Todo('Ver series')
];

const _todoReducer = createReducer(estadoInicial,
  on( crear, (state, props) => [ ...state, new Todo(props.texto) ] ),

  on( toggle, (state, props) => {
    return state.map( todo => {
      if ( todo.id === props.id ){
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),

  on( editar, (state, props) => {
    return state.map( todo => {
      if ( todo.id === props.id ){
        return {
          ...todo,
          texto: props.texto
        }
      } else {
        return todo;
      }
    });
  }),

  on(toggleAll,(state, props) => state.map( todo => {
    return {
      ...todo,
      completado: props.completado
    }
  })
  ),

  on(borrar, (state, props) => state.filter( todo => todo.id !== props.id)),

  on(borrarCompletados, (state) => state.filter( todo => !todo.completado )),

  );

  export const todoReducer = (state: any, action: any) => {
    return _todoReducer(state, action);
}
