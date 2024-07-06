import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Loader = ({ isLoading }: any) => {
  return (
    <div className="loader">
      <div className="loader-icon">
        <SyncLoader color={"#86C232"} loading={isLoading} size={16} />
      </div>
    </div>
  );
};

export default Loader;
