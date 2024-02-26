const NotePermission = () => {
  return (
    <>
      <div className="bg-white w-1/2 mx-auto p-8 mt-8 flex flex-col space-y-4 text-center drop-shadow-xl dark:bg-slate-800">
        <h2 className="text-3xl font-bold">403 Forbidden</h2>
        <p className="text-red-700">
          Sorry, you don&apos;t have permission to access this page. If you
          believe this is an error, please contact the administrator or go back
          to the homepage
        </p>
      </div>
    </>
  );
};

export default NotePermission;
