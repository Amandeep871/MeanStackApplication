import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { HomeListComponent } from './home-list/home-list.component';
import { MusicServiceService } from './music-service.service';
import { from } from 'rxjs';
import { APP_BASE_HREF} from '@angular/common';
import { RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FrameworkComponent } from './framework/framework.component';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HomeListComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    CreateComponent,
    DetailsPageComponent,
    
    UpdateComponent,
    
    NavbarComponent,
    
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path:'create',
        component:CreateComponent
      },
      {
        path: 'home-list',
        component: HomeListComponent
      },
      {
        path: 'update/:musicid',
        component: UpdateComponent
      },
      {
        path:'music/:musicId',
        component:DetailsPageComponent
      }
  ])
],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},
    MusicServiceService],
  
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
