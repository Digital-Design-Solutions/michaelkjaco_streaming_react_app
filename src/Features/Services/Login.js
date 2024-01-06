import axios from "axios";

const BASE_URL = "https://michaelkjacosocial.com";

export const loginUser = (payload, successCB, failureCB) => {
  const url = BASE_URL + "/dev/wp-json/jaco/v1/plan_b";
  axios
    .post(url, payload)
    .then((response) => {
      if (response.data?.error) {
        return failureCB(response.data?.message);
      }
      return successCB(response);
    })
    .catch((error) => {
      return failureCB(error);
    });
};
