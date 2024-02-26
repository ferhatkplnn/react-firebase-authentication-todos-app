import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerToFirebase } from "../firebase/actions/authActions";
import Input from "../components/shared/Input";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await registerToFirebase(email, password);
    if (user) navigate("/todos");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-screen-sm p-8 border dark:border-slate-700 m-8 flex flex-col space-y-3"
    >
      <h1 className="text-3xl font-medium ">Sign Up</h1>
      <Input
        label="Email"
        required
        placeholder="email@example.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        label="Password"
        placeholder="******"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-sky-400 px-4 py-2 text-sm text-white hover:brightness-125">
        Send
      </button>
    </form>
  );
};

export default SignUp;
