import FrameLayout from "./Layouts/FrameLayout/FrameLayout";
import Scene from "./Layouts/Scene/Scene";
import InteractiveSphere from "./components/InteractiveSphere/InteractiveSphere";

function App() {
  return (
    <>
      <FrameLayout>
        <Scene>
          <InteractiveSphere />
        </Scene>
      </FrameLayout>
    </>
  );
}

export default App;
