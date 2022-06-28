import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import classNames from 'classnames'

const CREATE_CHARACTER_MUTATION = gql`
mutation ($name: String!, $class: String!, $age: String!, $healtPower: String!, $attack: String!, $defense: String!, $description: String!, $characterId: String!, $gender: String!) {
  createCharacter(
    data: {name: $name, class: $class, age: $age, healthPower: $healtPower, attack: $attack, defense: $defense, description: $description characterId: $characterId, gender: $gender}
  ) {
    id
  }
}
`

const PUBLISH_CHARACTER_MUTATION = gql`
mutation MyMutation ($characterId: String!) {
  publishCharacter(where: {characterId: $characterId}) {
    id
  }
}
`

export function Create() {

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [age, setAge] = useState('');
  const [hp, setHp] = useState('');
  const [attack, setAttack] = useState('');
  const [defense, setDefense] = useState('');
  const [gender, setGender] = useState('');
  const [histoty, setHistory] = useState('');
  const [characterId, setCharacterId] = useState('');

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate()

  const [createCharacter, { loading }] = useMutation(CREATE_CHARACTER_MUTATION)
  const [publishCharacter] = useMutation(PUBLISH_CHARACTER_MUTATION)


  async function handleCharacter(event: FormEvent) {
    event.preventDefault();
    await createCharacter({
      variables: {
        name: name,
        class: type,
        age: age,
        healtPower: hp,
        attack: attack,
        defense: defense,
        description: histoty,
        characterId: characterId,
        gender: gender
      }
    })
    
    if (!loading) {
      await publishCharacter({
        variables: {
          characterId
        }
      })
    }

    navigate('/home')
  }

  return (
    <div id="teste"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl text-white">
        Create your character
      </h1>

      <form onSubmit={handleCharacter} className="w-96 max-w-sm flex flex-col gap-8 mt-8 p-6 bg-gray-700 rounded border border-gray-600">
        <input type="text" placeholder="Name" onChange={event => setName(event.target.value)} className="p-2 bg-gray-900 rounded hover:bg-gray-600 " />
        <select
          className="p-2 bg-gray-900 rounded hover:bg-gray-600"
          name=""
          id=""
          onChange={event => setType(event.target.value)}
        >
          <option selected>Select a class</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Thunder">Thunder</option>
          <option value="Grass">Grass</option>
          <option value="Rock">Rock</option>
          <option value="Poison">Poison</option>
          <option value="Bard">Bard</option>
          <option value="Vampire">Vampire</option>
          <option value="Dragon">Dragon</option>
        </select>
        <input type="text" placeholder="Age" onChange={event => setAge(event.target.value)} className="p-2 bg-gray-900 rounded hover:bg-gray-600 " />
        <input type="text" placeholder="HP" onChange={event => setHp(event.target.value)} className="p-2 bg-gray-900 rounded hover:bg-gray-600 " />
        <input type="text" placeholder="Attack" onChange={event => setAttack(event.target.value)} className="p-2 bg-gray-900 rounded hover:bg-gray-600 " />
        <input type="text" placeholder="Defense" onChange={event => setDefense(event.target.value)} className="p-2 bg-gray-900 rounded hover:bg-gray-600 " />
        <div className="flex justify-around">
          <div className="flex items-center text-xl text-gray-200 hover:text-blue-500">
            <label className="flex gap-2 items-center font-bold">
              <input type="radio" name="gender" value={"male"} onChange={event => setGender(event.target.value)} id="male" />
              Male
            </label>
          </div>

          <div className="flex items-center gap-2 text-xl text-gray-200 hover:text-pink-500">
            <label className="flex gap-2 items-center font-bold">
              <input type="radio" name="gender" value={"female"} onChange={event => setGender(event.target.value)} id="female" />
              Female
            </label>
          </div>

          <div className="flex items-center gap-2 text-xl text-gray-200 hover:text-green-600">
            <label className="flex gap-2 items-center font-bold">
              <input type="radio" name="gender" value={"undefined"} onChange={event => setGender(event.target.value)} id="undefined" />
              Undefined
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="history" className="font-bold flex flex-col gap-2">History
            <textarea name="" id="history" onChange={event => setHistory(event.target.value)} className="p-2 appearance-none outline-none overflow-hidden rounded resize-none h-16 bg-gray-900 text-gray-200 leading-relaxed" />
          </label>
        </div>

        <button
          className="mt-4 bg-green-500 uppercase py-3 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
          onClick={event => setShowModal(true)}
          type="button"
        >
          Create
        </button>

        <div
          className={classNames("flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 max-w-sm p-4 gap-4 rounded border border-gray-600 bg-gray-700 z-50", {
            "hidden": !showModal,
            "flex": showModal
          })}
        >
          <label htmlFor="" className="flex flex-col gap-2">
            Character Id
            <input type="text" onChange={event => setCharacterId(event.target.value)} className="p-2 bg-gray-900 rounded hover:bg-gray-600 " />
          </label>
          <div className="flex justify-between">
            <button
              className="mt-4 w-32 bg-red-800 uppercase p-3 rounded font-bold text-sm hover:bg-red-900 transition-colors disabled:opacity-50"
              onClick={event => setShowModal(!showModal)}
              type="button"
            >
              Back
            </button>

            <button
              className="mt-4 w-32 bg-green-500 uppercase p-3 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
            >
              Create
            </button>
          </div>
        </div>
      </form >
      <div className={classNames("min-h-screen min-w-full absolute bg-opacity-40 bg-gray-500", {
        "hidden": !showModal
      })}>
      </div>

    </div >
  )
}