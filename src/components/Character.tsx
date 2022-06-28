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
    <div className="bg-gray-600 flex  gap-5 justify-center p-4 rounded border border-gray-500">
      <div className='flex flex-col'>
        <img
          className='h-40 border border-gray-300 rounded mb-4'
          src={defaultCharacter}
          alt=""
        />
        <strong>Health-Power</strong>
        <span className='mb-2'>{props['health-power']}</span>
        <strong>Attack</strong>
        <span className='mb-2'>{props.attack}</span>
        <strong>Defense</strong>
        <span className='mb-2'>{props.defense}</span>

      </div>

      <div className='flex flex-col'>
        <div className='grid grid-cols-2'>
          <span className='p-2 '>Name: <strong>{props.name}</strong></span>
          <span className='p-2 mb-2'>Class: <strong>{props.class}</strong></span>
          <span className='p-2 mb-2'>Age: <strong>{props.age}</strong></span>
          <span className='p-2 mb-2'>Gender: <strong>{props.gender}</strong></span>
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