import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import AuthData from 'src/app/shared/interfaces/auth/auth.interface';
import { MessageService } from 'primeng/api';
import { EmailValidator } from 'src/app/shared/regex/email.regex';
import { PasswordValidator } from 'src/app/shared/regex/password.regex';

@Component({
    selector: 'app-login',
    templateUrl: './forgot.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    providers: [MessageService, EmailValidator, PasswordValidator]
})
export class ForgotComponent {
    valCheck: string[] = ['remember'];

    authData: AuthData = {
        email: '',
        password: '',
        remember: false
    };

    constructor(
        private passwordValidator: PasswordValidator,
        private emailValidator: EmailValidator,
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService  // Usando o MessageService diretamente
    ) {}

    async sendResetLink(): Promise<void> {
        try {

            if(!this.authData.email) {
                this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Email é nescessario', life: 4000 });
                return;
            }

            if(!this.emailValidator.validate(this.authData.email)) {
                this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Email invalido', life: 4000 });
                return;
            }

            // const response = await this.authService.forgotPassword(this.authData.email);
            // if (response.status === 200) {
            //     this.messageService.add({ key: 'tst', severity: 'success', summary: 'Success', detail: 'Link de redefinição de senha enviado com sucesso!', life: 4000 });
            // }
        } catch (error) {
            this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'A tentativa de envio de link de redefinição de senha falhou, tente novamente!', life: 4000 });
            console.error('Forgot password failed', error);
        }
    }

}
