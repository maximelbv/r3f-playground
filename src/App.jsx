import FrameLayout from "./Layouts/FrameLayout/FrameLayout";
import InteractiveSphere from "./components/InteractiveSphere/InteractiveSphere";
import TorusKnot from "./components/TorusKnot/TorusKnot";

function App() {
  return (
    <>
      <FrameLayout>
        <InteractiveSphere />
      </FrameLayout>
    </>
  );
}

export default App;
