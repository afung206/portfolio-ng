import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactMeHeader: string = "Contact Information";
  contactText: string = "Feel free to contact me below through Linkedin!";
  resumeText: string = "Check out my Resume!";
  resumeDownloadLocation: string = "./src/assets/AaronFungResume.docx.";

  constructor() { }

  ngOnInit(): void { }

}
