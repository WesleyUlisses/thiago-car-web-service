import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { CommitmentsModule } from '../pages/commitments/commitments.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { FinanceModule } from '../pages/finance/finance.module';
import { ServicesModule } from '../pages/services/services.module';
@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardComponent },
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
        }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
