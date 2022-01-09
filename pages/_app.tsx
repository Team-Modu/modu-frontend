import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { IAccount } from "common/interfaces/models/account.interfaces";
import AccountContext from "components/common/contexts/Account.context";
import type { AppProps } from "next/app";
import { useState } from "react";
import Header from "../components/common/Header";
import "/public/globals.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [account, setAccount] = useState<IAccount | null>(null);
  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      <div className="full-screen">
        <Header />
        <Component {...pageProps} />
      </div>
    </AccountContext.Provider>
  );
}

export default MyApp;
