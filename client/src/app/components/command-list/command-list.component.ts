import { Component, OnInit } from '@angular/core';
import { CommandInterface } from '../../models/command.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css'],
})
export class CommandListComponent implements OnInit {
  isFetching = false;
  error = null;
  commandList$: CommandInterface[] = [];

  constructor(private searchSvc: SearchService) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.searchSvc.fetchCommands().subscribe((commands: CommandInterface[]) => {
      this.isFetching = false;
      this.commandList$ = commands;
    });
  }
}
