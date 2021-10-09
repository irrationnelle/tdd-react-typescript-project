import { firebaseConfig } from "../constant/firebase-config";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  connectAuthEmulator,
  UserCredential,
  createUserWithEmailAndPassword,
} from "firebase/auth";

initializeApp(firebaseConfig);
const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");

const randomEmail =
  (Math.random() + 1).toString(36).substring(7) + "@email.net";

test("create new user with email and password", async () => {
  const newUser: UserCredential = await createUserWithEmailAndPassword(
    auth,
    randomEmail,
    "bla2377"
  );
  expect(newUser).toBeTruthy();
  console.log("newUser: ", newUser);
  expect(newUser.user).toBeTruthy();
});

test("sign in with user who is already created", async () => {
  try {
    const cred: UserCredential = await signInWithEmailAndPassword(
      auth,
      randomEmail,
      "bla2377"
    );
    expect(cred).toBeTruthy();
    expect(cred.user).toBeTruthy();
  } catch (e) {
    console.log(e);
    throw e;
  }
});
