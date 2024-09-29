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
    templateUrl: './login.component.html',
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
export class LoginComponent {
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


    async submitForm(): Promise<void> {
        try {

            if(!this.authData.email || !this.authData.password) {
                this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Email e senha são nescessarios', life: 4000 });
                return;
            }

            if(!this.emailValidator.validate(this.authData.email)) {
                this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Email invalido', life: 4000 });
                return;
            }

            if(!this.passwordValidator.validate(this.authData.password)) {
                this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'Senha invalida', life: 4000 });
                return;
            }

            const response = await this.authService.login(this.authData.email, this.authData.password);
            if (response.status === 200) {
                this.messageService.add({ key: 'tst', severity: 'success', summary: 'Success', detail: 'Login efetuado com sucesso!', life: 4000 });
                this.router.navigate(['/home']);
            }
        } catch (error) {
            this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: 'A tentativa de Login Falhou, tente novamente!', life: 4000 });
            console.error('Login failed', error);
        }
    }
}
