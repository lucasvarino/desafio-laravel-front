import axios from "axios";

const API_URL = "http://localhost:8080/api/";
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
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.authorisation.token);
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("token");
  }
}

export default new AuthService();
