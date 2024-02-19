import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  userObj: any = {
    id: 0,
    name: '',
    age: '',
    Mobile: '',
    city: '',
    email: '',
  };

  userArray: any[] = [];

  currentId: number = 0;

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe((res: any) => {
      if (res.id) {
        this.currentId = res.id;
      }
    });
  }

  ngOnInit(): void {
    const localdata = localStorage.getItem('lists1');
    if (localdata != null) {
      this.userArray = JSON.parse(localdata);
      if (this.currentId !== 0) {
        const currentRecord = this.userArray.find(
          (m) => m.id == this.currentId
        );
        if (currentRecord != undefined) {
          this.userObj = currentRecord;
        }
      }
    }
  }

  Add(data: any) {
    const localData = localStorage.getItem('lists1');

    if (localData == null) {
      this.userArray.push(this.userObj);
      console.log(this.userObj);
      localStorage.setItem('lists1', JSON.stringify(this.userArray));
      this.userObj = {
        id: 0,
        name: '',
        age: '',
        Mobile: '',
        city: '',
        email: '',
      };
    } else {
      const parseData = JSON.parse(localData);
      this.userObj.id = parseData.length + 1;
      this.userArray.push(this.userObj);
      // console.log("not working");
      localStorage.setItem('lists1', JSON.stringify(this.userArray));
    }
  }

  updateData(data: any) {
    const currentRecord = this.userArray.find((m) => m.id == this.currentId);
    if (currentRecord != undefined) {
      const index = this.userArray.findIndex((m) => m.id == this.currentId);
      this.userArray.splice(index, 1);
      this.userArray.push(this.userObj);
      // console.log("not working");
      localStorage.setItem('lists1', JSON.stringify(this.userArray));
    }
  }
}
