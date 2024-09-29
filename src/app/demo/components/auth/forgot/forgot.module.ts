import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { MessagesDemoModule } from '../../uikit/messages/messagesdemo.module';
import { ToastModule } from 'primeng/toast';  // Importar ToastModule

@NgModule({
    imports: [
        CommonModule,
        ForgotRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        HttpClientModule,
        MessagesDemoModule,
        ToastModule
    ],
    declarations: [ForgotComponent],
    providers: [MessageService]
})
export class ForgotModule { }
