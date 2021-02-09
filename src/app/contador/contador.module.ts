import { NgModule } from '@angular/core';
import { ContadorComponenet } from './contador/contador.component';


@NgModule({
    declarations:[
        ContadorComponenet
    ],
    exports:[
      ContadorComponenet  
    ]
})


export class ContadorModule{

}