import { Button } from "./components/Button";
import "./styles/global.css";

export function App() {
  return (
    <>
      <h1 className="font-bold text-lg text-violet-500">hi</h1>
      <button className="bg-cyan-500 font-medium px-4 py-3 rounded text-white hover:bg-cyan-300">
        test
      </button>
      <Button>test</Button>
    </>
  );
}
