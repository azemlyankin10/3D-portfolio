import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sky, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { Office } from './Office';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Avatar } from './Avatar';
import { useControls } from 'leva';
import { animate, useMotionValue } from 'framer-motion';
import { motionConfig } from '../config';

export const Experience = ({ section, isMenuOpened, currentPage }) => {
    console.log(currentPage);
    const { viewport } = useThree();
    const [currentAnimation, setCurrentAnimation] = useState('Typing')
    const reactModel = useGLTF('materials/react_logo.glb')
    const angularModel = useGLTF('materials/angular_brand.glb')
    // const { animation } = useControls({
    //     animation: {
    //         value: 'Typing',
    //         options: ['Typing', 'Standing', 'Kneeling'],
    //     },
    // });

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

    useEffect(() => {
        if (section === 0) {
            setCurrentAnimation('Typing')
        } else if (section === 1 && currentPage < 2) {
            setCurrentAnimation('Standing')
        } else if (currentPage === 2 || currentPage === 3) {
            setCurrentAnimation('Kneeling')
        }
    }, [section, currentPage])

    return (
        <>
            {/* <OrbitControls /> */}
            {/* <Sky /> */}
            <ambientLight intensity={1} />

            <motion.group
                scale={[1.5, 1.5, 1.5]}
                rotation-x={-Math.PI / 2}
                rotation-z={Math.PI }
                rotation-y={0.2}
                position-z={0.9}
                position-x={1.1}
                position-y={-1.19}
                animate={[ section === 0 && "section0", section === 1 && "section1", (currentPage === 2 || currentPage === 3) && "section2"]}
                transition={{ duration: 1 }}
                variants={{
                    section0: { y: -1.19, z: 0.9, x: 1.1, rotateZ: Math.PI, rotateY: 0.2 },
                    section1: { y: -10.2, z: 5, x: 5, rotateZ: Math.PI / 6, rotateY: 0 },
                    section2: { y: -19.5, z: 5, x: 5, rotateZ: Math.PI / 6, rotateY: 0 },
                    // section3: { y: -25.2, z: 5, x: 5, rotateZ: Math.PI / 6, rotateY: 0 },
                }}
            >
                <Avatar animationName={currentAnimation} />
            </motion.group>
            <motion.group animate={{ y: section === 0 ? 0 : -1 }}>
                <Office section={section} />


            </motion.group>

            {/* SKILLS */}
            <motion.group
                position={[0, -1.5, -10]}
                animate={{ z: section === 1 ? 0 : -10, y: section === 1 ? -viewport.height : -1.5 }}
            >
               <Float>
                    <mesh position={[-10, 6, -15]} rotation-y={Math.PI + 0.4} scale={[2.5, 2.5, 2]}>
                        <primitive object={angularModel.scene} />
                        {/* <sphereGeometry/>
                        <MeshDistortMaterial color='red' opacity={0.8} transparent distort={0.4} speed={4} /> */}
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
                        <primitive object={reactModel.scene} />
                        {/* <sphereGeometry/>
                        <MeshWobbleMaterial color='blue' opacity={0.8} transparent factor={1} speed={5} /> */}
                    </mesh>
               </Float>
            </motion.group>
        </>
    );
};
