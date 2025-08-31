import {environment} from '../../environments/environment';

const baseURL = environment.API;

const users = `${baseURL}/users`
const posts = `${baseURL}/posts`

const urls = {
  users: {
    base: users
  },
  posts: {
    base: posts
  }
}

export {
  urls
}
