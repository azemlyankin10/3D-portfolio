import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export const ScrollManager = ({ section, onSectionChange, onCurrentPageChange }) => {
    const data = useScroll();
    const lastScroll = useRef(0);
    const isAnimation = useRef(false);

    data.fill.classList.add('top-0');
    data.fill.classList.add('absolute');

    useEffect(() => {
        gsap.to(data.el, {
            duration: 1,
            scrollTop: section * data.el.clientHeight,
            onStart: () => {
                isAnimation.current = true;
            },
            onComplete: () => {
                isAnimation.current = false;
            },
        });
    }, [section]);

    let currentPage = 0;
    useFrame(() => {
        // If the user is scrolling, we don't want to trigger the section change
        if (isAnimation.current) {
            lastScroll.current = data.scroll.current;
            return;
        }
        // If the user has stopped scrolling, we can trigger the section change
        const curSection = Math.floor(data.scroll.current * data.pages);
        if (curSection !== currentPage) {
            currentPage = curSection;
            onCurrentPageChange(currentPage);
        }
        if (data.scroll.current > lastScroll.current && curSection === 0) {
            onSectionChange(1);
        }
        // If the user is scrolling up and the current scroll position is less than the previous scroll position
        // and the current scroll position is less than 1 divided by the total number of pages minus 1,
        // then trigger the section change to the previous section.
        if (data.scroll.current < lastScroll.current && data.scroll.current < 1 / (data.pages - 1)) {
            onSectionChange(0);
        }

        lastScroll.current = data.scroll.current;
    });
    return null;
};
