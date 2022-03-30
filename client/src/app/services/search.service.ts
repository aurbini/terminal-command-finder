import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommandInterface } from '../models/command.model';

@Injectable({ providedIn: 'root' })
export class SearchService {
  url = 'http://localhost:4000/api/git';
  constructor(private http: HttpClient) {}

  fetchCommand() {}
  fetchCommands() {
    return this.http.get<CommandInterface[]>(this.url);
  }
}
