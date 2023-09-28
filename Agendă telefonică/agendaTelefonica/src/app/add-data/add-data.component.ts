import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent {

  users:any[] = [];
  key: any = 'myContacts';
  selectedUsers: User = {id: 1, nume: '', prenume: '', telefon: ''}

  saveUsers(form: {value: User}){
    
    if(localStorage[this.key]){
      var arrUser: any = JSON.parse(localStorage[this.key]);
      localStorage.removeItem(this.key);
      this.selectedUsers.id++;
      arrUser.push(this.selectedUsers);
      localStorage.setItem(this.key, JSON.stringify(arrUser));
    } else {
      this.users.push(this.selectedUsers)
      localStorage.setItem(this.key ,JSON.stringify(this.users));
    }
  }
}
