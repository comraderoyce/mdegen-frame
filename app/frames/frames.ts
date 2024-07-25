import { createFrames } from "frames.js/next";

type State = {
  amount: string,
  tokenAddress: `0x${string}`,
  vaultAddress: `0x${string}`,
}

export const frames = createFrames<State>({
  basePath: "/frames",
  initialState: { 
    amount: '0',
    tokenAddress: '0x',
    vaultAddress: '0x',
   },
  debug: process.env.NODE_ENV === "development",
});
