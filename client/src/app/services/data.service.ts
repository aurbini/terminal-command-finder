import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommandInterface } from '../models/command.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  url = 'http://localhost:4000/api/git';
  constructor(private http: HttpClient) {}

  fetchCommand() {}
  fetchCommands() {
    return this.http.get<CommandInterface[]>(this.url);
  }
  postCommand(command: CommandInterface) {
    console.log(command);
    command.views = 0;
    command.typeName = 1;
    return this.http.post(this.url, command);
  }
}
