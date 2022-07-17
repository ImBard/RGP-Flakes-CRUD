import { LinearProgress } from "@mui/material";
import defaultCharacter from '/src/assets/default-character.png'



export function LoadingCharacter() {

  return (
    <div className="flex flex-col items-center justify-center">

      <div className="bg-gray-600 flex  gap-5 justify-center p-4 rounded border border-gray-500 my-10 max-w-lg w-[512px]">
        <div className='flex flex-col'>
          <img
            className='h-40 border border-green-500 rounded mb-4'
            src={defaultCharacter}
            alt=""
          />
          <label htmlFor="" className='flex flex-col'>
            <strong>Health-Power</strong>
            <LinearProgress style={{width: "100px", height: "10px", borderRadius: "5px"}} color={'inherit'}  />
          </label>
          <label htmlFor="" className='flex flex-col'>
            <strong>Attack</strong>
            <LinearProgress style={{width: "100px", height: "10px", borderRadius: "5px"}} color={'inherit'}  />
          </label>
          <label htmlFor="" className='flex flex-col'>
            <strong>Defense</strong>
            <LinearProgress style={{width: "100px", height: "10px", borderRadius: "5px"}} color={'inherit'}  />
          </label>

        </div>

        <div className='flex flex-col'>
          <div className='grid grid-cols-2'>
            <span
              className='flex-col flex p-2 font-bold '>Name:
              <LinearProgress style={{width: "100px", height: "10px", borderRadius: "5px"}} color={'inherit'}  />
            </span>
            <span
              className='flex-col flex p-2 font-bold '>Class:
              <LinearProgress style={{width: "100px", height: "10px", borderRadius: "5px"}} color={'inherit'}  />
            </span>
            <span
              className='p-2 flex-col flex font-bold '>Age:
              <LinearProgress style={{width: "100px", height: "10px", borderRadius: "5px"}} color={'inherit'}  />
            </span>
            <span
              className='flex-col flex p-2 font-bold'>Gender:
              <LinearProgress style={{width: "100px", height: "10px", borderRadius: "5px"}} color={'inherit'}  />
            </span>
          </div>
          <div className='flex flex-col max-w-sm'>
            <h1 className='max-w-[100px] font-bold text-lg'>Description</h1>
            <LinearProgress style={{width: "100%", height: "100px", borderRadius: "5px"}} color={'inherit'}  />
          </div>
        </div>
      </div>
      <button
        className="w-full col-span-2 bg-green-500 uppercase py-3 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 text-center"
        disabled
      >
        Update
      </button>
    </div>
  )
}