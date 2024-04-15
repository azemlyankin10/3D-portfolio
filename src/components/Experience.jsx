import { OrbitControls, Sky } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { Office } from './Office';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { Avatar } from './Avatar';
import { useControls } from 'leva';

export const Experience = ({ section }) => {
    const { animation } = useControls({
        animation: {
            value: 'Typing',
            options: ['Typing', 'Standing', 'Falling'],
        },
    });
    return (
        <>
            {/* <OrbitControls /> */}
            {/* <Sky /> */}
            <ambientLight intensity={1} />
            <Avatar animationName={animation} />

            <motion.group animate={{ y: section === 0 ? 0 : -1 }}>
                <Office section={section} />
            </motion.group>
        </>
    );
};
