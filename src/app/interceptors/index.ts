import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './error.interceptor';
import { SessionInterceptor } from './session.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: SessionInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
