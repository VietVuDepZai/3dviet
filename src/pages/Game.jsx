import { Unity, useUnityContext } from "react-unity-webgl";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Game = () => {
    const handle = useFullScreenHandle();

    const { unityProvider } = useUnityContext({
      loaderUrl: "/2048.loader.js",
      dataUrl: "/2048.data",
      frameworkUrl: "/2048.framework.js",
      codeUrl: "/2048.wasm",
    });
  
    return (
      <div id="unity-container" className="unity-desktop">
        <FullScreen handle={handle}>
          <Unity unityProvider={unityProvider}/>
        </FullScreen>
        <div id="unity-loading-bar">
          <div id="unity-logo"></div>
          <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full"></div>
          </div>
        </div>
        <div id="unity-warning"> </div>
        <div id="unity-footer">
          <div id="unity-webgl-logo"></div>
          <button onClick={handle.enter} id="unity-fullscreen-button"></button>
          <div id="unity-build-title">2048</div>
        </div>
       
      </div>
      
    );
  
}
export default Game;
  