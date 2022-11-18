import "@masa-finance/masa-react/dist/style.css";
import React from "react";
import { useMasa } from "@masa-finance/masa-react";

const show = false;

export default function MasaLogin(): JSX.Element {
  const { connect, handleLogout, walletAddress, loggedIn } = useMasa();

  return (
    <div style={{ display: show ? "inherit" : "none" }}>
      {loggedIn ? (
        <button onClick={() => handleLogout!()}>{walletAddress}</button>
      ) : (
        <button onClick={() => connect!()}>Connect Masa Account</button>
      )}
    </div>
  );
}
