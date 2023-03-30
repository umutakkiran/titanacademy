import { Component } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngOnInit() {
    this.translateAnim();
    this.entranceFadeOutAnim();
  }

  translateAnim () {
    var eldescription = document.getElementById("description") as HTMLDivElement;

    window.addEventListener("scroll", function(){
  
      eldescription.style.transform = "translateY(-" + window.pageYOffset/3 + "px)";
    })
  }

  entranceFadeOutAnim(){
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
  
          $('#entrance').css({
          opacity: function() {
              var elementHeight = $(window).height(),
              opacity = ((elementHeight - scrollTop*1.2) / elementHeight);
              return opacity;
          }
      });
  });
  }
}
