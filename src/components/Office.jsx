/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { CurveModifier, useTexture } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { forwardRef, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';
import { animate, useMotionValue } from 'framer-motion';
import { motionConfig } from '../config';
import CustomShaderMaterial from 'three-custom-shader-material';
import { patchShaders } from 'gl-noise/build/glNoise.m';
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

export function Office({ section }) {
    const { nodes } = useGLTF('materials/bake-room.glb');
    const texture = useTexture('materials/final-baked.jpg');
    texture.flipY = false;

    const textureMaterial = new THREE.MeshStandardMaterial({ map: texture });
    textureMaterial.transparent = true;
    const opacityValue = useMotionValue();

    const robot = useRef();
    const { clock } = useThree();

    const waypoints = useMemo(() => [
        new THREE.Vector3(-3, 0.1, -2),
        new THREE.Vector3(-2, 0.1, -2),
        new THREE.Vector3(-2, 0.1, -1),
        new THREE.Vector3(-5, 0.1, -1),
        new THREE.Vector3(-5, 0.1, 0),
        new THREE.Vector3(-3, 0.1, 0),
        new THREE.Vector3(-3, 0.1, 1),
        new THREE.Vector3(-5, 0.1, 1),
        new THREE.Vector3(-5, 0.1, 2),
        new THREE.Vector3(-2, 0.1, 2),
        new THREE.Vector3(-2, 0.1, 3),
        new THREE.Vector3(-5, 0.1, 3),
        new THREE.Vector3(-5, 0.1, 4),
        new THREE.Vector3(-2, 0.1, 4),
        new THREE.Vector3(-2, 0.1, 5),
        new THREE.Vector3(-5, 0.1, 5),
        new THREE.Vector3(-5, 0.1, 6),
        new THREE.Vector3(-2, 0.1, 6),
        new THREE.Vector3(-2, 0.1, 7),
        new THREE.Vector3(-5, 0.1, 7),
        // new THREE.Vector3(-2, 0, 1),
        // new THREE.Vector3(-5, 0, 1),
        // new THREE.Vector3(-5, 0, -1),
    ], []);

    const curve = useMemo(() => new THREE.CatmullRomCurve3(waypoints, true, 'centripetal'), [waypoints]);

    useEffect(() => {
        animate(opacityValue, section === 0 ? 1 : 0.3, { ...motionConfig });
    }, [section]);

    useFrame(() => {
        textureMaterial.opacity = opacityValue.get();

        const t = (clock.getElapsedTime() / 90) % 1;
        const point = curve.getPoint(t); // Get a point on the curve
        const tangent = curve.getTangent(t).normalize(); // Get the tangent at the point

        robot.current.position.copy(point);
        robot.current.rotation.y = Math.atan2(-tangent.z, tangent.x);
    });

    return (
        <group position={[1, -1.3, 0]} scale={[0.6, 0.5, 0.5]} rotation={[1.2, 1.4, -1]} dispose={null}>
            <RobotCleaner ref={robot} scale={[0.03, 0.03, 0.03]} position-y={0.1} />

            <mesh
                name='mirror-element-to-modify'
                castShadow
                receiveShadow
                geometry={nodes['mirror-element-to-modify'].geometry}
                position={[0.635, 0.117, 5.87]}
                rotation={[Math.PI, -1.123, Math.PI]}>
                <meshStandardMaterial color='white' />
            </mesh>
            <mesh
                name='foto-frame'
                castShadow
                receiveShadow
                geometry={nodes['foto-frame'].geometry}
                position={[2.447, 7.98, -0.418]}
                rotation={[-0.261, 0, 1.583]}
                // material={perlinNoiseMaterial}
            >
                {/* <meshStandardMaterial color='white' /> */}
            </mesh>
            <mesh
                name='floor-and-walls'
                castShadow
                receiveShadow
                geometry={nodes['floor-and-walls'].geometry}
                material={textureMaterial}
                position={[-3.789, 0.123, 0.759]}
            />
            <mesh
                name='monitor-screen-to-modify'
                castShadow
                receiveShadow
                geometry={nodes['monitor-screen-to-modify'].geometry}
                position={[2.091, 3.609, 0.418]}
                rotation={[0, 1.547, 0]}>
                <meshStandardMaterial color='white' />
            </mesh>
            <mesh
                name='window2-glass-to-modify'
                castShadow
                receiveShadow
                geometry={nodes['window2-glass-to-modify'].geometry}
                position={[2.529, 4.494, 5.01]}
                rotation={[0, 0, 1.569]}
                // material={perlinNoiseMaterial}
            >
                <meshStandardMaterial color='white' />
            </mesh>
            <mesh
                name='window-glass-to-modify'
                castShadow
                receiveShadow
                geometry={nodes['window-glass-to-modify'].geometry}
                // material={textureMaterial}
                position={[2.541, 4.494, -3.974]}
                rotation={[0, 0, 1.569]}
                // material={perlinNoiseMaterial}
            >
                {/* <meshStandardMaterial color='white' /> */}
            </mesh>
            <mesh
                name='laptop-screen-to-modify'
                castShadow
                receiveShadow
                geometry={nodes['laptop-screen-to-modify'].geometry}
                position={[1.424, 3.151, -1.596]}
                rotation={[0.274, -1.125, 0.269]}>
                <meshStandardMaterial color='white' />
            </mesh>
            <mesh
                name='wires'
                castShadow
                receiveShadow
                geometry={nodes.wires.geometry}
                material={textureMaterial}
                position={[2.192, 3.726, -0.726]}
                rotation={[0, 1.262, 1.587]}
            />
            <mesh
                name='ps-wire'
                castShadow
                receiveShadow
                geometry={nodes['ps-wire'].geometry}
                material={textureMaterial}
                position={[3.2, 4.997, 1.747]}
                rotation={[0, 0, 1.587]}
            />
            <mesh
                name='desk'
                castShadow
                receiveShadow
                geometry={nodes.desk.geometry}
                material={textureMaterial}
                position={[1.508, 1.469, -3.164]}
            />
            <mesh
                name='stand'
                castShadow
                receiveShadow
                geometry={nodes.stand.geometry}
                material={textureMaterial}
                position={[1.358, 2.838, -1.785]}
                rotation={[-1.087, -0.738, -0.907]}
            />
            <mesh
                name='laptop'
                castShadow
                receiveShadow
                geometry={nodes.laptop.geometry}
                material={textureMaterial}
                position={[1.424, 3.167, -1.596]}
                rotation={[0.274, -1.125, 0.269]}
            />
            <mesh
                name='monitor'
                castShadow
                receiveShadow
                geometry={nodes.monitor.geometry}
                material={textureMaterial}
                position={[2.104, 3.609, 0.418]}
                rotation={[0, 1.547, 0]}
            />
            <mesh
                name='monitor-stand'
                castShadow
                receiveShadow
                geometry={nodes['monitor-stand'].geometry}
                material={textureMaterial}
                position={[1.977, 2.671, -0.259]}
                rotation={[0, -0.001, 0]}
            />
            <mesh
                name='Mousepad'
                castShadow
                receiveShadow
                geometry={nodes.Mousepad.geometry}
                material={textureMaterial}
                position={[0.668, 2.527, 0.362]}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                name='chair'
                castShadow
                receiveShadow
                geometry={nodes.chair.geometry}
                material={textureMaterial}
                position={[-0.963, 0.985, 0.331]}
                rotation={[-Math.PI / 2, 0, 1.58]}
            />
            <mesh
                name='rugRound_1'
                castShadow
                receiveShadow
                geometry={nodes.rugRound_1.geometry}
                material={textureMaterial}
                position={[2.547, 0.136, -0.969]}
            />
            <mesh
                name='Mouse'
                castShadow
                receiveShadow
                geometry={nodes.Mouse.geometry}
                material={textureMaterial}
                position={[0.507, 2.556, 1.225]}
                rotation={[0, -1.506, 0]}
            />
            <mesh
                name='keyboard'
                castShadow
                receiveShadow
                geometry={nodes.keyboard.geometry}
                material={textureMaterial}
                position={[0.527, 2.582, 0.371]}
                rotation={[Math.PI, -1.563, Math.PI]}
            />
            <mesh
                name='window'
                castShadow
                receiveShadow
                geometry={nodes.window.geometry}
                material={textureMaterial}
                position={[2.698, 4.5, 5.011]}
            />
            <mesh
                name='window-2'
                castShadow
                receiveShadow
                geometry={nodes['window-2'].geometry}
                material={textureMaterial}
                position={[2.71, 4.5, -3.973]}
            />
            <mesh
                name='candle'
                castShadow
                receiveShadow
                geometry={nodes.candle.geometry}
                material={textureMaterial}
                position={[2.2, 2.698, 2.275]}
                rotation={[0, -1.564, 0]}
            />
            <mesh
                name='candle-1'
                castShadow
                receiveShadow
                geometry={nodes['candle-1'].geometry}
                material={textureMaterial}
                position={[2.204, 2.816, -0.286]}
                rotation={[0, -1.564, 0]}
            />
            <mesh
                name='Mirror'
                castShadow
                receiveShadow
                geometry={nodes.Mirror.geometry}
                material={textureMaterial}
                position={[0.635, 0.117, 5.87]}
                rotation={[Math.PI, -1.123, Math.PI]}
            />
            <mesh
                name='sofa'
                castShadow
                receiveShadow
                geometry={nodes.sofa.geometry}
                material={textureMaterial}
                position={[-1.972, 0.997, -5.508]}
                rotation={[Math.PI, -0.008, Math.PI]}
            />
            <mesh
                name='FlowerPot8'
                castShadow
                receiveShadow
                geometry={nodes.FlowerPot8.geometry}
                material={textureMaterial}
                position={[1.56, 2.826, -5.85]}
            />
            <mesh
                name='light'
                castShadow
                receiveShadow
                geometry={nodes.light.geometry}
                material={textureMaterial}
                position={[-5.099, 3.625, -6.211]}
            />
            <mesh
                name='Dumbbell001'
                castShadow
                receiveShadow
                geometry={nodes.Dumbbell001.geometry}
                material={textureMaterial}
                position={[0.423, 0.374, 7.27]}
                rotation={[2.122, 0.498, -2.564]}
            />
            <mesh
                name='equipment'
                castShadow
                receiveShadow
                geometry={nodes.equipment.geometry}
                material={textureMaterial}
                position={[1.969, 0.211, 7.685]}
                rotation={[0.057, -1.516, 0.014]}
            />
            <mesh
                name='switcher'
                castShadow
                receiveShadow
                geometry={nodes.switcher.geometry}
                material={textureMaterial}
                position={[-5.85, 3.843, -7.255]}
                rotation={[Math.PI, -1.54, Math.PI]}
            />
            <mesh
                name='shelf'
                castShadow
                receiveShadow
                geometry={nodes.shelf.geometry}
                material={textureMaterial}
                position={[0.552, 6.007, -6.361]}
                rotation={[0, -1.563, 0]}
            />
            <mesh
                name='Rock3'
                castShadow
                receiveShadow
                geometry={nodes.Rock3.geometry}
                material={textureMaterial}
                position={[0.955, 6.616, -6.411]}
                rotation={[0, 0.738, -1.292]}
            />
            <mesh
                name='wall-board'
                castShadow
                receiveShadow
                geometry={nodes['wall-board'].geometry}
                material={textureMaterial}
                position={[-3.059, 4.556, -7.203]}
            />
            <mesh
                name='wall-grid'
                castShadow
                receiveShadow
                geometry={nodes['wall-grid'].geometry}
                material={textureMaterial}
                position={[2.472, 6.226, 0.297]}
                rotation={[0, 0, 1.582]}
            />
            <mesh
                name='PS4_Base'
                castShadow
                receiveShadow
                geometry={nodes.PS4_Base.geometry}
                material={textureMaterial}
                position={[2.416, 5.379, 1.259]}
                rotation={[-3.137, -0.007, 1.571]}
            />
            <mesh
                name='PS4_Controller001'
                castShadow
                receiveShadow
                geometry={nodes.PS4_Controller001.geometry}
                material={textureMaterial}
                position={[2.447, 6.894, 0.76]}
                rotation={[1.594, -0.276, 1.59]}
            />
            <mesh
                name='joistick-holder'
                castShadow
                receiveShadow
                geometry={nodes['joistick-holder'].geometry}
                material={textureMaterial}
                position={[2.197, 6.514, 1.7]}
                rotation={[0, 0, 1.576]}
            />
            <mesh
                name='joistick-holder-2'
                castShadow
                receiveShadow
                geometry={nodes['joistick-holder-2'].geometry}
                material={textureMaterial}
                position={[2.197, 7.015, 2.493]}
                rotation={[0, 0, 1.576]}
            />
            <mesh
                name='pot'
                castShadow
                receiveShadow
                geometry={nodes.pot.geometry}
                material={textureMaterial}
                position={[2.229, 5.407, -0.891]}
                rotation={[0, 0, 0.002]}
            />
            <mesh
                name='pot-1'
                castShadow
                receiveShadow
                geometry={nodes['pot-1'].geometry}
                material={textureMaterial}
                position={[2.229, 4.802, -0.34]}
                rotation={[0, 0, 0.002]}
            />
            <mesh
                name='pen-3'
                castShadow
                receiveShadow
                geometry={nodes['pen-3'].geometry}
                material={textureMaterial}
                position={[2.24, 5.79, -0.845]}
                rotation={[2.039, -0.301, 0.515]}
            />
            <mesh
                name='pen-2'
                castShadow
                receiveShadow
                geometry={nodes['pen-2'].geometry}
                material={textureMaterial}
                position={[2.006, 5.772, -0.839]}
                rotation={[1.327, 0.345, 1.112]}
            />
            <mesh
                name='pen'
                castShadow
                receiveShadow
                geometry={nodes.pen.geometry}
                material={textureMaterial}
                position={[2.108, 5.795, -0.834]}
                rotation={[1.593, 0.281, 1.114]}
            />
            <mesh
                name='PS4_Controller002'
                castShadow
                receiveShadow
                geometry={nodes.PS4_Controller002.geometry}
                material={textureMaterial}
                position={[2.447, 7.414, 1.546]}
                rotation={[1.594, -0.276, 1.59]}
            />
            <mesh
                name='Dumbbell002'
                castShadow
                receiveShadow
                geometry={nodes.Dumbbell002.geometry}
                material={textureMaterial}
                position={[0.423, 0.489, 7.42]}
                rotation={[1.877, 0.69, 1.952]}
            />
            {/* <group name='RootNode' position={[-5.161, 1.026, -6.174]} scale={0.232}>
                <mesh
                    name='Circle'
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle.geometry}
                    material={textureMaterial}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    name='Circle001'
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle001.geometry}
                    material={textureMaterial}
                    position={[0, 3.042, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
            </group> */}
        </group>
    );
}

useGLTF.preload('materials/bake-room.glb');

const RobotCleaner = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('materials/robot-vacum.glb');

    return (
        <group ref={ref} {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Domestic_Robot.geometry} material={materials.Mat} />
        </group>
    );
});

// useGLTF.preload('materials/robot-vacum.glb');
