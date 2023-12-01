import { Directive, ElementRef, Input, OnInit } from '@angular/core';
//diferença = a directive gera um atributo html

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit{

  @Input() tarefaConcluida!: boolean | any;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
      if (this.tarefaConcluida) {
        this.el.nativeElement.style.textDecoration = "line-through";
      }
  }
}
