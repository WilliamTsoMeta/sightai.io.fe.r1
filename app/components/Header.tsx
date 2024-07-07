'use client';

import Image from 'next/image';
import { useState } from 'react';

function Header() {
  const [menu, setmenu] = useState(false);

  const connect = () => {};
  return (
    <div className='absolute top-0 flex w-full justify-end md:h-[6.25vw]'>
      <div className='my-[1.9271vw] mr-[3.125vw] hidden h-[2.3958vw] w-[27.6563vw] items-center justify-between text-[0.8333vw] md:flex'>
        <div>Docs</div>
        <div>Onboard</div>

        <div className='rounded-full border border-white p-[0.8333vw]'>
          Join Waitlist
        </div>
        <div
          className='rounded-full border border-white bg-white p-[0.8333vw] text-[#000]'
          onClick={connect}
        >
          Connect Wallet
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
              <div className='w-full rounded-full border border-black bg-black p-[9px] text-center text-[#fff]'>
                Connect Wallet
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
