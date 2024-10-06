import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommitmentsComponent } from './commitments.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CommitmentsComponent }
	])],
	exports: [RouterModule]
})
export class CommitmentsRoutingModule { }
