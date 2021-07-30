import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import Group from 'src/app/core/interfaces/group';
import { AlertService } from 'src/app/core/services/alert.service';
import { GroupService } from 'src/app/core/services/group.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  public group: Group[] = [];
  public filtrados: Group[] = [];
  public data: any[] = [];

  constructor(
    private groupService: GroupService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    this.groupService.getGroups.subscribe(group => {
      this.group = group;
      this.filter('');
    });
  }

  ngOnInit(): void {
  }

  public filter = (value: string): void => {
    const reg = new RegExp(value, 'gi');
    this.filtrados = this.group.filter( group => value.length === 0 ? true : reg.test(group.name) );
  }

  public drop = (event: CdkDragDrop<any[]>): void => {
    if (event.previousContainer !== event.container) {
      const data = this.filtrados[event.previousIndex];
      this.userService.getUserByGroup(data.id.toString()).subscribe(group => {
        this.data = this.data.find(group =>
            group.id === data.id) ? this.data :  [...this.data, {...group, active: new FormControl(false), ...data, employees: group.employees.map( (employee: any) => ({...employee, active: new FormControl(true)}) )}];
      }, error => this.alertService.getAlert('error', 'Ups', error.error));
    }
  }

  public deleteGroup = (id: number): void => {
    this.data = this.data.filter( group => group.id !== id );
  }

  public activeGroup = (group: any): void => {
    group.employees.forEach( (employee: any) => employee.active.setValue(true) );
  }

  public continuar = (): void => {
    let employess: any[] = [];
    this.data.forEach( group => {
      employess = [...employess, ...group.employees.filter( (emp: any) => emp.active.value )];
    })
    console.log(employess)
  }

}
