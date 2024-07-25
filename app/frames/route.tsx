/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
import { appURL } from "../utils";

const frameHandler = frames(async (ctx) => {
  return {
    image: `${appURL()}/start.png`,
    imageOptions: {
      aspectRatio: '1.91:1'
    },
    textInput: "Enter Amount (e.g. 10.5)",
    buttons: [
      <Button action="post" target={{ pathname: "/approve" }}>
        Deposit $DEGEN
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
