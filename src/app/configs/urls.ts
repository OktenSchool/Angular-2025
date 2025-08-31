import {environment} from '../../environments/environment';

const baseURL = environment.API;

const users = `${baseURL}/users`

const urls = {
  users: {
    base: users,
    byId: (id: number): string => `${users}/${id}`
  }
}

export {
  urls
}
