import { Component, OnInit } from '@angular/core';
import { CommandInterface } from '../../models/command.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css'],
})
export class PrimeNGComponent implements OnInit {
  isFetching = false;
  error = null;
  commandList$: CommandInterface[] = [];
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.dataSvc.fetchCommands().subscribe((commands: CommandInterface[]) => {
      this.isFetching = false;
      this.commandList$ = commands;
    });
  }
}
