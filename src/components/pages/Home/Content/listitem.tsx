
import React from 'react';
import { Link } from 'react-router-dom';

interface ListItemProps {
  image: string;
  color: string[];
  title: string;
  price: string;
  href: string;
  tyms: React.ReactNode;
  bag: React.ReactNode;
}

const ListItem = ({ image, color, title, price, href, tyms, bag }: ListItemProps) => {
  return (
    <div className='w-[280px] rounded-lg flex flex-col hover:shadow-xl hover:bg-gray-200 px-5 pt-5 pb-3 relative'>
      <Link to={href} className="">
        <img className='rounded-md' src={image} alt="Product" />
      </Link>
      <div className='flex justify-between pt-5 pb-3'>
        <ul className="flex">
          {color.map((item, index) => (
            <li key={index} className="mr-4">
              <div className="w-5 h-5 rounded-xl" style={{ backgroundColor: item }}></div>
            </li>
          ))}
        </ul>
        <p>{tyms}</p>
      </div>
      <Link to={href} className="">
        <p className='text-[#717274] text-sm leading-4 mb-2 font-sans block capitalize'>{title}</p>
      </Link>
      <div className='flex justify-between items-center'>
        <p className='text-[red] font-semibold text-base leading-6 no-underline inline-block align-middle'>{price}đ</p>
        <p>{bag}</p>
      </div>
    </div>
  );
}

export default ListItem;