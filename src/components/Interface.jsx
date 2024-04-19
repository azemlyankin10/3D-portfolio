import { motion } from 'framer-motion';
import { ScrollManager } from './ScrollManager';
import { Scroll } from '@react-three/drei';

const Section = ({ children }) => {
    return (
        <motion.section
            className='h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}>
            {children}
        </motion.section>
    );
};

export const Interface = () => {
    return (
        <div className='flex flex-col items-center w-screen'>
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            {/* <ContactSection /> */}
        </div>
    );
};

const AboutSection = () => {
    return (
        <Section>
            <h1 className='text-6xl font-extrabold leading-snug'>
                Hi, ..... <br /> <span className='bg-white px-1 italic'>my name</span>
            </h1>
            <motion.p
                className='text-lg text-gray-600 mt-4'
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}>
                ......
            </motion.p>
            <motion.button
                className='bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16'
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}>
                Contact me
            </motion.button>
        </Section>
    );
};

const SkillsSection = () => {
    return (
        <Section>
            <motion.div className='mb-14' whileInView={'visible'}>
                <h2 className='text-5xl font-bold'>Skills</h2>
                <div className='mt-8 space-y-4'>
                    {skills.map((skill, index) => (
                        <div className='w-64' key={index}>
                            <motion.h3
                                className='text-xl font-bold text-gray-800'
                                initial={{ opacity: 0 }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: { duration: 1, delay: 1 + index * 0.2 },
                                    },
                                }}>
                                {skill.title}
                            </motion.h3>
                            <div className='h-2 w-full gb-gray-200 rounded-full mt-2 bg-white'>
                                <motion.div
                                    className='h-full bg-indigo-500 rounded-full'
                                    style={{ width: `${skill.level}%` }}
                                    initial={{ scaleX: 0, originX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: 1 + index * 0.2 }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
            <motion.div whileInView={'visible'}>
                <h2 className='text-5xl font-bold'>Languages</h2>
                <div className='mt-8 space-y-4'>
                    {languages.map((language, index) => (
                        <div className='w-64' key={index}>
                            <motion.h3
                                className='text-xl font-bold text-gray-800'
                                initial={{ opacity: 0 }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: { duration: 1, delay: 1 + index * 0.2 },
                                    },
                                }}>
                                {language.title}
                            </motion.h3>
                            <div className='h-2 w-full gb-gray-200 rounded-full mt-2 bg-white'>
                                <motion.div
                                    className='h-full bg-indigo-500 rounded-full'
                                    style={{ width: `${language.level}%` }}
                                    initial={{ scaleX: 0, originX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 1, delay: 2 + index * 0.2 }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
};

const skills = [
    { title: 'JavaScript', level: 95 },
    { title: 'React', level: 90 },
    { title: 'Node.js', level: 85 },
    { title: 'TypeScript', level: 80 },
    { title: '3D Modeling', level: 75 },
];

const languages = [
    { title: '🇺🇸 English', level: 60 },
    { title: '🇧🇪 Dutch', level: 10 },
    { title: '🇺🇦 Ukrainian', level: 100 },
    { title: '🇷🇺 Russian', level: 100 },
];

const ProjectSection = () => {
    return (
        <Section>
            <h1>Projects</h1>
        </Section>
    );
};

const ContactSection = () => {
    return (
        <Section>
            <h2 className='text-5xl font-bold'>Contact</h2>
            <div className='mt-8 p-8 rounded-md bg-white w-96 max-w full'>
                <form>
                    <label for='name' className='font-medium text-gray-900 block mb-1'>
                        Name
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        className='block w-full rounded-md border-md border-0 text-gray-900 shadow-sm ring-1'
                    />
                    <label for='email' className='font-medium text-gray-900 block mb-1 mt-8'>
                        Email
                    </label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        className='block w-full rounded-md border-md border-0 text-gray-900 shadow-sm ring-1'
                    />
                    <label for='message' className='font-medium text-gray-900 block mb-1 mt-8'>
                        Message
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        className='h-32 block w-full rounded-md border-md border-0 text-gray-900 shadow-sm ring-1'
                    />
                    <button className='bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold mt-12'>Submit</button>
                </form>
            </div>
        </Section>
    );
};
