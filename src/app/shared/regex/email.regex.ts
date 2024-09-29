export class EmailValidator {
    private emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    validate(email: string): boolean {
        return this.emailPattern.test(email);
    }
}
