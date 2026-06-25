import { useEffect, useRef } from 'react';

/** Blood-red dot with a trailing ring. Fine-pointer only; off for touch + reduced-motion. */
export function Cursor() {
    const ring = useRef<HTMLDivElement>(null);
    const dot = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia('(hover: none)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const rEl = ring.current!;
        const dEl = dot.current!;
        document.documentElement.classList.add('cursor-on');

        let mx = -200, my = -200, rx = -200, ry = -200, hot = false, raf = 0;

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            dEl.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
        };
        const onOver = (e: MouseEvent) => {
            const t = e.target as HTMLElement | null;
            hot = !!t?.closest('a, button, [data-hot]');
        };
        const loop = () => {
            rx += (mx - rx) * 0.2;
            ry += (my - ry) * 0.2;
            rEl.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0) scale(${hot ? 1.7 : 1})`;
            rEl.classList.toggle('is-hot', hot);
            raf = requestAnimationFrame(loop);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('mouseover', onOver, { passive: true });
        raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseover', onOver);
            document.documentElement.classList.remove('cursor-on');
        };
    }, []);

    return (
        <>
            <div ref={ring} className="cursor" aria-hidden />
            <div ref={dot} className="cursor-dot" aria-hidden />
        </>
    );
}
