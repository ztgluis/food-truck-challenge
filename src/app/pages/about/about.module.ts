import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: AboutComponent
            }
        ])
    ],
    declarations: [AboutComponent]
})
export class AboutModule {}
