import { Component, OnInit, Input, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ViewChild('heading', { static: true }) header: ElementRef;
  @Input() name: string;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

}
