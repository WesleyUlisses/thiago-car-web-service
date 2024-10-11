import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { CommitmentsModule } from '../pages/commitments/commitments.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { FinanceModule } from '../pages/finance/finance.module';
import { ServicesModule } from '../pages/services/services.module';
import { AvailabilityModule } from '../pages/availability/availability.module';
@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HomeComponent },
        {
          path: 'commitments', loadChildren: () => import('../pages/commitments/commitments.module').then(m => m.CommitmentsModule)
        },
        {
            path: 'settings', loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsModule)
        },
        {
            path: 'finance', loadChildren: () => import('../pages/finance/finance.module').then(m => m.FinanceModule)
        },
        {
            path: 'services', loadChildren: () => import('../pages/services/services.module').then(m => m.ServicesModule)
        },
        {
            path: 'dashboard', loadChildren: () => import('../pages/dashboard/dashboard.module').then(m => m.DashboardModule)
        },
        {
            path: 'availability', loadChildren: () => import('../pages/availability/availability.module').then(m => m.AvailabilityModule)
        }
    ])],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
