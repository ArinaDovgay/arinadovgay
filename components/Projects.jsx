import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clockImg from '../public/assets/projects/clock.jpg';
import bigdataImg from '../public/assets/projects/bigdata.jpg';
import plantImg from '../public/assets/projects/plant.jpg';
import travelImg from '../public/assets/projects/travel.jpg';
import Projectitem from './Projectitem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <Projectitem title='Clock' backgroundImg={clockImg} projectUrl='/property' project='JavaScript' />
          <Projectitem title='Big Data' backgroundImg={bigdataImg} projectUrl='/bigdata' project='Python' />
          <Projectitem title='Plant' backgroundImg={plantImg} projectUrl='/plant' project='JavaScript' />
          <Projectitem title='Travel' backgroundImg={travelImg} projectUrl='/travel' project='JavaScript' />
        </div>
      </div>
    </div>
  )
}

export default Projects