import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { SinfuncionComponent } from './componentes/sinfuncion/sinfuncion.component';
import { NotfoundComponent } from './components/notfound/notfound.component'; './components/notfound/notfound.component';

const routes: Routes = [{
  path:   "", redirectTo : "/Planilla", pathMatch: "full" , 
 
}, 
{
  path: "Planilla" , component : CuerpoComponent
}, 
{
  path: "SinFuncion" , component : SinfuncionComponent
}, 
{
  path: "NotFound" , component : NotfoundComponent
},{
  path: "**" , redirectTo : "/NotFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
