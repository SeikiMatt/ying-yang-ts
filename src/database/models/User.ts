import {
  booleanResolvable, numberResolvable,
} from '@util/Constants';

export interface User {
  botAdmin: booleanResolvable;
  botSupport: booleanResolvable
  level: numberResolvable;
}

const UserSchema: User = {
  botAdmin: false,
  botSupport: false,
  level: 0,
};

export default UserSchema;
