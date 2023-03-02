import React from "react";
import { useMasa } from "@masa-finance/masa-react";

const show = false;

export default function MasaLogin(): JSX.Element {
  const { connect, handleLogout, walletAddress, isLoggedIn } = useMasa();

  return (
    <div style={{ display: show ? "inherit" : "none" }}>
      {isLoggedIn ? (
        <button onClick={() => handleLogout!()}>{walletAddress}</button>
      ) : (
        <button onClick={() => connect!()}>Connect Masa Account</button>
      )}
    </div>
  );
}
