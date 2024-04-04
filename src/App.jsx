import { Canvas } from '@react-three/fiber';
import './App.css';
import { Experience } from './components/Experience';
import { Scroll, ScrollControls } from '@react-three/drei';
import { Interface } from './components/Interface';
import { useEffect, useState } from 'react';
import { ScrollManager } from './components/ScrollManager';
import { Menu } from './components/Menu';
import { MotionConfig } from 'framer-motion';

export const App = () => {
    const [section, setSection] = useState(0);
    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        setMenuOpened(false);
    }, [section]);

    return (
        <MotionConfig transition={{ type: 'spring', mass: 5, stiffness: 500, damping: 50, restDelta: 0.0001 }}>
            <Canvas shadows camera={{ position: [6, 0, 10], fov: 42 }}>
                <color attach='background' args={['#f0f0f0']} />
                <ScrollControls pages={4} damping={0.1}>
                    <ScrollManager section={section} onSectionChange={setSection} />
                    <Scroll>
                        <Experience section={section} />
                    </Scroll>
                    <Scroll html>
                        <Interface />
                    </Scroll>
                </ScrollControls>
            </Canvas>
            <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
        </MotionConfig>
    );
};
