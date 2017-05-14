import { AUTH_PROVIDERS } from './auth.service';
import { USER_PROVIDERS } from './user.service';
import { API_PROVIDERS } from './api.service';
import { MESSAGE_PROVIDERS } from './message.service';

export { AuthService } from './auth.service';
export { UserService } from './user.service';
export { MessageService } from './message.service';

export const ALL_SERVICES: Array<any> = [
  ...AUTH_PROVIDERS,
  ...USER_PROVIDERS,
  ...API_PROVIDERS,
  ...MESSAGE_PROVIDERS
];
