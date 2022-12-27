import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: 'search', loadChildren: () => import('./features/search-page/search-page.module').then(m => m.SearchPageModule) },
  { path: 'details/:id', loadChildren: () => import('./features/details-page/details-page.module').then(m => m.DetailsPageModule) },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
