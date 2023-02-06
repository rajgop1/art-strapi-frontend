import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ColorDirective } from './color.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CreateArtComponent } from './create-art/create-art.component';
import { HeaderInterceptor } from './header.interceptor';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorDirective,
    CreateArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatTooltipModule,
    ScullyLibModule,
    GraphQLModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
