import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  hidden(){
    if(this.isHidden === false){
      document.getElementById('age').hidden = true;
      this.isHidden = true;
    }
    else{
      document.getElementById('age').hidden = false;
      this.isHidden = false;
    }
  }

  isHidden : boolean;
  
  constructor() { }

  ngOnInit(): void {
    document.getElementById('age').hidden = true;
  }

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

}