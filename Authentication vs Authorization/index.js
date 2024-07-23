const bcrypt = require("bcrypt");
const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
};
const login = async (pw, hashedPassword) => {
  const result = await bcrypt.compare(pw, hashedPassword);
  if (result) {
    console.log("logged you in, succesfful match");
  } else {
    console.log("incorrect");
  }
};
login(
  "monkey222",
  "$2b$12$rScWXBaqziMUooDXhO1az.HHIGqzfFExGSBdyS/rzBpx6FMuhhxci"
);
hashPassword("monkey");
