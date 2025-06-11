import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const accoutnService= inject (AccountService);
  const toastr=inject(ToastrService);
  if(accoutnService.currentUser()){
    return true;

  }else{
    toastr.error('you shall not pass!')
return false;
  }
};
