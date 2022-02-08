import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const filtrar = createAction(
  '[Filtro] filtrar',
  props<{ filtro: filtrosValidos }>()
);
