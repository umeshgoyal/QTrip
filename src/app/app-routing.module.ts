import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AdventureComponent } from "./view/adventure/adventure.component";
import { HomeComponent } from "./view/home/home.component";
import { ResortComponent } from "./view/resort/resort.component";

const routes:Route[]=[
    {path:'',component:HomeComponent},
    {path:'adventures',component:AdventureComponent},
    {path:'resort',component:ResortComponent}
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}