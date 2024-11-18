var cookieExipre = new Date();
cookieExipre.setTime(
    cookieExipre.getTime() + 10 * 60 * 1000 // Cookie exipre in 10 minutes
);
var isSecure = true;
module.exports = async function (context, req) {
  context.res = {
      body: { text: "Hello from the API" },
      status: 200,
      cookies: [
          {
              name: "cookie1",
              value: "cookie1",
              secure: false,
              httponly: true,
              path: "/",
              expires: cookieExipre,
              sameSite: "Strict",
          },
          {
              name: "cookie2",
              value: "cookie2",
              secure: isSecure,
              httponly: true,
              path: "/",
              expires: cookieExipre,
              sameSite: "Strict",
          },
      ],
  };
};
