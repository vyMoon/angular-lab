import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { PockemonService } from '../services/pockemon/pockemon.service';
import { Pockemon } from '../../Interfases';
import { ConfirmationService } from '../services/confirmation/confirmation.service';
import { MessageService } from '../services/message/message.service';
import { Message } from '../../Interfases';

@Component({
  selector: 'app-pockemon-editor',
  templateUrl: './pockemon-editor.component.html',
  styleUrls: ['./pockemon-editor.component.scss']
})
export class PockemonEditorComponent implements OnInit {

  private pockemonInformation: Pockemon;
  private saveInformation = false;

  pockemonProfile = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
    damage: ['', [Validators.max(100), Validators.min(0), Validators.required]],
    createdAt: this.fb.group({
      year: ['', [Validators.maxLength(4), Validators.min(1989), Validators.required]],
      month: ['', [Validators.max(12), Validators.min(1), Validators.required]],
      date: ['', [Validators.min(1), Validators.max(31), Validators.required]]
    })
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pockemonService: PockemonService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getPockemon();
  }

  onClickSubmit(): void {
    if (this.pockemonProfile.status === 'VALID') {
      const { name, damage, createdAt} = this.pockemonProfile.value;
      const { year, month, date} = createdAt;
      const { id, isFree } = this.pockemonInformation;

      const newPockemonInformation: Pockemon = {
        id: id,
        isFree: isFree,
        name: name.toUpperCase(),
        damage: Number( damage ),
        created: `${year}-${month}-${date}`
      };
      this.saveInformation = true;
      this.pockemonService.updatePockemon(newPockemonInformation);
      this.router.navigate([`/pockemon/${this.pockemonInformation.id}`]);
      this.messageService.sendMessage({
        message: `Pockemon id ${this.pockemonInformation.id} was updated.`,
        error: false
      });
    }
  }

  onClickCancel(): void {
    this.router.navigate([`/pockemon/${this.pockemonInformation.id}`]);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.pockemonProfile.dirty && !this.saveInformation) {
      return this.confirmationService.confirm('Discard changes for pockemon?');
    }
    return true;
  }

  private getPockemon(): void {
    const pockemonId = +this.route.snapshot.paramMap.get('id');
    const details: Pockemon = this.pockemonService.getById(pockemonId);
    if (details) {
      this.pockemonInformation = details;
      this.insertPockemonInformation(details);
    } else {
      this.router.navigate(['/404']);
    }
  }

  private insertPockemonInformation(pockemon: Pockemon): void {
    const createdAt = pockemon.created.split('-');
    this.pockemonProfile.setValue({
      name: pockemon.name,
      damage: pockemon.damage,
      createdAt: {
        year: createdAt[0],
        month: createdAt[1],
        date: createdAt[2]
      }
    });
  }

}
