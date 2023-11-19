import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { LocationModalComponent } from '../location-modal/location-modal.component';

@Component({
  selector: 'delivery-location-modal',
  templateUrl: './delivery-location-modal.component.html',
  styleUrls: ['./delivery-location-modal.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule, MatButtonModule, MatSnackBarModule, FlexLayoutModule
  ],
})
export class DeliveryLocationModalComponent {
  constructor(public deliveryLocationDialogRef: MatDialogRef<DeliveryLocationModalComponent>, public dialog: MatDialog) { }
  closeDialog() {
    this.dialog.closeAll();
  }
  openSecondDialog() {
    if (this.deliveryLocationDialogRef) {
      this.deliveryLocationDialogRef.close();
    }
    this.dialog.open(LocationModalComponent, { width: '32rem', height: '16rem' });
  }

}