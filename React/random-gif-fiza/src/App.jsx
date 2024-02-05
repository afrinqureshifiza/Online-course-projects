import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return(
    <div className="w-full h-full flex flex-col background ">
      <h1 className="bg-white font-bold rounded-lg text-center mx-auto w-11/12 my-10 text-4xl py-2">RANDOM GIFS</h1> 

      <div className="flex flex-col items-center gap-y-10">
        <Random></Random>
        <Tag></Tag>
      </div>

    </div>
  )
}
