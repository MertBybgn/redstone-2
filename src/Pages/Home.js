import React from "react";
import Shares from "../components/Shares/Shares";
import Tweets from "../components/Tweets/Tweets";
export default function Home() {
  return (
    <div>
      <div>
        {" "}
        <Shares />
      </div>
      <div>
        <Tweets />
      </div>
    </div>
  );
}
