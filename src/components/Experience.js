import React, {useRef, useEffect, useState } from 'react'
import {useScroll,motion} from 'framer-motion'
import LiIcon from './LiIcon'

const Details =({position,company,companyLink,time,address,work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0: last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:'spring'}} className='w-full'>
                <h3 className='capitalize font-bold text-2xl dark:text-light'>
                    {position} &nbsp; <a href={companyLink} target='_blank' className='text-primary capitalize'>{company}</a>
                </h3>
                <span className='captialize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full dark:text-light'>
                    {work}
                </p>
            </motion.div>
        </li>
}

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    });

    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await fetch('/All-Texts/pages.txt');
                const text = await response.text();
                const experienceSection = text.split('EXPERIENCE:')[1].split('EDUCATION:')[0];
                const experienceLines = experienceSection.split('\n')
                    .filter(line => line.trim() && !line.includes('--------------------------------------------------------------'));
                
                const parsedExperiences = [];
                let currentExperience = {};
                let isPreviousExperience = false;
                
                experienceLines.forEach(line => {
                    const trimmedLine = line.trim();
                    
                    if (trimmedLine === 'Previous Experience:') {
                        isPreviousExperience = true;
                        return;
                    }
                    
                    if (trimmedLine.includes('@') || (isPreviousExperience && trimmedLine && !trimmedLine.includes('|'))) {
                        if (Object.keys(currentExperience).length > 0) {
                            parsedExperiences.push(currentExperience);
                        }
                        
                        let position, company;
                        if (trimmedLine.includes('@')) {
                            [position, company] = trimmedLine.split('@');
                        } else {
                            const parts = trimmedLine.split(/\s{2,}/);
                            position = parts[0];
                            company = parts[1];
                        }
                        
                        currentExperience = {
                            position: position.trim(),
                            company: company.trim(),
                            companyLink: '#',
                            time: '',
                            address: '',
                            work: '',
                            isPrevious: isPreviousExperience
                        };
                    } else if (trimmedLine.includes('|')) {
                        const [time, address] = trimmedLine.split('|');
                        currentExperience.time = time.trim();
                        currentExperience.address = address.trim();
                    } else if (trimmedLine && !trimmedLine.includes('Previous Experience:')) {
                        currentExperience.work = trimmedLine;
                    }
                });
                
                if (Object.keys(currentExperience).length > 0) {
                    parsedExperiences.push(currentExperience);
                }
                
                setExperiences(parsedExperiences);
            } catch (error) {
                console.error('Error fetching experiences:', error);
            }
        };

        fetchExperiences();
    }, []);

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light'>Experience</h2>    
            
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top'></motion.div>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    {experiences.map((exp, index) => (
                        <Details
                            key={index}
                            position={exp.position}
                            company={exp.company}
                            companyLink={exp.companyLink}
                            time={exp.time}
                            address={exp.address}
                            work={exp.work}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Experience