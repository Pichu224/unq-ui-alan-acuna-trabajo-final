import { useEffect, useState } from "react";
import type { UseTimerProps } from "../types/useTimerProps";

export default function useTimer({ initialTime, isRunning, onFinish}: UseTimerProps) {

    const [timeLeft, setTimeLeft] = useState(initialTime);

    const resetTimer = () => {
        setTimeLeft(initialTime);
    }

    useEffect(() => {
        if(!isRunning) return;

        if (timeLeft <= 0) {
            onFinish();
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft(previous => previous - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, [timeLeft, isRunning, onFinish]);

    return {
        timeLeft,
        resetTimer
    };
}