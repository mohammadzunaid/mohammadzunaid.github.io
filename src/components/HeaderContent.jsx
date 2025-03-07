import React, {useEffect, useRef} from "react";
import { init } from "ityped";

function HeaderContent() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
        showCursor: true,
        strings: ["Full Stack .NET Developer", ".NET Developer"],
        backDelay: 1500,
        loop: true
    } )
  }, []);
  return (
    <div className="flex-center align-content-center justify-content-center offset-xs-2 offset-lg-3 offset-md-2 col-md-6">
      <div className="container justify-content-center">
        <h1 className="gold">&nbsp;I'm </h1>
        <h1 className="name">ZUNAID</h1>
        <span className="ml-lg-2 skills" ref={textRef} >
          {/* <!-- Web Developer <span className="gold">|</span> Android Developer --> */}
          {/* System Engineer @ <span className="gold">Tata Consultancy Services</span> */}
        </span>
      </div>
    </div>
  );
}

export default HeaderContent;
