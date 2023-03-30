import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContactsService } from 'src/app/services/contacts.service';
import { ContactInfo } from '../../interface/contact-info';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})

export class ContactsPage implements OnInit{

  public contact!: ContactInfo;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contact = this.contactsService.getContact();
  }
}


