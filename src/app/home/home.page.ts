import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactInfo } from '../interface/contact-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(public route: Router) {}

  contacts: ContactInfo[] = [
    { "id": 0, "name": "Arthur", "email": "arthur@gmail.com" },
    { "id": 1, "name": "Lucas", "email": "lucas@gmail.com" },
    { "id": 2, "name": "João", "email": "joao@gmail.com" },
    { "id": 3, "name": "Cristian", "email": "cristian@gmail.com" },
    { "id": 4, "name": "Richard", "email": "richard@gmail.com" }
  ];
}
