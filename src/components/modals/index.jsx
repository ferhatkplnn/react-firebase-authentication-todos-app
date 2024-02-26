import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import modals from "./modalList";
import { modalClose } from "../../redux/utils";
import { useEffect, useState } from "react";

const Modal = () => {
  const [effectClass, setEffectClass] = useState("scale-90 opacity-0");
  const [containerEffectClass, setContainerEffectClass] = useState("");

  const { name, data } = useSelector((state) => state.modal);

  useEffect(() => {
    setTimeout(() => {
      setEffectClass("");
      setContainerEffectClass("bg-slate-400/40");
    }, 1);
  }, []);

  const CurrentModal = modals.find((m) => m.name === name)?.elemet;

  const handleClose = () => {
    setEffectClass("scale-90 opacity-0");
    setContainerEffectClass("");
    setTimeout(() => {
      modalClose();
    }, 500);
  };

  return (
    <div
      className={`fixed flex justify-center items-center z-10 inset-0 ${containerEffectClass} duration-500`}
    >
      <div
        className={`rounded relative drop-shadow-md w-11/12 sm:w-2/3 xl:w-1/3 min-h-72 bg-white dark:bg-slate-700 -mt-96 ${effectClass} duration-500`}
      >
        <button onClick={handleClose} className="absolute right-1 top-1">
          <IoMdClose className="h-8 w-8 hover:rotate-90 hover:scale-125 hover:text-red-500 duration-500" />
        </button>
        <CurrentModal />
      </div>
    </div>
  );
};

export default Modal;
