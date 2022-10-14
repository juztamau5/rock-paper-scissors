/*
 * Copyright (C) 2022 juztamau5
 * This file is part of Rock Paper Scissors Dapp - https://github.com/juztamau5/rock-paper-scissors
 *
 * SPDX-License-Identifier: Apache-2.0
 * See LICENSE.txt for more information.
 */

/* eslint @typescript-eslint/no-unused-expressions: "off" */

import {
  ERC20PortalFacet,
  ERC20PortalFacet__factory,
  InputFacet,
  InputFacet__factory,
  OutputFacet,
  OutputFacet__factory,
} from "@cartesi/rollups";
import { JsonRpcProvider, Provider } from "@ethersproject/providers";
import chai from "chai";
import { ethers, Signer } from "ethers";

// Constants
const HARDHAT_DEFAULT_MNEMONIC =
  "test test test test test test test test test test test junk";
const HARDHAT_DEFAULT_RPC_URL = "http://localhost:8545";

interface Contracts {
  inputContract: InputFacet;
  outputContract: OutputFacet;
  erc20Portal: ERC20PortalFacet;
}

/**
 * Connect to instance of Rollups application
 * @param chainId number of chain id of connected network
 * @param provider provider or signer of connected network
 * @param args args for connection logic
 * @returns Connected rollups contracts
 */
export const rollups = async (
  chainId: number,
  provider: Provider | Signer,
  address: string
): Promise<Contracts> => {
  // Connect to contracts
  const inputContract = InputFacet__factory.connect(address, provider);
  const outputContract = OutputFacet__factory.connect(address, provider);
  const erc20Portal = ERC20PortalFacet__factory.connect(address, provider);

  return {
    inputContract,
    outputContract,
    erc20Portal,
  };
};

describe("Mocha", function () {
  it("should perform a basic test", async function () {
    chai.expect(true).to.be.true;

    // Connect to JSON-RPC provider
    const provider: JsonRpcProvider = new JsonRpcProvider(
      HARDHAT_DEFAULT_RPC_URL
    );

    const network = await provider.getNetwork();
    console.log(`    Connected to chain ${network.chainId}`);

    // Create signer to be used to send transactions
    const signer: Signer = ethers.Wallet.fromMnemonic(
      HARDHAT_DEFAULT_MNEMONIC
    ).connect(provider);

    const dappAddress = "0xF119CC4Ed90379e5E0CC2e5Dd1c8F8750BAfC812";

    // Connect to rollups
    const { inputContract } = await rollups(
      network.chainId,
      signer || provider,
      dappAddress
    );

    const signerAddress = await inputContract.signer.getAddress();
    console.log(`    Using account "${signerAddress}"`);
  });
});
