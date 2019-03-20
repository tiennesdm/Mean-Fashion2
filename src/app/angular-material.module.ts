import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule,
  MatDividerModule,
  MatTableModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  exports : [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    NgxSpinnerModule,
   // FlexLayoutModule,
    AngularFontAwesomeModule,
  ]
})
export class AngularMaterialForm{}
