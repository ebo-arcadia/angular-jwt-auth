import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-consumer',
  templateUrl: './board-consumer.component.html',
  styleUrls: ['./board-consumer.component.css']
})
export class BoardConsumerComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getConsumerBoard().subscribe({
      next: (data) => {this.content = data},
      error: error => {this.content = JSON.parse(error.error).message}
    });
  }

}
