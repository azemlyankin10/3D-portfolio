import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { Office } from './Office';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

export const Experience = ({section}) => {
    return (
        <>
            {/* <OrbitControls /> */}
            {/* <ambientLight intensity={2} /> */}
            <motion.group animate={{y: section === 0 ? 0 : -1}}>
                <Office position={[1, -1.3, 0]} scale={[0.6, 0.5, 0.5]} rotation={[1.2, 1.4, -1]} />
            </motion.group>
        </>
    );
};
