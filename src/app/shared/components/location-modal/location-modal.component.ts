import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeliveryLocationModalComponent } from '../delivery-location-modal/delivery-location-modal.component';

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
})
export class LocationModalComponent {

  constructor(public deliveryLocationDialogRef: MatDialogRef<DeliveryLocationModalComponent>, public dialogRef: MatDialogRef<LocationModalComponent>, public dialog: MatDialog) { }
  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef.afterClosed().subscribe(result => {
      this.dialog.open(DeliveryLocationModalComponent, { width: '32rem', height: '28rem' });
    });
  }
}