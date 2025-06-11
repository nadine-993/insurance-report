import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MotoCustomerService } from '../_services/motoCustomer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-moto-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],  // <-- Add CommonModule for ngIf, ngFor etc.
  templateUrl: './create-moto-profile.component.html',
  styleUrls: ['./create-moto-profile.component.css']  // <-- fix typo here: styleUrl -> styleUrls
})
export class CreateMotoProfileComponent {
  private toastr = inject(ToastrService);
  motocustomerservice = inject(MotoCustomerService);

  profile: any = {};

  onSubmit() {
    this.motocustomerservice.createMotoProfile(this.profile).subscribe({
      next: _ => {
        alert('User created successfully!');
        this.profile = {};  // Reset form model
      },
      error: (error: { error: string | undefined }) => this.toastr.error(error.error)
    });
  }
}
