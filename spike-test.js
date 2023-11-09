import http from 'k6/http';
import { check } from 'k6';

export const options = {
    scenarios: {
        spike: {
            executor: 'constant-vus',
            vus: 18000,
            duration: '5s',
            gracefulStop: '5m',
        },
    },
};

export default function () {
    const res = http.get('http://43.202.113.49:8084/hello');
    check(res, { 'is status 200': (r) => r.status == 200 });
};

