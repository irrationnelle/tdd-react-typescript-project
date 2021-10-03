export const signIn = (id: string, password: string): boolean => {
  if (id === "sample_id" && password === "password123") {
    return true;
  }
  return false;
};
