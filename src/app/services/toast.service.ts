import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast:ToastService) { }

  success(title:string,message:string){
    this.toast.success(title,message)
  }

}
