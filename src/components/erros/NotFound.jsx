const NotFound = () => {
  return (
    <>
      <div className="bg-white w-1/2 mx-auto p-8 mt-8 flex flex-col space-y-4 text-center drop-shadow-xl dark:bg-slate-800">
        <h2 className="text-3xl font-bold">404 Not Found</h2>
        <p className="text-red-700">
          The page you are looking for cannot be found. Please check the URL and
          try again, or navigate back to the home page to explore other content.
          If the issue persists, contact the site administrator
        </p>
      </div>
    </>
  );
};

export default NotFound;
