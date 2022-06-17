import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-developer',
  templateUrl: './board-developer.component.html',
  styleUrls: ['./board-developer.component.css']
})
export class BoardDeveloperComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getDeveloperBoard().subscribe({
      next: data => {this.content = data},
      error: error => {this.content = JSON.parse(error.error).message}
    });
  }

}
