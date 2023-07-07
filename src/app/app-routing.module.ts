import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaComponent } from './acerca/acerca.component';

// rutas de navegación
const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}, // se redirije a incio 
  {path: 'inicio', component: InicioComponent },
  {path: 'contacto', component: ContactoComponent },
  {path: 'acerca', component: AcercaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
