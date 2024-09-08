// enum in typescript
// =>enum in typescript are commonly used when you want to represent a set of related values and choose one value from multiple options. enums provide a convenient way to define a set of named values and associated them with specific meanings.

// =>in typescript, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numric values starting form 0. the default numeric value for the first enum constant is 0, and subsequent enum constants recives values incremented by 1.

enum Roles {
  admin = "admin",
  user = "user",
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};
const user: LoginDetails = {
  name: "vinod",
  email: "ak89shar@gmail.com",
  password: "123@",
  role: Roles.user,
};
const admin: LoginDetails = {
  name: "abdullah khan",
  email: "abdullah@gmail.com",
  password: "1234@",
  role: Roles.admin,
};

const allowedUsers = (user: LoginDetails): string => {
  return user.role==="admin"?`${user.email} is allow to change`:`${user.email} is not allowed to change`
};
console.log(allowedUsers(user));

const allowedadmin = (admin: LoginDetails): string => {
  return user.role==="admin"?`${user.email} is allow to change`:`${user.email} is not allowed to change`
};
console.log(allowedUsers(admin));
