/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { appURL } from "../../utils";

const frameHandler = frames(async (ctx) => {
  console.log('/end state', ctx.state);

  return {
    image: `${appURL()}/done.png`,
    imageOptions: {
      aspectRatio: '1.91:1'
    },
    buttons: [
      <Button action="link" target={`https://app.morpho.org/vault?vault=${ctx.state.vaultAddress}&network=base`}>
        See on Morpho
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler; 