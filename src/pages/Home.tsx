import { gql, useQuery } from "@apollo/client";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Character } from "../components/Character";
import { Header } from "../components/Header";
import { client } from "../lib/apollo";

const GET_CHARACTERS_QUERY = gql`
  query {
    characters(first: 100) {
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

export function Home() {

  const [list, setList] = useState(true);

  const [searchId, setSearchId] = useState('');

  const { data } = useQuery<{ characters: Characters[] }>(GET_CHARACTERS_QUERY)

  client.refetchQueries({
    include: [GET_CHARACTERS_QUERY],
  });


  return (
    <div className="flex flex-col min-h-screen">
      <Header link={"/"} />
      <main className="flex flex-1 flex-col items-center justify-center">
        <label htmlFor="search" className="flex my-10 gap-4 items-center bg-gray-600 p-2 rounded ">
            <MagnifyingGlass size={24} style={{margin: '8px'}} />
          <input type="text" id="search" placeholder="Search a character" onChange={event => setSearchId(event.target.value)} className="p-2 bg-gray-900 border border-gray-400 rounded hover:bg-gray-600 max-w-sm w-96" />
        </label>
        {/* =========== SÓ ESTÁ BUSCANDO NOVOS PERSONAGENS QUANDO ATUALIZA A TELA(F5) */}
        {
          data?.characters.map(character => {
            if (character.name.toLowerCase().match(searchId) || character.name.match(searchId) || character.characterId.match(searchId)) {
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