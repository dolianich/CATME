import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  img: StaticImageData;
}

const Body = ({ img }: Props) => {
  return <Image src={img} alt="body" />;
};

export default Body;
