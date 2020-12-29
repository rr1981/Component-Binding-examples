import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {

  @Input() element: { type: string, name: string, content: string }

  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('Text content is -' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log('DoCheck called!');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text content is -' + this.paragraph.nativeElement.textContent);
  }

}
