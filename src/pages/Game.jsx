import { Unity, useUnityContext } from "react-unity-webgl";
import data from "../assets/2048.data";
import code from "../assets/2048.wasm?init"
const Game = () => {

    const { unityProvider } = useUnityContext({
      loaderUrl: "https://res.cloudinary.com/dyiesiahu/raw/upload/v1708318155/u5mxcrxkg5pxdowfff4i.js",
      dataUrl: data,
      frameworkUrl: "https://res.cloudinary.com/dyiesiahu/raw/upload/v1708318265/qarcliegry5l80mxv1x2.js",
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
  