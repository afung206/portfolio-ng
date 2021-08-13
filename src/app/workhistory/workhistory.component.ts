import { Component, OnInit } from '@angular/core';
import { Work } from '../../core/model/work'

@Component({
  selector: 'app-workhistory',
  templateUrl: './workhistory.component.html',
  styleUrls: ['./workhistory.component.css']
})
export class WorkhistoryComponent implements OnInit {

  workHistoryHeader: string = "Work History";
  workHistory: Work[] = [
    {
      id: 1,
      title: "SOFTWARE ENGINEER II",
      company: "The Boeing Company",
      location: "Bellevue, WA",
      date: "August 2018 - Present",
      overview: "The Boeing Company is a leader in aerospace and engineering. " +
      "In the Digital Transformation Environment Team, we focused on changing the " +
      "software development culture within Boeing.",
      description: [
        "Transformed software development teams within Boeing through mentoring and " +
        "leadership while driving development with agile methodologies and " +
        "eXtreme programming techniques " +
        "(i.e. test-driven development, pair programming and continuous integration).",

        "Modernized legacy applications with modern web frameworks and services including, " +
        "Java with Spring Boot, React.js and Pivotal Cloud Foundry."
      ]
    },
    {
      id: 2,
      title: "SOFTWARE ENGINEER",
      company: "Accretive Technology Group",
      location: "Seattle, WA",
      date: "December 2014 - June 2017",
      overview: "Accretive provides a high-definition live streaming video and chat platform " +
      "that delivers over 200,000 streams an hour to 40,000,000 unique daily visitors across " +
      "the globe and generates over $351M a year in annual revenue.",
      description: [
        "Designed, developed and released multiple microservices using Node.js with koa.js and express.js, " +
        "redis, and MySQL to manage the state of a complex system (live and recorded streams, authorization, " +
         "thumbnail generation, etc.) and to add scalability to an existing monolithic service.",

        "Designed and developed the live streaming transcode service which is responsible serving multiple " +
        "HD streams (mp4, hls, lodef, etc) from a single origin stream to over 1,000,000 users a day while " +
        "still providing low bandwidth video subscribers options of low latency video streams.",

        "Created overhead reducing reports, alerts, dashboards and automated functional/end-to-end test " +
        "scripts for development teams and stakeholders using Splunk, Perl and Bash (Linux)."
      ]
    },
  ]

  constructor() {}

  ngOnInit(): void {}

}
