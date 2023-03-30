import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactInfo } from '../interface/contact-info';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  constructor(public route: Router, private contactsService: ContactsService) {}

  public contactsInfo: ContactInfo[] = [
    {
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Maria',
      email: 'maria@gmail.com',
      id: 29384894884
    },
    {
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      name: 'Nicole',
      email: 'nicole@gmail.com',
      id: 29384875786
    },
    {
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'André',
      email: 'andre@gmail.com',
      id: 29389203036
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Ricardo',
      email: 'ricardo@gmail.com',
      id: 22822275786
    },
    {
      image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      name: 'Diego',
      email: 'diego@gmail.com',
      id: 29384000000
    },

  ]

  goTo(contact: ContactInfo) {
    this.contactsService.setContact(contact);
    this.route.navigateByUrl('/contacts');
  }
}
