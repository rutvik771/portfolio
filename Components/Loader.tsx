import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Loader = ({ isLoading }: any) => {
  return (
    <div className="loader">
      <SyncLoader color={"#86C232"} loading={isLoading} size={16} />
    </div>
  );
};

export default Loader;
