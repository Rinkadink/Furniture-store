import React from 'react';
import Image from 'next/image';
import LeftArrow from '../../../public/images/left-arrow.png';
import Link from "next/link"

// const Breadcrumbs: React.FC = ({items}:any) => {
//   return (
//     <section  className="">
//     <div className="flex items-center justify-center flex-col gap-6 h-[316px]">
//       <div>
//         <Image src={Logo} alt="Logo" />
//       </div>
//       <h2 className="text-5xl">Shop</h2>
//       <div className="flex gap-6">
//         <h4 className="text-base">Home</h4>
//         <Image src={LeftArrow} alt="Left Arrow" />
//         <p className="text-base">Shop</p>
//       </div>
//     </div>
//   </section>
//   );
// };

const Breadcrumbs = ({ items }:any) => {
  return (
    <div className="breadcrumbs">
      {items.map(({item, index}:any) => (
        <span key={index}>
          {index > 0 && <Image src={LeftArrow} alt="Arrow" />}
          {index === items.length - 1 ? (
            <span>{item.text}</span>
          ) : (
            <Link href="items.link">{items.text}</Link>
          )}
        </span>
      ))}
    </div>
  );
};
export default Breadcrumbs;









