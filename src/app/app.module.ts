import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { SinfuncionComponent } from './componentes/sinfuncion/sinfuncion.component';
import { PlanillaTablaComponent } from './componentes/planilla-tabla/planilla-tabla.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GeneralToastComponent } from './componentes/general-toast/general-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    CuerpoComponent,
    SinfuncionComponent,
    PlanillaTablaComponent,
    NotfoundComponent,
    GeneralToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
