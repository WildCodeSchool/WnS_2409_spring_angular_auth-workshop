import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-invoice-form',
  imports: [FormsModule],
  templateUrl: './create-invoice-form.component.html',
  styleUrl: './create-invoice-form.component.css'
})
export class CreateInvoiceFormComponent {
  private apiService = inject(ApiService);
  private router = inject(Router);

  invoice = {
    description: '',
    amount: 0,
    date: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.apiService.createInvoice(this.invoice).subscribe({
        next: () => this.router.navigate(['/invoices']),
        error: () => alert("Erreur lors de la création de la facture."),
      });
    }
  }
}
