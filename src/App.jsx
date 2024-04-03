import { Canvas } from '@react-three/fiber';
import './App.css';
import { Experience } from './components/Experience';
import { Scroll, ScrollControls } from '@react-three/drei';
import { Interface } from './components/Interface';
import { useState } from 'react';
import { ScrollManager } from './components/ScrollManager';

export const App = () => {
    const [section, setSection] = useState(0);

    return (
        <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
            <color attach='background' args={['#f0f0f0']} />
            <ScrollControls pages={4} damping={0.1}>
                <ScrollManager section={section} onSectionChange={setSection} />
                <Experience />
                <Scroll html>
                    <Interface />
                </Scroll>
            </ScrollControls>
        </Canvas>
    );
};
