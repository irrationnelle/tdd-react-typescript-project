import { signIn } from "./auth";
import { firebaseConfig } from "../constant/firebase-config";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  connectAuthEmulator,
  UserCredential,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");

test("Example test case", async () => {
  try {
    const cred: UserCredential = await signInWithEmailAndPassword(
      auth,
      "foo@bar.de",
      "bla2377"
    );
    expect(cred).toBeTruthy();
    expect(cred.user).toBeTruthy();
  } catch (e) {
    console.log(e);
    throw e;
  }
});

test("signIn function should communicate with api server to recognize valid account", () => {
  const id = "valid_id";
  const password = "valid_password";
  const isSignIn = signIn(id, password);
  expect(isSignIn).toBeTruthy();
});
