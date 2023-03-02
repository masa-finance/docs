import React from "react";
import { useMasa } from "@masa-finance/masa-react";

export const MasaLogin = (): JSX.Element => {
  const { connect, handleLogout, walletAddress, isLoggedIn } = useMasa();

  return (
    <div style={{ textAlign: "center" }}>
      {isLoggedIn ? (
        <button onClick={() => handleLogout!()}>{walletAddress}</button>
      ) : (
        <button onClick={() => connect!()}>Connect Masa Account</button>
      )}
    </div>
  );
};
