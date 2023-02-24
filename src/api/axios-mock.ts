import MockAdapter from "axios-mock-adapter";

import students from './students.json';
import { instance } from "./api";

const mock = new MockAdapter(instance);

mock.onGet('/students').reply(200, {
  students
})