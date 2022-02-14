import { Routes,RouterModule } from "@angular/router";
import { LoginComponentComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

const routingPath : Routes=[
    {
        path: 'login',
        component: LoginComponentComponent
    },
    {
        path:'login/register',
        component:RegistrationComponent
    }
];

export const  routingComponet = RouterModule.forRoot(routingPath);
