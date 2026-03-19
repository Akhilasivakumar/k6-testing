import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

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
export function handleSummary(data) {
    return {
        "/reports/report.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}