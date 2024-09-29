export class PasswordValidator {

    private passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    validate(password: string): boolean {
        return this.passwordPattern.test(password);
    }
}
