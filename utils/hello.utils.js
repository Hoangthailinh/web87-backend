const SLGAN_1 = "Thể thao là không ngừng bỏ cuộc";

export function sayHelloVietnamese() {
  console.log("Xin chào");
}

export function sayHelloEnglish() {
  console.log("Hello Word");
}

export function sayHelloRussian() {
  console.log("Привет");
}

export function home(req, res) {
  console.log("Home page");

  return res.status(200).json({
    message: "This is homepage",
    author: "Hoàng Linh",
    contact: {
      email: "hoangthailinh.99hl@gmail.com",
      phoneNumber: "0348812657",
    },
  });
}

export function login(req, res) {
  console.log("Client requested login function");

  return res.status(200).json({
    message: "Login successfully",
    accessToken: "12454",
    refreshToke: "54878",
  });
}

export function register(req, res) {
  console.log("Client requested login function");

  return res.status(200).json({
    message: "register successfully",
    accessToken: "12454",
    refreshToke: "54878",
  });
}

export function forgotPassword(req, res) {
  console.log("Client requested login function");

  return res.status(200).json({
    message: "Login successfully",
    accessToken: "12454",
    refreshToke: "54878",
  });
}
