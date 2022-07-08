import { RouterModule, Routes  } from "@angular/router";
import { CitasComponent } from "./usuarios/citas/citas.component";
import { InicioComponent } from "./usuarios/inicio/inicio.component";
import { PaquetesComponent } from "./usuarios/paquetes/paquetes.component";


const APP_ROUTES: Routes =[
    { path: 'inicio', component: InicioComponent},
    { path: 'citas-usuario', component: CitasComponent},
    { path: 'citas-estetica', component: CitasComponent},
    { path: 'paquetes', component: PaquetesComponent},


    
    { path: '**', pathMatch: 'full',redirectTo:'inicio' }

];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);