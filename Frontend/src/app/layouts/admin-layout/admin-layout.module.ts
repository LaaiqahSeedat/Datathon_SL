import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import { AnxietyComponent } from 'app/user-profile/Components/anxiety/anxiety.component';
import { DepressionComponent } from 'app/user-profile/Components/depression/depression.component';
import { EatingComponent } from 'app/user-profile/Components/eating/eating.component';
import { BipolarComponent } from 'app/user-profile/Components/bipolar/bipolar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatSliderModule,
    NgxChartsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    AnxietyComponent,
    DepressionComponent,
    EatingComponent,
    BipolarComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,

  ]
})

export class AdminLayoutModule {}
