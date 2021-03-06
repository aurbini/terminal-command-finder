import { Component, OnInit } from '@angular/core';
import { CommandInterface } from '../../models/command.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css'],
})
export class CommandListComponent implements OnInit {
  isFetching = false;
  error = null;
  commandList$: CommandInterface[] = [];

  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.dataSvc.fetchCommands().subscribe((commands: CommandInterface[]) => {
      console.log(commands);
      this.isFetching = false;
      this.commandList$ = commands;
    });
  }
}
