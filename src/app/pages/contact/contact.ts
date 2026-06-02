import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  reservation = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    notes: ''
  };

  submitted = false;
  successMessage = '';

  submitReservation(form: any) {
    if (form.valid) {
      this.submitted = true;
      this.successMessage = `¡Gracias, ${this.reservation.name}! Tu solicitud de reserva para ${this.reservation.guests} personas el día ${this.reservation.date} a las ${this.reservation.time} ha sido enviada con éxito. Nos pondremos en contacto contigo en breve para confirmar.`;
    }
  }

  resetForm() {
    this.reservation = {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2,
      notes: ''
    };
    this.submitted = false;
    this.successMessage = '';
  }
}
