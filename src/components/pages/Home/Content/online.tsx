import React from 'react';
import ListItem from './listitem';
import { Link } from 'react-router-dom';
const Online = () => {
  const menuItems = ['Ivy Moda', 'Ivy Men', 'Ivy Sport'];
  const items = [
    {
      image: 'https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/12/21/9bdd09ee2b37bd19c3563a88cf528ca3.JPG',
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
      image: 'https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/12/20/132426b4eaa44ee837b7ba26edcb8bff.JPG',
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
      image: 'https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/12/20/43197758ce6426daeac6bb45596fedf7.JPG',
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
      image: 'https://pubcdn.ivymoda.com/files/product/thumab/400/2023/12/26/477a03cf894dcadcefcc44fd92a64d46.jpg',
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
      image: 'https://pubcdn.ivymoda.com/files/product/thumab/1400/2023/11/21/a7c137de60e1da842377490e65efd65f.jpg',
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
          <h1 className='text-center tracking-wider uppercase font-semibold text-3xl leading-10 font-montserrat text-gray-900 pt-8 pb-3'>MUA 2 GIẢM THÊM 10% - KHI MUA ONLINE</h1>
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
              <div className='absolute mt-8 ml-3 bg-[#AC2F33] text-[#fff] px-4 py-[2px] rounded-br-3xl font-semibold' style={{ zIndex: '2' }}>
                Best Seller
              </div>
              <div className='absolute left-[12px] mt-[60px]' style={{ borderTop: '15px solid #D2691E', borderLeft: '7px solid transparent', zIndex: '1' }}></div>
              <div className='absolute flex left-[210px]  mt-[32px] bg-[#FF7F50] text-[13px] text-[#fff] font-semibold px-1 py-[4px] rounded-tr-lg rounded-tl-xl rounded-bl-xl shadow-lg' style={{ zIndex: '1' }}>-50 <p className='font-thin text-[11px]'>%</p></div>
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

export default Online;
