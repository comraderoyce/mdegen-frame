import { encodeFunctionData } from "viem";
import { frames } from "../frames";
import { transaction } from "frames.js/core";
import { erc20ABI } from "../abi/erc20abi";
 
export const POST = frames(async (ctx) => {
  console.log('/tx-approve', ctx);

  const myCalldata = encodeFunctionData({
    abi: erc20ABI,
    functionName: "approve",
    args: [
      ctx.state.vaultAddress,
      ctx.state.amount, 
    ],
  });
 
  // Return transaction data that conforms to the correct type
  return transaction({
    chainId: "eip155:8453", // BASE
    method: "eth_sendTransaction",
    params: {
      abi: [],
      to: ctx.state.tokenAddress,
      data: myCalldata,
      value: "0", // approve doesn't need a any ETH sent
    },
  });
});