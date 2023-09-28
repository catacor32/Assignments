import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {


  users: any[] = [];
  key: any = 'myContacts';
  selectedUsers: User = {id:0, nume: '', prenume: '', telefon: ''}



  ngOnInit(): void {
      this.readUsers();
  }

  readUsers(){
    let users: any = localStorage.getItem(this.key)
    let arrUsers = JSON.parse(users);
    this.users = arrUsers
  }
  
  deleteUser(id:number){
    const localData: any = localStorage.getItem(this.key);
    const localArr = JSON.parse(localData);
    const objectToDelete = { id: id };
    const updatedArray = localArr.filter((item: any) => item.id !== objectToDelete.id);
    localStorage.removeItem(this.key);
    localStorage.setItem(this.key, JSON.stringify(updatedArray));
    this.readUsers();
    console.log(updatedArray);
  }

}
