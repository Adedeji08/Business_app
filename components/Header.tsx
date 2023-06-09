import React, {useState} from 'react'
import Avatar from '../assets/Avatar.png'
import Image from 'next/image'
import Link from 'next/link';

const Header = ({title='Dashboard', subTitle='Overview',children}: any) => {

  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const toggleDropDownVisibility = () => {
    setDropdownVisibility(!dropdownVisibility);
}
  return (
    <div className='flex justify-between px-9 p-4 bg-white'>
       <h1 className='text-2xl font-black'>{title}</h1>
       <div className='flex justify-around'>
         <span> 
         <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="6" fill="white"/>
                <g clipPath="url(#clip0_234_65164)">
                <path d="M20.0002 22.5C21.3809 22.5 22.5002 21.3807 22.5002 20C22.5002 18.6193 21.3809 17.5 20.0002 17.5C18.6195 17.5 17.5002 18.6193 17.5002 20C17.5002 21.3807 18.6195 22.5 20.0002 22.5Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26.1668 22.5C26.0559 22.7513 26.0228 23.0301 26.0718 23.3005C26.1208 23.5708 26.2497 23.8202 26.4418 24.0166L26.4918 24.0666C26.6468 24.2214 26.7697 24.4052 26.8536 24.6076C26.9375 24.8099 26.9806 25.0268 26.9806 25.2458C26.9806 25.4648 26.9375 25.6817 26.8536 25.884C26.7697 26.0864 26.6468 26.2702 26.4918 26.425C26.337 26.5799 26.1532 26.7029 25.9509 26.7867C25.7486 26.8706 25.5317 26.9138 25.3127 26.9138C25.0936 26.9138 24.8768 26.8706 24.6744 26.7867C24.4721 26.7029 24.2883 26.5799 24.1335 26.425L24.0835 26.375C23.8871 26.1829 23.6376 26.054 23.3673 26.005C23.097 25.956 22.8182 25.989 22.5668 26.1C22.3204 26.2056 22.1101 26.381 21.9621 26.6046C21.814 26.8282 21.7346 27.0902 21.7335 27.3583V27.5C21.7335 27.942 21.5579 28.3659 21.2453 28.6785C20.9328 28.991 20.5089 29.1666 20.0668 29.1666C19.6248 29.1666 19.2009 28.991 18.8883 28.6785C18.5758 28.3659 18.4002 27.942 18.4002 27.5V27.425C18.3937 27.1491 18.3044 26.8816 18.1439 26.6572C17.9834 26.4328 17.7591 26.2619 17.5002 26.1666C17.2488 26.0557 16.97 26.0226 16.6997 26.0716C16.4293 26.1207 16.1799 26.2495 15.9835 26.4416L15.9335 26.4916C15.7787 26.6466 15.5949 26.7695 15.3926 26.8534C15.1902 26.9373 14.9734 26.9805 14.7543 26.9805C14.5353 26.9805 14.3184 26.9373 14.1161 26.8534C13.9138 26.7695 13.73 26.6466 13.5752 26.4916C13.4202 26.3369 13.2973 26.153 13.2134 25.9507C13.1295 25.7484 13.0864 25.5315 13.0864 25.3125C13.0864 25.0935 13.1295 24.8766 13.2134 24.6742C13.2973 24.4719 13.4202 24.2881 13.5752 24.1333L13.6252 24.0833C13.8173 23.8869 13.9462 23.6375 13.9952 23.3671C14.0442 23.0968 14.0111 22.818 13.9002 22.5666C13.7945 22.3202 13.6191 22.11 13.3956 21.9619C13.172 21.8138 12.91 21.7344 12.6418 21.7333H12.5002C12.0581 21.7333 11.6342 21.5577 11.3217 21.2452C11.0091 20.9326 10.8335 20.5087 10.8335 20.0666C10.8335 19.6246 11.0091 19.2007 11.3217 18.8881C11.6342 18.5756 12.0581 18.4 12.5002 18.4H12.5752C12.851 18.3935 13.1185 18.3042 13.3429 18.1437C13.5673 17.9832 13.7383 17.7589 13.8335 17.5C13.9444 17.2486 13.9775 16.9698 13.9285 16.6995C13.8795 16.4292 13.7506 16.1797 13.5585 15.9833L13.5085 15.9333C13.3535 15.7785 13.2306 15.5947 13.1467 15.3924C13.0629 15.19 13.0197 14.9732 13.0197 14.7541C13.0197 14.5351 13.0629 14.3182 13.1467 14.1159C13.2306 13.9136 13.3535 13.7298 13.5085 13.575C13.6633 13.42 13.8471 13.2971 14.0494 13.2132C14.2518 13.1293 14.4686 13.0862 14.6877 13.0862C14.9067 13.0862 15.1236 13.1293 15.3259 13.2132C15.5282 13.2971 15.712 13.42 15.8668 13.575L15.9168 13.625C16.1132 13.8171 16.3627 13.946 16.633 13.995C16.9033 14.044 17.1821 14.0109 17.4335 13.9H17.5002C17.7466 13.7943 17.9568 13.6189 18.1049 13.3954C18.253 13.1718 18.3324 12.9098 18.3335 12.6416V12.5C18.3335 12.058 18.5091 11.634 18.8217 11.3215C19.1342 11.0089 19.5581 10.8333 20.0002 10.8333C20.4422 10.8333 20.8661 11.0089 21.1787 11.3215C21.4912 11.634 21.6668 12.058 21.6668 12.5V12.575C21.6679 12.8431 21.7474 13.1051 21.8954 13.3287C22.0435 13.5523 22.2537 13.7277 22.5002 13.8333C22.7515 13.9442 23.0303 13.9773 23.3007 13.9283C23.571 13.8793 23.8204 13.7504 24.0168 13.5583L24.0668 13.5083C24.2216 13.3534 24.4054 13.2304 24.6078 13.1465C24.8101 13.0627 25.027 13.0195 25.246 13.0195C25.465 13.0195 25.6819 13.0627 25.8842 13.1465C26.0866 13.2304 26.2704 13.3534 26.4252 13.5083C26.5801 13.6631 26.7031 13.8469 26.7869 14.0492C26.8708 14.2516 26.914 14.4685 26.914 14.6875C26.914 14.9065 26.8708 15.1234 26.7869 15.3257C26.7031 15.528 26.5801 15.7119 26.4252 15.8666L26.3752 15.9166C26.183 16.113 26.0542 16.3625 26.0052 16.6328C25.9561 16.9032 25.9892 17.182 26.1002 17.4333V17.5C26.2058 17.7465 26.3812 17.9567 26.6048 18.1047C26.8283 18.2528 27.0903 18.3322 27.3585 18.3333H27.5002C27.9422 18.3333 28.3661 18.5089 28.6787 18.8215C28.9912 19.134 29.1668 19.558 29.1668 20C29.1668 20.442 28.9912 20.8659 28.6787 21.1785C28.3661 21.4911 27.9422 21.6666 27.5002 21.6666H27.4252C27.157 21.6677 26.895 21.7472 26.6714 21.8952C26.4479 22.0433 26.2725 22.2535 26.1668 22.5Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_234_65164">
                <rect width="20" height="20" fill="white" transform="translate(10 10)"/>
                </clipPath>
                </defs>
         </svg>
         </span>
         <span>
                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="6" fill="white"/>
                <path d="M21.4417 27.5C21.2952 27.7526 21.0849 27.9622 20.8319 28.108C20.5788 28.2537 20.292 28.3304 20 28.3304C19.708 28.3304 19.4212 28.2537 19.1681 28.108C18.9151 27.9622 18.7048 27.7526 18.5583 27.5M25 16.6667C25 15.3406 24.4732 14.0688 23.5355 13.1312C22.5979 12.1935 21.3261 11.6667 20 11.6667C18.6739 11.6667 17.4021 12.1935 16.4645 13.1312C15.5268 14.0688 15 15.3406 15 16.6667C15 22.5 12.5 24.1667 12.5 24.1667H27.5C27.5 24.1667 25 22.5 25 16.6667Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
         </span>
         <span>
              <Image 
                 src={Avatar}
                 alt="Picture of the author"
              />
         </span>
         <p className='text-sm font-bold pl-3 admin-name'>Olivia Rhye<br/><span className='text-sm font-light'>Admin</span></p>
         <div>
          <div>
         <button type='button' className='pt-3 pl-2 font-light inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true"' onClick={toggleDropDownVisibility}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </button>
          </div>
            {
              dropdownVisibility &&  
              <div className='w-[240px] h-[129px] bg-white shadow mb-5 mr-6 pt-6 absolute right-0 z-10 mt-2 origin-top-right rounded-md ring-1 ring-black ring-opacity-5 '>
                <Link href='/' className='block pl-4 h-[5vh] text-gray-700 text-sm font-normal drop-text'>
                  View profile
                </Link>

                 <Link href='/' className='block pl-4 h-[5vh] text-gray-700 text-sm font-normal drop-text'>
                 Settings
                 </Link>
                 <section className='flex justify-between'>
                 <button className='pl-4 h-[5vh] text-gray-700 text-sm font-normal drop-text'>
                   Log out
                 </button>
                  <span className='pr-4'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6" stroke="#667085" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </span>
                 </section>
              </div>
            }
          </div>
       </div>
    </div>
  )
}

export default Header