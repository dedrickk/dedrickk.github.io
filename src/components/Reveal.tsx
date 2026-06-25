import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
    children: ReactNode;
    delay?: number;
    y?: number;
};

/**
 * Reveal enhances an already-laid-out element with a subtle entrance.
 * Under prefers-reduced-motion it renders children immediately (no gating),
 * so content is never hidden behind an animation that might not fire.
 */
export function Reveal({ children, delay = 0, y = 22 }: RevealProps) {
    const reduce = useReducedMotion();
    if (reduce) return <>{children}</>;
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
        >
            {children}
        </motion.div>
    );
}
