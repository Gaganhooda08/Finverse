import React, { useState } from "react";
import client from "../api/client";

const Signup = () => {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    try {
      const res = await client.post("/signup", form, { withCredentials: true });

      if (res.data.success) {
        // ✅ No need to save username in localStorage
        window.location.href = "http://localhost:3001";
      }

      setStatus(res.data.message || "Signed up successfully");
    } catch (err) {
      setStatus(err.response?.data?.message || "Error during signup");
    }
  };

  return (
    <div className="container py-4">
      <h2>Signup</h2>
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
          <label className="form-label">Username</label>
          <input
            name="username"
            type="text"
            className="form-control"
            value={form.username}
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
          Create account
        </button>
      </form>
      {status && <p className="mt-3">{status}</p>}
    </div>
  );
};

export default Signup;