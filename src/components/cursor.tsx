'use client';
import { useCallback, useEffect, useState } from "react";
import "./cursor.css"

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handler = useCallback((event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
    }, [])

    useEffect(() => {
        window.addEventListener('mousemove', handler);

        return (() => {
            window.removeEventListener('mousemove', handler);
        });
    }, [handler]);

    return (
        <div
        className={`flare`}
        style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
        }}
        />
    )
};