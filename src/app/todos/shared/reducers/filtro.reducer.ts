import { createReducer, on, props } from '@ngrx/store';
import { filtrar, filtrosValidos } from '../actions/filtro.actions';

export const initialState: filtrosValidos = 'todos' as filtrosValidos;

const _filtroReducer = createReducer(initialState,
  on(filtrar, (state, {filtro}) => filtro ),
);

export function filtroReducer(state:any, action: any) {
  return _filtroReducer(state, action);
}
