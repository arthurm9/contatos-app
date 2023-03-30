import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContactsService } from 'src/app/services/contacts.service';
import { ContactInfo } from '../../interface/contact-info';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class ContactsPage{

  constructor(private contactsService: ContactsService, private router: Router) { }

  public contact!: ContactInfo;

  goTo(route: string) {
    this.router.navigateByUrl('/home');
  }

  afterCheck() {
    this.contact = this.contactsService.getContact();
  }
}


