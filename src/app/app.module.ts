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
import { PruebaServiciosComponent } from './prueba-servicios/prueba-servicios.component';
import { ProductosService } from './servicio/productos.service';
import { PersonaService } from './servicio/persona.service';
import { ConsumirRestComponent } from './consumir-rest/consumir-rest.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    FormularioComponent,
    PruebaServiciosComponent,
    ConsumirRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [ProductosService,PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
