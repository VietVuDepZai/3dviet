import { Unity, useUnityContext } from "react-unity-webgl";
import loader from "../assets/2048.loader.js";
import data from "../assets/2048.data";
import framework from "../assets/2048.framework.js"
import code from "../assets/2048.wasm"
const Game = () => {

    const { unityProvider } = useUnityContext({
      loaderUrl: loader,
      dataUrl: data,
      frameworkUrl: framework,
      codeUrl: code,
    });
  
    return (
      <div id="unity-container" className="unity-desktop">
        <Unity unityProvider={unityProvider} style={{width : "960px", height : '690px'}}/>
        <div id="unity-loading-bar">
          <div id="unity-logo"></div>
          <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full"></div>
          </div>
        </div>
        <div id="unity-warning"> </div>
        <div id="unity-footer">
          <div id="unity-webgl-logo"></div>
          <div id="unity-fullscreen-button"></div>
          <div id="unity-build-title">2048</div>
        </div>
      </div>
    );
  
}
export default Game;
  