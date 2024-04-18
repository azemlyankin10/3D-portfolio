import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sky } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { Office } from './Office';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Avatar } from './Avatar';
import { useControls } from 'leva';
import { animate, useMotionValue } from 'framer-motion';
import { motionConfig } from '../config';

export const Experience = ({ section, isMenuOpened }) => {
    const { viewport } = useThree();
    const { animation } = useControls({
        animation: {
            value: 'Typing',
            options: ['Typing', 'Standing', 'Falling'],
        },
    });

    const cameraPositionX = useMotionValue()
    const cameraLookAtX = useMotionValue()

    useEffect(() => {
        animate(cameraPositionX, isMenuOpened ? 8 : 6, {...motionConfig})
        animate(cameraLookAtX, isMenuOpened ? 1 : 0, {...motionConfig})
    }, [isMenuOpened])

    useFrame((state) => {
        // console.log(state.camera.position.x, state.camera.position.y, state.camera.position.z);
        state.camera.position.x = cameraPositionX.get()
        state.camera.lookAt(cameraLookAtX.get(), 0, 0)
    })

    return (
        <>
            {/* <OrbitControls /> */}
            {/* <Sky /> */}
            <ambientLight intensity={1} />

            <group scale={[1.5, 1.5, 1.5]} rotation-x={-Math.PI / 2} rotation-z={Math.PI } rotation-y={0.2} position-z={0.9} position-x={1.1} position-y={-1.19}>
                <Avatar animationName={animation} />
            </group>
            <motion.group animate={{ y: section === 0 ? 0 : -1 }}>
                <Office section={section} />


            </motion.group>

            {/* SKILLS */}
            <motion.group
                position={[0, -1.5, -10]}
                animate={{ z: section === 1 ? 0 : -10, y: section === 1 ? -viewport.height : -1.5 }}
            >
               <Float>
                    <mesh position={[1, -4, -15]} scale={[2, 2, 2]}>
                        <sphereGeometry/>
                        <MeshDistortMaterial color='red' opacity={0.8} transparent distort={0.4} speed={4} />
                    </mesh>
               </Float>
               <Float>
                    <mesh position={[3, -3, -18]} scale={[3, 3, 3]}>
                        <sphereGeometry/>
                        <MeshDistortMaterial color='yellow' opacity={0.8} transparent distort={1} speed={5} />
                    </mesh>
               </Float>
               <Float>
                    <mesh position={[-3, -3, -11]} scale={[1.4, 1.4, 1.4]}>
                        <sphereGeometry/>
                        <MeshWobbleMaterial color='blue' opacity={0.8} transparent factor={1} speed={5} />
                    </mesh>
               </Float>
            </motion.group>
        </>
    );
};
