import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MegaMenuItem } from 'primeng/api';
import { MenuService } from 'src/app/layout/app.menu.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    selectedPanel: string = 'customers';

    breadcrumbItems: MenuItem[] = [];

    tieredItems: MenuItem[] = [];

    items: MenuItem[] = [];

    routeItems: MenuItem[] = [];

    megaMenuItems: MegaMenuItem[] = [];

    panelMenuItems: MenuItem[] = [];

    stepsItems: MenuItem[] = [];

    slideItems: MenuItem[] = [];

    menuItems: MenuItem[] = [];

    plainMenuItems: MenuItem[] = [];

    pageIndex: number = 0;

    themes = [
        { label: 'Bootstrap4 Dark Blue', value: 'bootstrap4-dark-blue' },
        { label: 'Bootstrap4 Dark Purple', value: 'bootstrap4-dark-purple' },
        { label: 'MD Dark Indigo', value: 'md-dark-indigo' },
        { label: 'MD Dark Deep Purple', value: 'md-dark-deeppurple' },
        { label: 'MDC Dark Indigo', value: 'mdc-dark-indigo' },
        { label: 'MDC Dark Deep Purple', value: 'mdc-dark-deeppurple' },
        { label: 'Lara Dark Indigo', value: 'lara-dark-indigo' },
        { label: 'Lara Dark Blue', value: 'lara-dark-blue' },
        { label: 'Lara Dark Purple', value: 'lara-dark-purple' },
        { label: 'Lara Dark Teal', value: 'lara-dark-teal' },
        { label: 'Vela Blue', value: 'vela-blue' },
        { label: 'Vela Green', value: 'vela-green' },
        { label: 'Vela Orange', value: 'vela-orange' },
        { label: 'Bootstrap4 Light Blue', value: 'bootstrap4-light-blue' },
        { label: 'Bootstrap4 Light Purple', value: 'bootstrap4-light-purple' },
        { label: 'Lara Light Indigo', value: 'lara-light-indigo' },
        { label: 'Lara Light Blue', value: 'lara-light-blue' },
        { label: 'Lara Light Purple', value: 'lara-light-purple' },
        { label: 'Lara Light Teal', value: 'lara-light-teal' },
    ];

    selectedTheme: any;

    @Input() minimal: boolean = false;

    scales: number[] = [12, 13, 14, 15, 16];

    constructor(
        public layoutService: LayoutService,
        public menuService: MenuService
    ) {}


    ngOnInit() {
        this.tieredItems = [
            {
                label: 'Gerais',
                icon: 'pi pi-fw pi-cog',
                command: () => this.selectPanel('customers'),
            },
            {
                label: 'Pagamentos',
                icon: 'pi pi-fw pi-shopping-cart',
                command: () => this.selectPanel('orders'),
            },
            {
                label: 'Notificações',
                icon: 'pi pi-fw pi-envelope',
                command: () => this.selectPanel('shipments'),
            },
            {
                label: 'Perfil',
                icon: 'pi pi-fw pi-user',
                command: () => this.selectPanel('profile'),
            },
            { separator: true },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-sign-out',
                command: () => this.selectPanel('quit')
            }
        ];


    }

    selectPanel(panel: string) {
        this.selectedPanel = panel;
    }

    onThemeChange(event: any): void {

        this.theme = event.value.value;

    }

    get visible(): boolean {
        return this.layoutService.state.configSidebarVisible;
    }
    set visible(_val: boolean) {
        this.layoutService.state.configSidebarVisible = _val;
    }

    get scale(): number {
        return this.layoutService.config().scale;
    }
    set scale(_val: number) {
        this.layoutService.config.update((config) => ({
            ...config,
            scale: _val,
        }));
    }

    get menuMode(): string {
        return this.layoutService.config().menuMode;
    }
    set menuMode(_val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            menuMode: _val,
        }));
    }

    get inputStyle(): string {
        return this.layoutService.config().inputStyle;
    }
    set inputStyle(_val: string) {
        this.layoutService.config().inputStyle = _val;
    }

    get ripple(): boolean {
        return this.layoutService.config().ripple;
    }
    set ripple(_val: boolean) {
        this.layoutService.config.update((config) => ({
            ...config,
            ripple: _val,
        }));
    }

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }
    get theme(): string {
        return this.layoutService.config().theme;
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }
    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }

    changeTheme(theme: string, colorScheme: string) {
        this.theme = theme;
        this.colorScheme = colorScheme;
    }

    decrementScale() {
        this.scale--;
    }

    incrementScale() {
        this.scale++;
    }
}
