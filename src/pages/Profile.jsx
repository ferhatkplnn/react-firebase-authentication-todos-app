import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateProfileToFirebase } from "../firebase/actions/authActions";
import Input from "../components/shared/Input";
import { setUserData } from "../redux/utils";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setEmail(user?.email);
    setDisplayName(user?.displayName);
    setPhotoURL(user?.photoURL);
  }, [user?.displayName, user?.email, user?.photoURL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfileToFirebase({ displayName, photoURL, email });
    setUserData({ displayName, photoURL, email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-screen-sm p-8 border dark:border-slate-700 m-8 flex  flex-col space-y-4"
    >
      <h1 className="text-3xl font-medium ">Update Profile</h1>

      <Input
        value={email || ""}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        label="Email"
        placeholder="E-mail"
      />

      <Input
        value={displayName || ""}
        onChange={(e) => setDisplayName(e.target.value)}
        type="text"
        label="Display Name"
        placeholder="Display name"
      />

      <Input
        value={photoURL || ""}
        onChange={(e) => setPhotoURL(e.target.value)}
        type="text"
        label="Photo URL"
        placeholder="xoo"
      />

      <button className="bg-sky-400 px-4 py-2 text-sm text-white hover:brightness-125">
        Update
      </button>
    </form>
  );
};

export default Profile;
