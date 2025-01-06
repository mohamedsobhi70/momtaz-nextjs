"use client"
import CountUp from "react-countup";
export default function Counter({ number }) {
    return <CountUp end={+number} duration={1.4} prefix="+" enableScrollSpy={true} />;
}
