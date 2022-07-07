import { gql, useQuery } from '@apollo/client';
import defaultCharacter from '/src/assets/default-character.png'



interface GetCharacter {
  name: string;
  class: string;
  age: string;
  gender: string;
  description: string;
  'health-power': string;
  attack: string;
  defense: string;
}

export function Character(props: GetCharacter) {

  return (
    <div className="bg-gray-600 flex  gap-5 justify-center p-4 rounded border border-gray-500 my-10 max-w-lg w-[512px] active:bg-gray-700 transition-colors">
      <div className='flex flex-col'>
        <img
          className='h-40 border border-myGreen-900 rounded mb-4'
          src={defaultCharacter}
          alt=""
        />
        <strong>Health-Power</strong>
        <span className='mb-2 text-blue-600'>{props['health-power']}</span>
        <strong>Attack</strong>
        <span className='mb-2 text-red-600'>{props.attack}</span>
        <strong>Defense</strong>
        <span className='mb-2 text-myGreen-900'>{props.defense}</span>

      </div>

      <div className='flex flex-col'>
        <div className='grid grid-cols-2'>
          <span className='p-2 font-bold'>Name: <span className='font-normal'>{props.name}</span></span>
          <span className='p-2 font-bold'>Class: <span className='font-normal'>{props.class}</span></span>
          <span className='p-2 font-bold'>Age: <span className='font-normal'>{props.age}</span></span>
          <span className='p-2 font-bold'>Gender: <span className='font-normal'>{props.gender}</span></span>
        </div>
        <div className='flex flex-col max-w-sm'>
          <h1 className='font-bold text-lg'>Description</h1>
          <span className=' rounded p-2 text-gray-300 bg-gray-700'>
            {props.description}
          </span>
        </div>
      </div>
    </div>
  )
}