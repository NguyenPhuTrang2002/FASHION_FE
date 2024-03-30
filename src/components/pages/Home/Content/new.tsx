
import React from 'react';
import ListItem from './listitem';
import { Link } from 'react-router-dom';

const New = () => {
  const menuItems = ['Ivy Moda', 'Ivy Men', 'Ivy Sport'];

  const items = [
    {
      image: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2024/03/05/ff8ace32bf3df0bc29f61e068f7dae87.JPG',
      color: ['#D9D1DC', '#EDBE90', '#DCA8A9'],
      title: 'Áo Sơ Mi Cổ Đức Tay Liền',
      price: '850.000',
      href: '/ivymen',
      tyms: (
        <img src="./icons/heart.svg" alt="" />
      ),
      bag: (
        <img src="./icons/bag.svg" alt="" />
      )
    },
    {
      image: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2024/03/04/6e35149c773fe9adec1f3ef41df156c1.JPG',
      color: ['#AC505E', '#A898BD', '#F16C99'],
      title: 'Đầm Xòe Cổ V Phối Đai',
      price: '1.690.000',
      href: '/ivysport',
      tyms: (
        <img src="./icons/heart.svg" alt="" />
      ),
      bag: (
        <img src="./icons/bag.svg" alt="" />
      )
    },
    {
      image: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2024/03/05/ff8ace32bf3df0bc29f61e068f7dae87.JPG',
      color: ['#D9D1DC', '#EDBE90', '#DCA8A9'],
      title: 'Áo Sơ Mi Cổ Đức Tay Liền',
      price: '850.000',
      href: '/ivymen',
      tyms: (
        <img src="./icons/heart.svg" alt="" />
      ),
      bag: (
        <img src="./icons/bag.svg" alt="" />
      )
    },
    {
      image: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2024/03/04/6e35149c773fe9adec1f3ef41df156c1.JPG',
      color: ['#AC505E', '#A898BD', '#F16C99'],
      title: 'Đầm Xòe Cổ V Phối Đai',
      price: '1.690.000',
      href: '/ivysport',
      tyms: (
        <img src="./icons/heart.svg" alt="" />
      ),
      bag: (
        <img src="./icons/bag.svg" alt="" />
      )
    },
    {
      image: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2024/03/05/ff8ace32bf3df0bc29f61e068f7dae87.JPG',
      color: ['#D9D1DC', '#EDBE90', '#DCA8A9'],
      title: 'Áo Sơ Mi Cổ Đức Tay Liền',
      price: '850.000',
      href: '/ivymen',
      tyms: (
        <img src="./icons/heart.svg" alt="" />
      ),
      bag: (
        <img src="./icons/bag.svg" alt="" />
      )
    },
  ];

  return (
    <div className="w-full">
      <div>
        <div>
          <h1 className='text-center tracking-wider uppercase font-semibold text-3xl leading-10 font-montserrat text-gray-900 pt-8 pb-3'>NEW ARRIVAL</h1>
          <ul className='flex justify-center items-center'>
            {menuItems.map((menuItem, index) => (
              <li className='text-gray-600 text-2xl font-sans leading-10 mx-10 cursor-pointer pb-5' key={index}>{menuItem}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {items.map((item, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <div className='absolute mt-8 ml-3 bg-[#E7973E] text-[#fff] px-4 py-[2px] rounded-tr-3xl font-semibold' style={{ zIndex: '2' }}>
                NEW
              </div>
              <div className='absolute left-[12px] mt-[60px]' style={{ borderTop: '15px solid #AC2F33', borderLeft: '7px solid transparent', zIndex: '1' }}></div>
              <ListItem key={index} {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='border-[1px] border-gray-500 box-border rounded-tl-2xl rounded-br-2xl p-3 text-base leading-5 text-black inline-block relative w-[120px] hover:bg-gray-800 hover:text-[#fff] hover:border-gray-500  mt-5'>
          <Link to="" className=''>
            <p className="font-semibold text-center">Xem tất cả</p>
          </Link>
        </div>
      </div>
    </div>
  );

}

export default New;
