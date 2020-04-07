// 비밀번호_저장.js
const fs = require('fs');
const bcrypt = require('bcrypt');
const [password] = process.argv.slice(2);
const saltRounds = 10;

if (!password) {
  console.log('비밀번호를 입력하지 않았습니다!!!');
  process.exit(0);
}

// cost와 saltRounds는 동치입니다.
bcrypt.hash(password, saltRounds).then((hash) => {
  fs.writeFileSync(__dirname + '/비밀번호', hash);
  console.log('비밀번호가 저장되었습니다.');
});
