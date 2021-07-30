import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import User from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';
import { concatMapTo } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public ussers: User[] = [];
  public paginator: User[] = [];
  public filter: User[] = [];
  public size = 10;
  public index = 1;
  public len = 0;
  public form!: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private alertService: AlertService
  ) {
    this.userService.getUser.subscribe(this.loadTable);
    this.makeFomr();
  }

  ngOnInit(): void {
  }

  private makeFomr = (): void => {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      last_name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      birthday: new FormControl('', [Validators.required])
    })
  }

  private loadTable = (users: User[]): void => {
    this.ussers = users.map( (user, index) => ({...user, index }) );
    this.len = this.ussers.length;
    this.filtrar('');
  }

  private paginar = (): void => {
    this.len = this.filter.length;
    const start = (this.index - 1)*this.size;
    this.paginator = this.filter.slice( start, start + this.size );
  }


  public nav = (prev: boolean): void => {
    this.index = prev ? this.index - 1 : this.index + 1;
    this.paginar();
  }

  public filtrar = (value: string): void => {
    const reg = new RegExp(value, 'gi');
    this.filter = this.ussers.filter(user => value.length === 0 ? true : (reg.test(user.name) || reg.test(user.last_name)|| reg.test(user.index.toString())));
    this.paginar();
  }

  public onSubmit = (): void => {
    if (this.form.valid) {
      const birthday: string = this.form.value.birthday;
      const body = { ...this.form.value, birthday: birthday.split('-').join('/') }
      this.userService.postUser(body).pipe( concatMapTo(this.userService.getUser)  )
                                      .subscribe(res => {
                                        this.alertService.getAlert('success', 'Usuario creado', 'El usuario ha sido creado con exito');
                                        this.loadTable(res);
                                      });
    }
  }

}
