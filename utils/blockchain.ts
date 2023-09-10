import { ethers } from "ethers";
import { POLYGON_MUMBAI_RPC_PROVIDER } from "@config";

export const provider = new ethers.JsonRpcProvider(POLYGON_MUMBAI_RPC_PROVIDER);
