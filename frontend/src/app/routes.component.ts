import { Routes,RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponentComponent } from "./login/login.component";
import { ProfileGuardGuard } from "./profile-guard.guard";
import { RegistrationComponent } from "./registration/registration.component";
import { SuccessComponent } from "./success/success.component";

const routingPath : Routes=[
    {
        path: 'login',
        component: LoginComponentComponent
    },
    {
        path: 'login/:id',
        component: LoginComponentComponent
    },
    {
        path:'register',
        component:RegistrationComponent
    },
    {
        path:'success/:un', component:SuccessComponent, canActivate:[ProfileGuardGuard],children:[
            {path:'dashboard', component:DashboardComponent}
        ]
    }
];

export const  routingComponet = RouterModule.forRoot(routingPath);
