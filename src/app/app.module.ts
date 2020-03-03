import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Route} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ShowListComponent } from './show/components/show-list/show-list.component';
import { SharedModule } from './shared/shared.module';
const routes:Route[]=[
  { path:'',
   component:ShowListComponent
  }
]
  
@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
