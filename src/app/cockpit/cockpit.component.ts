import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();


  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;



  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value })


  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value })
  }
}



// In Angular 8+, the @ViewChild() syntax which you'll see in the next lecture needs to be changed slightly:

// Instead of:

// @ViewChild('serverContentInput') serverContentInput: ElementRef;
// use

// @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
// The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ViewChild() (and also @ContentChild() which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().

// If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead!

// If you're using Angular 9+, you only need to add { static: true } (if needed) but not { static: false }.
