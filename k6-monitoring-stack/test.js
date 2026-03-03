import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 20,
    duration: '10m',
};

export default function () {
    // Testing different API endpoints
    http.get('https://jsonplaceholder.typicode.com/posts', { tags: { name: 'GET /posts (All Posts)' } });
    http.get('https://jsonplaceholder.typicode.com/this-page-does-not-exist', { tags: { name: 'GET /invalid (404 Test)' } });
    http.get('https://jsonplaceholder.typicode.com/posts/1', { tags: { name: 'GET /posts/1 (Single Post)' } });
    http.get('https://jsonplaceholder.typicode.com/comments', { tags: { name: 'GET /comments (All Comments)' } });
    http.get('https://jsonplaceholder.typicode.com/users', { tags: { name: 'GET /users (All Users)' } });

    sleep(1);
}