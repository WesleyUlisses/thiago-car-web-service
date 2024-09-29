import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        HttpClientModule
    ],
    providers: [AuthService],
})
export class AuthModule { }
