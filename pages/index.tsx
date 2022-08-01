import { NextPage } from 'next';
import { ethers } from 'ethers';

// component imports
import Banner from '@components/Banner';
import Footer from '@components/Footer';
import FurnitureRibbon from '@components/FurnitureRibbon';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
// component start
const Homepage: NextPage = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [hasMetamask, setHasMetamask] = useState<boolean>(false);
  const [signer, setSigner] = useState<any>();

  useEffect(() => {
    // @ts-ignore
    if (window.ethereum !== 'undefined') {
      setHasMetamask(true);
    }
  });

  const connect = async () => {
    // @ts-ignore
    if (typeof window.ethereum !== 'undefined') {
      try {
        // @ts-ignore
        await ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        // @ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  };
  return (
    <div className="text-white bg-black">
      <AnimatePresence>
        {hasMetamask ? (
          isConnected ? (
            <motion.div animate={{ height: 0, transition: { delay: 1 } }}>
              <button>Connected!</button>
            </motion.div>
          ) : isConnected ? (
            ''
          ) : (
            <motion.div>
              <button onClick={connect}>Connect to MetaMask</button>
            </motion.div>
          )
        ) : (
          'Please install MetaMask.'
        )}
      </AnimatePresence>
      <Banner />
      <FurnitureRibbon />
      <Footer />
    </div>
  );
};

export default Homepage;
