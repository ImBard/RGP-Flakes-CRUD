import { gql, useQuery } from "@apollo/client";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Character } from "../components/Character";
import { Header } from "../components/Header";

const GET_CHARACTERS_QUERY = gql`
  query {
    characters {
      name
      class
      age
      gender
      description
      healthPower
      attack
      defense
      characterId
    }
  }
`
// const GET_ONE_CHARACTER_QUERY = gql`
//   query ($characterId: String!) {
//     character(where: {characterId: $characterId}) {
//       age
//       attack
//       class
//       characterId
//       defense
//       description
//       gender
//       healthPower
//       name
//     }
// }
// `


interface Characters {
  name: string;
  class: string;
  age: string;
  gender: string;
  description: string;
  healthPower: string;
  attack: string;
  defense: string;
  characterId: string;
}

// interface OneCharacter {
//   name: string;
//   class: string;
//   age: string;
//   gender: string;
//   description: string;
//   'health-power': string;
//   attack: string;
//   defense: string;
//   characterId: string;
// }


export function Home() {

  const [list, setList] = useState(true);

  const [searchId, setSearchId] = useState('');

  const { data } = useQuery<{ characters: Characters[] }>(GET_CHARACTERS_QUERY)

  // const { data: char } = useQuery<{ character: OneCharacter }>(GET_ONE_CHARACTER_QUERY, {
  //   variables: {
  //     characterId: searchId
  //   }
  // })

  const navigate = useNavigate()

  function goCreate() {
    navigate("/")
  }

  const search = () => setList(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onclick={goCreate} />
      <main className="flex flex-1 flex-col items-center justify-center">
        <label htmlFor="search" className="flex my-10 gap-4 items-center bg-gray-600 p-2 rounded ">
          <button
            onClick={search}
            className="p-2"
            type="submit"
          >
            <MagnifyingGlass size={24} />
          </button>

          <input type="text" id="search" placeholder="Search a character" onChange={event => setSearchId(event.target.value)} className="p-2 bg-gray-900 border border-gray-400 rounded hover:bg-gray-600 max-w-sm w-96" />
        </label>
        {/* =========== SÓ ESTÁ BUSCANDO NOVOS PERSONAGENS QUANDO ATUALIZA A TELA(F5) */}
        {
          data?.characters.map(character => {
            if (character.name.match(searchId) || character.characterId.match(searchId)) {
              return (
                <Link to={`/MyCharacter/${character.characterId}`}>
                  <Character
                    key={character.characterId}
                    name={character.name}
                    class={character.class}
                    age={character.age}
                    gender={character.gender}
                    description={character.description}
                    health-power={character.healthPower}
                    attack={character.attack}
                    defense={character.defense}
                  />
                </Link>
              )
            }
          })}
      </main>
    </div>
  )
}