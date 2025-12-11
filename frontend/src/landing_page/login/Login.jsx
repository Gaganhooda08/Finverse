import React, { useState } from "react";
import client from "../api/client";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      const res = await client.post("/login", form, { withCredentials: true });

      if (res.data.success) {
        // ✅ No need to save username in localStorage
        window.location.href = "http://localhost:3001";
      }

      setStatus(res.data.message || "Logged in successfully");
    } catch (err) {
      setStatus(err.response?.data?.message || "Error during login");
    }
  };

  return (
    <div className="container py-4">
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="mt-3" style={{ maxWidth: 420 }}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={form.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            value={form.password}
            onChange={onChange}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      {status && <p className="mt-3">{status}</p>}
    </div>
  );
};

export default Login;