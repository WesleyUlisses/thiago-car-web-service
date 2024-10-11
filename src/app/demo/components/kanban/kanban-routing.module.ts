import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {KanbanBoardComponent } from './kanban.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { CommitmentsModule } from '../pages/commitments/commitments.module';
import { SettingsModule } from '../pages/settings/settings.module';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: KanbanBoardComponent },
    ])],
    exports: [RouterModule]
})
export class KanbanBoardRoutingModule { }
