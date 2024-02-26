import { useState } from "react";
import { reAuthToFirebase } from "../../firebase/actions/authActions";
import Input from "../shared/Input";

const ReAuthModal = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    reAuthToFirebase(password);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-screen-sm p-8 m-8 flex flex-col space-y-3"
    >
      <h1 className="text-2xl font-medium ">Please log in again.</h1>

      <Input
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

export default ReAuthModal;
