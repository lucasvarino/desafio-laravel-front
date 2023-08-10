import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";
const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
};

class AuthService {
  login(user) {
    return axios
      .post(
        API_URL + "login",
        {
          email: user.email,
          password: user.password,
        },
        config
      )
      .then(({ data, status }) => {
        if (status === 200) {
          localStorage.setItem("token", data.authorisation.token);
        }

        return data;
      });
  }

  logout() {
    localStorage.removeItem("token");
  }
}

export default new AuthService();
