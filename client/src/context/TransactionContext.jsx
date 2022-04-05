import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAdress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionsProvider = ({ children }) => {

const checkIfwalletIsConnected = async () => {
    if(!ethereum) return alert("Please install metamask");

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    console.log(accounts);
}

useEffect(()=> {
    checkIfwalletIsConnected();
}, []);

    return (
        <TransactionContext.Provider value={{ value: 'test'}}>
            {children}
        </TransactionContext.Provider>
    );
}
