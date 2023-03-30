import { Injectable } from '@angular/core';
import { ContactInfo } from '../interface/contact-info';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contact!: ContactInfo;

  constructor() {}

  setContact(contact:ContactInfo) {
    this.contact = contact;
  }

  getContact(): ContactInfo {
    return this.contact;
  }
}
