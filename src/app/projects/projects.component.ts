import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  gitHubProjectUrl: string = "https://github.com/afung206";

  constructor() { }

  ngOnInit(): void {
  }

}
