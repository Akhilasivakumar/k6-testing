import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 20,
    duration: '10m',
};

export default function () {
    // Simulating different pages mentioned in the report
    http.get('https://jsonplaceholder.typicode.com/posts', { tags: { name: 'Home page' } });
    http.get('https://jsonplaceholder.typicode.com/this-page-does-not-exist', { tags: { name: 'Broken Page' } });
    http.get('https://jsonplaceholder.typicode.com/posts/1', { tags: { name: 'Articles' } });
    http.get('https://jsonplaceholder.typicode.com/comments', { tags: { name: 'Draw & Pools' } });
    http.get('https://jsonplaceholder.typicode.com/users', { tags: { name: 'Registration page' } });

    sleep(1);
}