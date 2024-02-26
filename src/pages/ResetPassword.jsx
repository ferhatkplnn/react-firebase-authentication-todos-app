import { useState } from "react";
import Input from "../components/shared/Input";
import { updatePasswordToFirebase } from "../firebase/actions/authActions";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePasswordToFirebase(password);
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-screen-sm p-8 border dark:border-slate-700 m-8 flex flex-col space-y-3"
    >
      <h1 className="text-3xl font-medium ">Change password</h1>

      <Input
        label="Password"
        required
        placeholder="******"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-sky-400 px-4 py-2 text-sm text-white hover:brightness-125">
        Change
      </button>
    </form>
  );
};

export default ResetPassword;
