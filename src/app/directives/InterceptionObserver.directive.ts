import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInterceptionObserver]',
  standalone: true,
})
export class InterceptionObserverDirective implements AfterViewInit{

  private observer: IntersectionObserver;

  constructor(private el: ElementRef){}

  ngAfterViewInit(): void {
    
    this.observer = new IntersectionObserver(
      (entries) => {

        entries.forEach( (entry) => {
          const id = entry.target.getAttribute("id");                
          const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

          if (entry.isIntersecting) {
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
            console.log("Seleccionado",id);
          }

        });

      },{rootMargin:"-30% 0px -70% 0px" }
    );

    this.observer.observe(this.el.nativeElement);

  }

  

}