
  /* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
import { appURL } from "../../utils";
import { degenTokenAddress, degenVaultAddress } from "../../morpho";
import { parseEther } from "viem";

const frameHandler = frames(async (ctx) => {
  console.log('/approve state', ctx.state);

  let amount: bigint = BigInt(0);
  try {
    // TODO: catch USDC edge case with 6 decimals or other ERC20 with different decimals
    amount = parseEther(ctx.message?.inputText!); 
  } catch (e) {
    console.error('/approve parse c.inputText', e);
  }

  const newState = {
    amount: amount.toString(),
    tokenAddress: degenTokenAddress,
    vaultAddress: degenVaultAddress,
  }

  return {
    state: newState,
    image: `${appURL()}/explain.png`,
    imageOptions: {
      aspectRatio: '1.91:1'
    },
    buttons: [
      <Button action="tx" target="/tx-approve" post_url="/deposit">
        Approve
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;

