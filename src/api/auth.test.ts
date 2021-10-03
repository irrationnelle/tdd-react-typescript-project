import { signIn } from "./auth";

test("signIn function should communicate with api server to recognize valid account", () => {
  const id = "valid_id";
  const password = "valid_password";
  const isSignIn = signIn(id, password);
  expect(isSignIn).toBeTruthy();
});
