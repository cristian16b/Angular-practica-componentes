import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { RenderComponent } from './render/render.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { PipesComponent } from './pipes/pipes.component';
import { PruebapipePipe } from './pruebapipe.pipe';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponentebComponent } from './componenteb/componenteb.component';
import { ComponenteCComponent } from './componente-c/componente-c.component';
import { ComponenteDetalleComponent } from './componente-detalle/componente-detalle.component';
import { Route  } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';

// defino las rutas que voy a usar
const routes: Routes = [
  {path: '',component: ComponenteDetalleComponent },
  {path:'componentea/:id/:id2',component: ComponenteAComponent},
  {path:'componenteb',component: ComponentebComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DirectivasComponent,
    RenderComponent,
    PadreComponent,
    HijoComponent,
    PipesComponent,
    PruebapipePipe,
    ComponenteAComponent,
    ComponentebComponent,
    ComponenteCComponent,
    ComponenteDetalleComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
