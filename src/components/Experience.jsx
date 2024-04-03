export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <mesh scale={1.5}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={'hotpink'} />
            </mesh>
        </>
    );
};
