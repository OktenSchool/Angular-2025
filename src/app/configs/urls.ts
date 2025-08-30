import {environment} from '../../environments/environment';

const baseURL = environment.API;

const users = `${baseURL}/users`

const urls = {
  users: {
    base: users
  }
}

export {
  urls
}
