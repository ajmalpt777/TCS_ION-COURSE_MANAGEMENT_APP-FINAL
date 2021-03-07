import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProfService } from '../prof.service';
import { NotificationModel } from './notification.model'

@Component({
  selector: 'app-course-notification',
  templateUrl: './course-notification.component.html',
  styleUrls: ['./course-notification.component.css']
})
export class CourseNotificationComponent implements OnInit {

  notificationItem = new NotificationModel('','','');
  notificationItems : NotificationModel[];

  constructor(private profService:ProfService,public auth:AuthService) { }

  ngOnInit(): void {
    let c_Id = localStorage.getItem("detailsCourseId");
    this.profService.getNotification(c_Id)
    .subscribe((data)=>{
      this.notificationItems=JSON.parse(JSON.stringify(data));
      console.log(this.notificationItems);
    })
  }

  addNotification()
  {
    let foo = prompt('Type Message');
    console.log(foo);
    if(foo?.trim()!=='')
    {
    let c_Id = localStorage.getItem("detailsCourseId");
    this.notificationItem.c_id=c_Id;
    this.notificationItem.message=foo;
    this.profService.addNotification(this.notificationItem);
    
    this.profService.getNotification(c_Id)
    .subscribe((data)=>{
      this.notificationItems=JSON.parse(JSON.stringify(data));
      console.log(this.notificationItems);
    })

  }
}


}
