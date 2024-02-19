import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  userArray: any[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('lists1');
    if (localData != null) {
      this.userArray = JSON.parse(localData);
    }
  }

  onEdit(id: number) {
    this.router.navigate(['/add', id]);
  }

  onDelete(id: number) {
    const index = this.userArray.findIndex((m) => m.id == id);
    this.userArray.splice(index, 1);

    // console.log("not working");
    localStorage.setItem('lists1', JSON.stringify(this.userArray));
  }
}
