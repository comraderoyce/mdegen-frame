/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { appURL } from "../../utils";

const frameHandler = frames(async (ctx) => {
  console.log('/deposit state', ctx.state);

  return {
    image: `${appURL()}/explain.png`,
    imageOptions: {
      aspectRatio: '1.91:1'
    },
    buttons: [
      <Button action="tx" target="/tx-deposit" post_url="/end">
        Deposit
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
  