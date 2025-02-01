import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsFormComponent } from './contacts-form/contacts-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contacts/:id', component: ContactsFormComponent },
];
