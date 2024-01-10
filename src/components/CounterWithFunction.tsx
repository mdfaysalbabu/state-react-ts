import ChildFunction from "./childComponent";


type TProps={
  count:number;
  setCount:React.Dispatch<React.SetStateAction<number>>
}

const CounterWithFunction = ({count,setCount}: TProps) => {
 
  return (
    <div className="border border-red-500 p-10 m-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-20"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click For Update
      </button>
      <ChildFunction count={count} />
    </div>
  );
};
export default CounterWithFunction;
