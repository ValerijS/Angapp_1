import {Component, OnInit} from '@angular/core';
import { TimerServiceService } from '../timer-service.service';
@Component({
    selector: 'app-show-time',
    templateUrl: './show-time.component.html',
    styleUrls: ['./show-time.component.css']
})
export class ShowTimeComponent implements OnInit {
	constructor(private timerService: TimerServiceService) {}
	secondsCounter = this.timerService.secondsCounter;
	showingTime = this.timerService.showingTime;
	timerToggle =  this.timerService.timerToggle;
	timerWait =  this.timerService.timerWait;
	reset =  this.timerService.reset;
	subscribe = this.timerService.subscribe;
	start = this.timerService.start;	
  
    ngOnInit() {
        if ( this.timerService.subscribe){
            if (! this.timerService.subscribe.closed)  this.timerService.subscribe.unsubscribe();
        }
    }
}
