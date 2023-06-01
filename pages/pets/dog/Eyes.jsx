import React, { useState } from "react";
import styles from "../../../styles/EyesDog.module.css";
import fastdom from 'fastdom';
const Eyes = () => {
    const mouseTargetRef = React.useRef();
    const mousePosition = useMouse(mouseTargetRef);
    const { position: circlePosition, measuredRef: circleRef } = usePosition();
    const angle = getAngle(circlePosition, mousePosition);
    const style = {
      transform: `rotate(${angle}deg)`
    };
    return (
        <div className={styles.main}>
      <div className={styles.stage} ref={mouseTargetRef}>
      <div className={styles.shine} ></div>
        <div className={styles.circle} ref={circleRef} style={style}></div>
      </div>
      <div className={styles.stage2} ref={mouseTargetRef}>
      <div className={styles.shine} ></div>
        <div className={styles.circle} ref={circleRef} style={style}></div>
      </div>
    </div>
    );
  }
  export default Eyes;
  
  function getAngle(from, to) {
    const radians = Math.atan2(to.y - from.y, to.x - from.x);
    const degree = radians * (180 / Math.PI);
    // added value depends on the arc image to rotate and which part of the arc should correspond to degree 0
    return degree + 135;
  }
  
  function useMouse(mouseTargetRef) {
    let x ,y;
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  
    React.useEffect(() => {
      const t = mouseTargetRef.current;
      t.addEventListener("mousemove", onMouseMove);
      return () => t.removeEventListener("mousemove", onMouseMove);
  
      function onMouseMove(e) {
        x = e.clientX;
        y = e.clientY;
        setMousePosition({ x, y });
      }
    }, []);
  
    return mousePosition;
  }
  
  function usePosition() {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const ref = React.useRef();
  
    const measuredRef = React.useCallback((node) => {
      if (node) {
        const { x, y, width, height } = node.getBoundingClientRect();
        setPosition({
          x: x + width / 2,
          y: y + height / 2
        });
      }
      ref.current = node;
    }, []);
  
    React.useEffect(() => {
      window.addEventListener("scroll", update);
      window.addEventListener("resize", update);
      return () => {
        window.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      };
  
      function update(e) {
        if (ref.current) {
          fastdom.measure(() => {
            const { x, y, width, height } = ref.current.getBoundingClientRect();
            fastdom.mutate(() => {
              setPosition({
                x: x + width / 2,
                y: y + height / 2
              });
            });
          });
        }
      }
    }, []);
  
    return { position, measuredRef };
  }
  
  