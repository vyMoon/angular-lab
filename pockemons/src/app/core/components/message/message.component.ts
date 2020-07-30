import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../../../pockemon/services/message/message.service';
import { Message } from '../../../Interfases';

interface MessageClass {
  'message-error': boolean;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messages: Message[] = [];

  private message$: Subscription;

  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.message$ = this.messageService.getMessageObservable()
      .subscribe( message => {
        this.messages.push(message);
        setTimeout(() => {
          this.messages.shift();
        }, 5000);
      });
  }

  hasMessageErorr(): MessageClass {
    return {
      'message-error': this.messages[0].error,
    };
  }

}
