import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  img: StaticImageData;
}

const Body = ({ img }: Props) => {
  return <Image src={img} alt="body" width={200} height={200} />;
};

export default Body;
