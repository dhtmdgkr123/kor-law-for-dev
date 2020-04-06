// 로그인.js
const fs = require('fs');
const bcrypt = require('bcrypt');
const [password = ''] = process.argv.slice(2);
const hash = fs.readFileSync(__dirname + '/비밀번호', 'utf8');

bcrypt.compare(password, hash).then((result) => {
  if (result) {
    console.log('로그인하셨습니다.');
  } else {
    console.log('비밀번호가 틀렸네요.');
  }
});
