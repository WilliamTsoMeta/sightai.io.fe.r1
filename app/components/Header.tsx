'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const SEPOLIA_CHAIN_ID = '0xaa36a7'; // Hexadecimal representation of Sepolia Testnet chain ID

declare global {
  interface Window {
    ethereum: any;
  }
}

function shortenHex(hexString: string) {
  // Ensure the string starts with '0x'
  if (hexString.startsWith('0x')) {
    return hexString.slice(0, 4) + '...' + hexString.slice(-4);
  }
  return hexString;
}

function Header() {
  const [menu, setmenu] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(
    null
  );
  const [account, setAccount] = useState(null);

  useEffect(() => {
    connectWallet();
  }, []);

  const getAccount = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];

    if (account) {
      setWalletAddress(account);
      setAccount(account);
      return true;
    }
    return false;
  };

  const checkChainId = async (provider) => {
    const { chainId } = await provider.getNetwork();
    if (chainId !== BigInt(parseInt(SEPOLIA_CHAIN_ID, 16))) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: SEPOLIA_CHAIN_ID }],
        });
      } catch (switchError) {
        console.error('Error switching to Sepolia Testnet:', switchError);
      }
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await getAccount();

        let signer = null;

        let provider;
        if (window.ethereum == null) {
          // If MetaMask is not installed, we use the default provider,
          // which is backed by a variety of third-party services (such
          // as INFURA). They do not have private keys installed,
          // so they only have read-only access
          alert('MetaMask not installed; using read-only defaults');
          provider = ethers.getDefaultProvider();
        } else {
          // Connect to the MetaMask EIP-1193 object. This is a standard
          // protocol that allows Ethers access to make all read-only
          // requests through MetaMask.
          provider = new ethers.BrowserProvider(window.ethereum);

          // It also provides an opportunity to request access to write
          // operations, which will be performed by the private key
          // that MetaMask manages for the user.
          signer = await provider.getSigner();
          setSigner(signer);
        }
        setProvider(provider);
        await checkChainId(provider);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  };

  return (
    <div className='absolute top-0 flex w-full justify-end md:h-[6.25vw]'>
      <div className='my-[1.9271vw] mr-[3.125vw] hidden h-[2.3958vw] w-[27.6563vw] items-center justify-between text-[0.8333vw] md:flex'>
        <div className='cursor-pointer select-none'>Docs</div>
        <div className='cursor-pointer select-none'>Onboard</div>

        <div className='cursor-pointer select-none rounded-full border border-white p-[0.8333vw]'>
          Join Waitlist
        </div>
        <div
          className='cursor-pointer select-none rounded-full border border-white bg-white p-[0.8333vw] text-[#000]'
          onClick={connectWallet}
        >
          {walletAddress ? shortenHex(walletAddress) : 'Connect Wallet'}
        </div>
      </div>
      <div className='flex pr-[20px] pt-[18px] md:hidden'>
        {menu && (
          <div className='absolute left-0 top-0 flex w-full flex-col items-center bg-white'>
            <Image
              src='/imgs/close.png'
              alt=''
              width={48}
              height={48}
              className='mr-[20px] mt-[20px] h-[24px] w-[24px] items-end self-end'
              onClick={() => setmenu(false)}
            />
            <div className='mb-4 mt-[18px] flex h-[184px] w-[260px] flex-col items-center justify-between text-[16px] text-black'>
              <div>Docs</div>
              <div>Onboard</div>
              <div className='w-full rounded-full border border-black py-[9px] text-center'>
                Join Waitlist
              </div>
              <div
                className='w-full rounded-full border border-black bg-black p-[9px] text-center text-[#fff]'
                onClick={connectWallet}
              >
                {walletAddress ? shortenHex(walletAddress) : 'Connect Wallet'}
              </div>
            </div>
          </div>
        )}
        <Image
          src='/imgs/menu.png'
          alt=''
          width={48}
          height={48}
          className='h-[24px] w-[24px]'
          onClick={() => setmenu(true)}
        />
      </div>
    </div>
  );
}

export default Header;
