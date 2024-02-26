const Input = ({ label, placeholder, type, className, ...props }) => {
  return (
    <div className="w-full">
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`${className} block w-full border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6 outline-none dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-sky-400`}
        {...props}
      />
    </div>
  );
};

export default Input;
