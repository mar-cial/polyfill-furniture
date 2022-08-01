import * as ethers from 'ethers';
import { ExternalProvider, JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { useState } from 'react';

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

function useMetamask() {
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const [accounts, setAccounts] = useState<string[]>([]);

  const setupProvider = () => {
    if(!window.ethereum) throw Error('Could not find Metamask extension');
    return new Web3Provider(window.ethereum)
      .on('accountsChanged', setAccounts)
  }
  
  const connect = async () => {
    const provider = setupProvider();
    const accounts = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setAccounts(accounts);
    setSigner(signer);
    console.log(accounts);
  }

  const sendTransaction = async (from: string, to: string, valueInEther: string) =>  {
    const provider = setupProvider();
    const params = [{
      from,
      to,
      value: ethers.utils.parseUnits(valueInEther, 'ether').toHexString()
    }];
    const transactionHash = await provider.send('eth_sendTransaction', params);
    return transactionHash;
  }

  return { 
    signer,
    accounts,
    connect,
    sendTransaction,
  }
}

export { useMetamask }