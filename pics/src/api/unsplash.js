import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9f532642b7a8c29aa59309c9dbbb41fa6e825d137a42a6c0ce918a310651737f"
  }
});
