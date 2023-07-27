"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
lodash_1.default.sample([45, 233, 5423, 7]);
// axios
//   .get<User>('https://jsonplaceholder.typicode.com/users/1')
//   .then((res) => {
//     console.log('WOO!!!');
//     printUser(res.data);
//   })
//   .catch((e) => {
//     console.log('ERROR!', e);
//   });
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
    console.log('WOO!!!');
    res.data.forEach(printUser);
})
    .catch((e) => {
    console.log('ERROR!', e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
