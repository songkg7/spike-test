import http from 'k6/http'
import {sleep} from 'k6'

export default function () {
  http.get('http://54.180.78.85/hello');
  sleep(1);
}

