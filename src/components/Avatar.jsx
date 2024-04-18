/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';

export function Avatar({ animationName }) {
    const { wireframe } = useControls({
      wireframe: false,
    })

    const group = useRef();
    const { nodes, materials } = useGLTF('materials/avatar.glb');
    const { animations: typingAnimation } = useFBX('animations/Typing.fbx');
    typingAnimation[0].name = 'Typing';
    const { animations: standingAnimation } = useFBX('animations/standing.fbx');
    standingAnimation[0].name = 'Standing';
    const { animations: fallingAnimation } = useFBX('animations/Falling.fbx');
    fallingAnimation[0].name = 'Falling';

    const { actions } = useAnimations([typingAnimation[0], standingAnimation[0], fallingAnimation[0]], group);

    useEffect(() => {
        actions[animationName].reset().play();
        return () => {
            actions[animationName]?.reset().fadeOut(0)
        }
    }, [animationName, actions]);

    useEffect(() => {
      Object.values(materials).forEach((material) => {
        material.wireframe = wireframe
      })
    }, [wireframe])

    return (
        <group ref={group} dispose={null}>

                <primitive object={nodes.Hips} />
                <skinnedMesh
                    name='EyeLeft'
                    geometry={nodes.EyeLeft.geometry}
                    material={materials.Wolf3D_Eye}
                    skeleton={nodes.EyeLeft.skeleton}
                    morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
                />
                <skinnedMesh
                    name='EyeRight'
                    geometry={nodes.EyeRight.geometry}
                    material={materials.Wolf3D_Eye}
                    skeleton={nodes.EyeRight.skeleton}
                    morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                    morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
                />
                <skinnedMesh
                    name='Wolf3D_Head'
                    geometry={nodes.Wolf3D_Head.geometry}
                    material={materials.Wolf3D_Skin}
                    skeleton={nodes.Wolf3D_Head.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
                />
                <skinnedMesh
                    name='Wolf3D_Teeth'
                    geometry={nodes.Wolf3D_Teeth.geometry}
                    material={materials.Wolf3D_Teeth}
                    skeleton={nodes.Wolf3D_Teeth.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Hair.geometry}
                    material={materials.Wolf3D_Hair}
                    skeleton={nodes.Wolf3D_Hair.skeleton}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Glasses.geometry}
                    material={materials.Wolf3D_Glasses}
                    skeleton={nodes.Wolf3D_Glasses.skeleton}
                />
                <skinnedMesh
                    name='Wolf3D_Outfit_Top'
                    geometry={nodes.Wolf3D_Outfit_Top.geometry}
                    material={materials.Wolf3D_Outfit_Top}
                    skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
                />
                <skinnedMesh
                    name='Wolf3D_Outfit_Bottom'
                    geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                    material={materials.Wolf3D_Outfit_Bottom}
                    skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences}
                />
                <skinnedMesh
                    name='Wolf3D_Outfit_Footwear'
                    geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                    material={materials.Wolf3D_Outfit_Footwear}
                    skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
                    morphTargetDictionary={nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary}
                    morphTargetInfluences={nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences}
                />
                <skinnedMesh
                    geometry={nodes.Wolf3D_Body.geometry}
                    material={materials.Wolf3D_Body}
                    skeleton={nodes.Wolf3D_Body.skeleton}
                />

        </group>
    );
}

useGLTF.preload('materials/avatar.glb');
