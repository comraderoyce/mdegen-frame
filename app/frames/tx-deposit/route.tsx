import { encodeFunctionData } from "viem";
import { frames } from "../frames";
import { transaction } from "frames.js/core";
import { vaultABI } from "../abi/vaultabi";
 
export const POST = frames(async (ctx) => {
  console.log('/tx-deposit', ctx);

  const myCalldata = encodeFunctionData({
    abi: vaultABI,
    functionName: "deposit",
    args: [
      ctx.state.amount, 
      ctx.message?.connectedAddress!,
    ],
  });
 
  // Return transaction data that conforms to the correct type
  return transaction({
    chainId: "eip155:8453", // BASE
    method: "eth_sendTransaction",
    params: {
      abi: [],
      to: ctx.state.vaultAddress,
      data: myCalldata,
    },
  });
});