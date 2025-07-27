import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ childern, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useSelector(true);

  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // TODO : make it more easy to understand

    // if(authStatus === true){
    //   navigate("/")
    // } else if(authStatus === false){
    //   navigate("/login")
    // }

    if (authentication && authStatus !== authentication) {
      navigate("/");
    } else if (!authentication && authStatus !== authentication) {
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{childern}</>;
}

export default Protected;
