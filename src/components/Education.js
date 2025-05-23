import React, {useRef, useEffect, useState } from 'react'
import {useScroll,motion} from 'framer-motion'
import LiIcon from './LiIcon'

const Details =({type,time,place,info}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0: last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:'spring'}}>
                <h3 className='capitalize font-bold text-2xl dark:text-light'>
                    {type}
                </h3>
                <span className='captialize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full dark:text-light'>
                    {info}
                </p>
            </motion.div>
        </li>
}

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    });

    const [educations, setEducations] = useState([]);

    useEffect(() => {
        const fetchEducations = async () => {
            try {
                const response = await fetch('/All-Texts/pages.txt');
                const text = await response.text();
                const educationSection = text.split('EDUCATION:')[1].split('PROJECTS PAGE:')[0];
                const educationLines = educationSection.split('\n').filter(line => line.trim());
                
                const parsedEducations = [];
                let currentEducation = {};
                
                educationLines.forEach(line => {
                    if (line.trim() && !line.includes('Technical Skills:')) {
                        if (line.includes('|')) {
                            if (Object.keys(currentEducation).length > 0) {
                                parsedEducations.push(currentEducation);
                            }
                            const [type, time] = line.split('|');
                            currentEducation = {
                                type: type.trim(),
                                time: time.trim(),
                                place: '',
                                info: ''
                            };
                        } else if (currentEducation.type) {
                            if (!currentEducation.place) {
                                currentEducation.place = line.trim();
                            } else {
                                currentEducation.info = line.trim();
                            }
                        }
                    }
                });
                
                if (Object.keys(currentEducation).length > 0) {
                    parsedEducations.push(currentEducation);
                }
                
                setEducations(parsedEducations);
            } catch (error) {
                console.error('Error fetching educations:', error);
            }
        };

        fetchEducations();
    }, []);

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light'>Education</h2>    
            
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top'></motion.div>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    {educations.map((edu, index) => (
                        <Details
                            key={index}
                            type={edu.type}
                            time={edu.time}
                            place={edu.place}
                            info={edu.info}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Education