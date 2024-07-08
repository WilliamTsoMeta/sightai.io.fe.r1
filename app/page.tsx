import Image from 'next/image';
import Header from './components/Header';
import BG from './components/BG';

export default function Home() {
  return (
    <main>
      <Header />
      <div id='animation'></div>
      <div className='mb-[208px] mt-[215px] flex flex-col items-center justify-center px-[34px] md:mb-[8.2292vw] md:mt-0 md:px-0'>
        <h1 className='mt-[16.6667vw] text-center text-[36px] md:w-[46.0938vw] md:text-[5.9375vw]'>
          {' '}
          Your Content Title Belongs Here
        </h1>
        <h5 className='mt-10 text-center text-[14px] md:mt-[2.0833vw] md:w-[46.0938vw] md:text-[22px]'>
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren..
        </h5>
        <div className='mt-10 rounded-full border border-white bg-white px-[24px] py-[11px] text-[14px] font-semibold text-[#000] md:mt-[4.2708vw] md:px-[1.875vw] md:py-[0.9896vw] md:text-[16px]'>
          Join Waitlist
        </div>
      </div>
      <div className='flex flex-col border-t border-[#d9d9d97b] md:flex-row'>
        <h2 className='w-full shrink-0 px-[30px] py-[60px] text-[28px] md:mt-[3.4896vw] md:w-[50vw] md:pl-[12.5vw] md:pr-[6vw] md:text-[64px]'>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren.
        </h2>
        <div className='w-full shrink-0 border-[#d9d9d97b] md:w-[50vw] md:border-l'>
          <p className='border-b border-[#d9d9d97b] px-[30px] py-[60px] text-[14px] text-[#fff] text-[#ffffffc3] md:mt-[4.8958vw] md:pb-[5.7292vw] md:pl-[6.5625vw] md:pr-[12.3438vw] md:text-[22px]'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
          <p className='px-[30px] py-[60px] text-[14px] text-[#ffffffc3] md:mt-[4.8958vw] md:pb-[5.7292vw] md:pl-[6.5625vw] md:pr-[12.3438vw] md:text-[22px]'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </p>
        </div>
      </div>
      <div className='rounded-t-[2.9167vw] bg-[#F4F4F4] px-[34px] pt-[7.2917vw] md:px-[12.5vw]'>
        <div className='flex flex-col text-[#000] md:flex-row'>
          <div className='w-full pb-10 pr-[11.9792vw] pt-[7.0313vw] md:w-[50%] md:pb-0'>
            <h1 className='mb-10 text-[28px] md:mb-0 md:text-[3.3333vw]'>
              Grow Next-gen Business Smartly
            </h1>

            <div className='mt-[6.25vw]'>
              <h5 className='mt-[1.25vw] text-[16px] font-bold'>TypoX</h5>
              <p className='mt-[1.25vw] text-[14px]'>to a broader audience</p>
              <p className='mt-[1.25vw] text-[14px] text-[#1C1C1EB8] md:text-[1.1458vw]'>
                An Entrance for Web3 Newcomers: Offering intuitive learning and
                knowledge search Experience A Bridge Connecting Web3 Protocols
                and Global users: Unifying diverse information sources and Web3
                Protocols, reducing entry barriers for a wider audience
              </p>
            </div>
          </div>
          <div className='flex h-[460px] h-auto w-full shrink-0 justify-center rounded-tr-[2.0833vw] bg-white px-[0.5208vw] py-[6.9271vw] md:w-[50%]'>
            <Image
              src='/imgs/ai.png'
              alt=''
              width={2801}
              height={2800}
              className='h-[330px] w-[330px] md:h-[36.4583vw] md:w-[36.4583vw]'
            />
          </div>
        </div>

        <div className='mt-[8.3333vw] text-[#000]'>
          <h1 className='mb-[3.3854vw] text-[28px] md:text-[36px]'>
            Grow Next-gen Business Smartly
          </h1>
          <div className='flex flex-col justify-between md:flex-row'>
            <div className='mb-[20px] flex w-full flex-col items-center rounded-tl-[2.9167vw] bg-white p-[2.9167vw] px-[40px] py-[30px] md:max-w-[24.1667vw]'>
              <h3 className='text-[20px] md:text-[1.6667vw]'>
                Trigger actions on Stacks and Bitcoin.
              </h3>
              <Image
                src='/imgs/code.png'
                alt=''
                width={400}
                height={400}
                className='my-[37px] h-[129px] w-[114px] md:my-[2.9167vw] md:h-[9.1667vw] md:w-[8.0208vw]'
              />
              <p className='text-[14px] md:text-[1.1458vw]'>
                quickly identify the Bitcoin block where a Stacks transaction
                was settled, enabling confidence in the security and longevity
                of assets.
              </p>
            </div>

            <div className='mb-[20px] flex w-full flex-col items-center rounded-tl-[2.9167vw] bg-white p-[2.9167vw] px-[40px] py-[30px] md:max-w-[24.1667vw]'>
              <h3 className='text-[20px] md:text-[1.6667vw]'>
                Trigger actions on Stacks and Bitcoin.
              </h3>
              <Image
                src='/imgs/code.png'
                alt=''
                width={400}
                height={400}
                className='my-[37px] h-[129px] w-[114px] md:my-[2.9167vw] md:h-[9.1667vw] md:w-[8.0208vw]'
              />
              <p className='text-[14px] md:text-[1.1458vw]'>
                quickly identify the Bitcoin block where a Stacks transaction
                was settled, enabling confidence in the security and longevity
                of assets.
              </p>
            </div>

            <div className='mb-[20px] flex w-full flex-col items-center rounded-tl-[2.9167vw] bg-white p-[2.9167vw] px-[40px] py-[30px] md:max-w-[24.1667vw]'>
              <h3 className='text-[20px] md:text-[1.6667vw]'>
                Trigger actions on Stacks and Bitcoin.
              </h3>
              <Image
                src='/imgs/code.png'
                alt=''
                width={400}
                height={400}
                className='my-[37px] h-[129px] w-[114px] md:my-[2.9167vw] md:h-[9.1667vw] md:w-[8.0208vw]'
              />
              <p className='text-[14px] md:text-[1.1458vw]'>
                quickly identify the Bitcoin block where a Stacks transaction
                was settled, enabling confidence in the security and longevity
                of assets.
              </p>
            </div>
          </div>
        </div>
        <div className='mt-[8.3333vw] flex flex-col items-center justify-end pb-[78px] md:flex-row md:items-start md:justify-between'>
          <h4 className='mb-4 text-[12px] text-[#000] md:mb-0 md:text-[0.8333vw]'>
            2024 Company Name. All Rights Reserved.
          </h4>
          <div className='flex h-[24px] w-[156px] justify-between'>
            <Image
              src='/imgs/x.png'
              alt=''
              width={84}
              height={84}
              className='h-[24px] w-[24px]'
            />
            <Image
              src='/imgs/t.png'
              alt=''
              width={84}
              height={84}
              className='h-[24px] w-[24px]'
            />
            <Image
              src='/imgs/tg.png'
              alt=''
              width={84}
              height={84}
              className='h-[24px] w-[24px]'
            />
            <Image
              src='/imgs/Medium.png'
              alt=''
              width={84}
              height={84}
              className='h-[24px] w-[24px]'
            />
          </div>
        </div>
      </div>
    </main>
  );
}
