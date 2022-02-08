import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/components/footer/footer.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
