import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input('newsData') newsData;
  currentIndex;

  constructor() { }

  ngOnInit() {
    /* console.log(speechSynthesis.getVoices());
    this.playNews(this.newsData); */
  }

  playNews(articles) {
    let textToSpeak = [];
    articles.map(item => {
      textToSpeak.push(item['title'] + '. ' + item['description']);
    })
    textToSpeak.map((item,index) => {
     let msg = new SpeechSynthesisUtterance(item);
     msg.lang = 'en-GB';
      msg.rate = 1;
      window.speechSynthesis.speak(msg);
      msg.onstart = (event)=>{
        //console.log(event);
        this.currentIndex = index;
       // console.log(this.currentIndex, typeof(this.currentIndex));

        
      }
    })


    
}

playSpecific(item) {
  let msg = new SpeechSynthesisUtterance(item['title'] + '. ' + item['description']);
  msg.lang = 'en-GB';
   msg.rate = 1;
   window.speechSynthesis.speak(msg);
}



}
