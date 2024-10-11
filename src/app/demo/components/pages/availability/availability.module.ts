import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommitmentsRoutingModule } from './availability-routing.module';
import {AvailabilityComponent } from './availability.component';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CalendareModule } from '../../calendar/calendar.module';
import { KanbanBoardModule } from '../../kanban/kanban.module';

@NgModule({
    imports: [
        CommonModule,
        CommitmentsRoutingModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        MenubarModule,
		TabMenuModule,
		StepsModule,
		TieredMenuModule,
		MenuModule,
		ContextMenuModule,
		MegaMenuModule,
		PanelMenuModule,
        CalendareModule,
        KanbanBoardModule
    ],
    declarations: [AvailabilityComponent]
})
export class AvailabilityModule { }
