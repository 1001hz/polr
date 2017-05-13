import { AUTH_PROVIDERS } from './auth.service';
import { USER_PROVIDERS } from './user.service';
import { API_PROVIDERS } from './api.service';

export { AuthService } from './auth.service';
export { UserService } from './user.service';

export const ALL_SERVICES: Array<any> = [
  ...AUTH_PROVIDERS,
  ...USER_PROVIDERS,
  ...API_PROVIDERS
];
