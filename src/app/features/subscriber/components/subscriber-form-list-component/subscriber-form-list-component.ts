import { Component, OnInit } from '@angular/core';
import { SubscriberService } from '../../service/subscriber-service';
import { Subscriber } from '../../model/subscriber.model';

@Component({
  selector: 'app-subscriber-form-list-component',
  templateUrl: './subscriber-form-list-component.html',
  styleUrls: ['./subscriber-form-list-component.scss'],
  standalone: false
})
export class SubscriberFormListComponent implements OnInit {
  subscribers: Subscriber[] = [];
  selectedSubscriber: Subscriber | null = null;
  showDeleteModal = false;

  constructor(private subscriberService: SubscriberService) {}

  ngOnInit(): void {
    this.loadSubscribers();
  }

  loadSubscribers(): void {
    this.subscriberService.getAll().subscribe(subs => this.subscribers = subs);
  }

  openDeleteDialog(subscriber: Subscriber) {
    this.selectedSubscriber = subscriber;
    this.showDeleteModal = true;
  }

  onDeleteDialogClosed(confirmed: boolean) {
    this.showDeleteModal = false;
    if (confirmed && this.selectedSubscriber) {
      this.subscriberService.delete(this.selectedSubscriber.id!).subscribe(() => this.loadSubscribers());
    }
  }
}
