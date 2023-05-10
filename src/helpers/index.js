export const authenticate = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};
