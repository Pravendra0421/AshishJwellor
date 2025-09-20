'use client'

import React from 'react';
import Image from 'next/image';
import { HomepageEntity, Look as LookSectionType } from '@/core/entities/HomePage.entity'; // Import Look as LookSectionType to avoid name collision
import Look2 from "../../../public/images/look2.avif"
interface Props {
  homepageSection: HomepageEntity | null;
}

const Look = ({ homepageSection }: Props) => {
  // Find the 'look' section from the homepage data
  const lookSection = homepageSection?.sections?.find(
    (section): section is LookSectionType => section.type === 'look'
  );

  if (!lookSection) {
    return null; 
  }

  const imageUrl = lookSection.imageUrl || "/images/look1.png"; 
  const imageAlt = lookSection.imageAlt || "Model wearing the look";
  const titleText = lookSection.title || "SHOP THE LOOK";

  return (
    <div className='flex flex-col md:flex-row mx-auto bg-white overflow-hidden my-8 min-h-[400px]'>

      <div className='w-full p-4 md:p-0 flex flex-col'>
        <h2 className='text-xl font-serif text-gray-800 p-4 pb-0 md:pl-8' style={{ color: '#5B4B43' }}>
          {titleText}
        </h2>
        
        <div className='flex justify-center items-center overflow-hidden w-full' style={{ height: '700px' }}> 
          <Image
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-full object-cover" 
            priority
            width={700} 
            height={600}
          />
        </div>
      </div>
     
    </div>
  );
};

export default Look;



 