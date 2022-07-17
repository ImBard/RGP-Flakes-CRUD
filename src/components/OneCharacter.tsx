import { FormEventHandler } from 'react';
import defaultCharacter from '/src/assets/default-character.png'


interface OneCharacter {
  submit: FormEventHandler<HTMLFormElement> | undefined;
  inputDefense: any;
  inputAttack: any;
  inputHealthPower: any;
  inputName: any;
  inputAge: any;
  inputDescription: any;
  name: string;
  class: string;
  age: string;
  gender: string;
  description: string;
  'health-power': string;
  attack: string;
  defense: string;
}

export function OneCharacter(props: OneCharacter) {

  return (
    <form onSubmit={props.submit} className="flex flex-col items-center justify-center">

      <div className="bg-gray-600 flex  gap-5 justify-center p-4 rounded border border-gray-500 my-10 max-w-lg w-[512px]">
        <div className='flex flex-col'>
          <img
            className='h-40 border border-green-500 rounded mb-4'
            src={defaultCharacter}
            alt=""
          />
          <label htmlFor="" className='flex flex-col'>
            <strong>Health-Power</strong>
            <input type="text"
              className='mb-2 text-blue-600 border-blue-600 max-w-[100px] p-1 border font-normal bg-inherit cursor-pointer focus:cursor-text outline-none focus:border rounded focus:bg-gray-700 placeholder-gray-200'
              placeholder={props['health-power']}
              defaultValue={props['health-power']}
              onChange={e => props.inputHealthPower(e.target.value)}
            />
          </label>
          <label htmlFor="" className='flex flex-col'>
            <strong>Attack</strong>
            <input type="text"
              className='mb-2 text-red-600 max-w-[100px] p-1 border font-normal bg-inherit cursor-pointer focus:cursor-text outline-none focus:border rounded border-red-600 focus:bg-gray-700 placeholder-gray-200'
              placeholder={props.attack}
              defaultValue={props.attack}
              onChange={e => props.inputAttack(e.target.value)}
            />
          </label>
          <label htmlFor="" className='flex flex-col'>
            <strong>Defense</strong>
            <input type="text"
              className='mb-2 text-green-500 max-w-[100px] p-1 border font-normal bg-inherit cursor-pointer focus:cursor-text outline-none focus:border rounded border-green-500 focus:bg-gray-700 placeholder-gray-200'
              placeholder={props.defense}
              defaultValue={props.defense}
              onChange={e => props.inputDefense(e.target.value)}
            />
          </label>

        </div>

        <div className='flex flex-col'>
          <div className='grid grid-cols-2'>
            <span
              className='flex-col flex p-2 font-bold '>Name:
              <input type="text"
                className='max-w-[100px] p-1 border font-normal bg-inherit cursor-pointer focus:cursor-text outline-none focus:border rounded border-gray-500 focus:bg-gray-700 placeholder-gray-200'
                placeholder={props.name}
                defaultValue={props.name}
                onChange={e => props.inputName(e.target.value)}
              />
            </span>
            <span
              className='flex-col flex p-2 font-bold '>Class:
              <input type="text"
                className='max-w-[100px] p-1 border font-normal bg-inherit cursor-default outline-none rounded border-gray-500 placeholder-gray-200'
                placeholder={props.class}
                defaultValue={props.class}
                readOnly
              />
            </span>
            <span
              className='p-2 flex-col flex font-bold '>Age:
              <input type="number"
                className='max-w-[100px] p-1 border font-normal bg-inherit cursor-pointer focus:cursor-text outline-none focus:border rounded border-gray-500 focus:bg-gray-700 placeholder-gray-200'
                placeholder={props.age}
                defaultValue={props.age}
                onChange={e => props.inputAge(e.target.value)}
              />
            </span>
            <span
              className='flex-col flex p-2 font-bold'>Gender:
              <input type="text"
                className='max-w-[100px] p-1 font-normal bg-inherit cursor-default border outline-none rounded border-gray-500 placeholder-gray-200 '
                placeholder={props.gender}
                defaultValue={props.gender}
                readOnly
              />
            </span>
          </div>
          <div className='flex flex-col max-w-sm'>
            <h1 className='max-w-[100px] font-bold text-lg'>Description</h1>
            <textarea
              className=' rounded p-2 text-gray-300 bg-gray-700 resize-none border-gray-600 h-72'
              defaultValue={props.description}
              onChange={e => props.inputDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        className="w-full col-span-2 bg-green-500 uppercase py-3 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 text-center"
        type='submit'
      >
        Update
      </button>
    </form>
  )
}