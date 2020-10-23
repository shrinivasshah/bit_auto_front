import React, { useEffect, useState } from "react";
import { db } from "./firebase/fb";
import Chart from "react-google-charts";

import "./App.css";
import Bitbns from "./Bitbns";

let bitList = [["coins", "buy", "sell"]];
const GLOBAL_COINS =
  "ADA,AE,BAT,BCH,BNB,BSV,BTG,BTT,DAS,DCR,DGB,DOGE,ENJ,EOS,ETC,ETH,FET,GNT,ICX,IOTA,LEND,LINK,LSK,LTC,MATI,NANO,NEO,NPXS,OMG,ONT,POLY,QTUM,REP,SC,STEEM,STORJ,THETA,TRX,VET,XEM,XLM,XMR,XRP,XVG,ZIL,ZRX";
let G_COIN_ARR = GLOBAL_COINS.split(",");
// console.log(G_COIN_ARR);
let x = 0;
function App() {
  const [bitbns, setBitbns] = useState([]);
  const [coindcx, setCoindcx] = useState([]);
  const [wazirx, setWazirx] = useState([]);
  const [pocketbits, setPocketbits] = useState([]);

  const getFirebaseData = () => {
    const bitbnsState = db.ref("bitbns");
    bitbnsState.on("value", (snapshot) => {
      for (let i of G_COIN_ARR) {
        if (snapshot.val()[`${i}USDT`]) {
          setBitbns((prevProps) => [...prevProps, snapshot.val()[`${i}USDT`]]);
        }
      }
    });
    const coindcxState = db.ref("coindcx");
    coindcxState.on("value", (snapshot) => {
      let data = snapshot.val();
      setCoindcx((prevItems) => [...prevItems, data]);
    });
    const wazirxState = db.ref("wazirx");
    wazirxState.on("value", (snapshot) => {
      let data = snapshot.val();
      setWazirx((prevItems) => [...prevItems, data]);
    });
    const pocketbitsState = db.ref("coindcx");
    pocketbitsState.on("value", (snapshot) => {
      let data = snapshot.val();
      setPocketbits((prevItems) => [...prevItems, data]);
    });
  };

  useEffect(() => {
    getFirebaseData();
  }, []);

  for (let i of bitbns.slice(0, 1)) {
    x += 1;
    bitList.push([x, i.buy, i.sell]);
  }

  return (
    <div>{bitbns ? <Bitbns coins={bitList} /> : <h1>Loading ...</h1>}</div>
  );
}

export default App;
