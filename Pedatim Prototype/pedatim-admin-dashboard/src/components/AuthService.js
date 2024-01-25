class AuthService {
    static async login(username, password) {
      // Replace this with actual authentication logic
      if (username === "admin" && password === "admin") {
        return { token: "mock-token" }; // Mock token
      } else {
        throw new Error("Invalid credentials");
      }
    }
  }
  
  export default AuthService;
  