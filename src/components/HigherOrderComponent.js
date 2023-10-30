/*HOC for cursor position */
import React, { useEffect, useState } from "react";

/*HOC*/
const withMousePosition = (WrappedComponent) => {
  /* The with part of the HOC name is a general convention recommended by React, 
  as it expresses the enhancing nature of the technique, 
  like providing a component ‘with’ something else. */
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse Position</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function HigherOrderComponent() {
  return (
    <div>
      <header>HOC for cursor position</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default HigherOrderComponent;
