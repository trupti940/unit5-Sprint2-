import React, {useState,useRef,useEffect} from 'react'

const Timer = () => {
    const [remainingTime,setRemainingTime] = useState(60);
    const intervalRef = useRef(null);
    const progressBarRef = useRef(null);
    const durationRef = useRef(60);
    const inputRef = useRef(null);
    const messageRef = useRef(null);
    const [message,setMessage] = useState("");

    const startTimer = () => {
        if (intervalRef.current !== null) return;
        intervalRef.current = setInterval(() => {
            setRemainingTime(prev => {
                if (prev > 0) return prev -1;
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                setMessage("Time's up!");
                return 0;
            });
        },1000);
    };

    const pauseTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setRemainingTime(durationRef.current);
        setMessage("");
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setRemainingTime(durationRef.current);
        setMessage("");
    }

    useEffect(() => {
        if (progressBarRef.current){
            progressBarRef.current.style.width = `${(remainingTime/durationRef.current) * 100}%`;

        }
        if(remainingTime <= 10){
            document.body.style.backgroundColor = 'red';

        }else{
            document.body.style.backgroundColor='white';
        }
    },[remainingTime]);

    const handleInputChange = () => {
        durationRef.current = parseInt(inputRef.current.value) || 60;
        resetTimer();
    };

    return(
        <div>
            <h1>Countdown Timer</h1>
            <div>{Math.floor(remainingTime/60)}:{remainingTime % 60}</div>
            <div ref={progressBarRef} className='progress-bar'></div>
            <input type="number" ref={inputRef} placeholder='="set new duration' onChange={handleInputChange}/>
            <div>
                <button onClick={startTimer}>Start</button>
                <button onClick={pauseTimer}>Pause</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            <div ref={messageRef}>{message}</div>
        </div>
    );
};
export default Timer