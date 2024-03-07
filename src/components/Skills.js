import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark py-3 px-6 text-light p-8 shadow-dark cursor-pointer absolute'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 text-center'> Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <Skill name='Technical Leadership' x='-25vw' y='-2vw' />
        <Skill name='Strategic Planning' x='-5vw' y='-10vw' />
        <Skill name='Software Architecture' x='20vw' y='6vw' />
        <Skill name='Kubernetes' x='0vw' y='12vw' />
        <Skill name='Leadership' x='-20vw' y='-15vw' />
        <Skill name='Team Building' x='15vw' y='-12vw' />
        <Skill name='Problem Solving' x='32vw' y='-5vw' />
        <Skill name='Strategic Planning' x='0vw' y='-20vw' />
        <Skill name='Cloud Computing' x='-15vw' y='15vw' />
      </div>
    </>
  );
};

export default Skills;
