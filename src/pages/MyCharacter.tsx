import { gql, useQuery } from "@apollo/client";
import { ArrowLeft, Warning } from "phosphor-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Character } from "../components/Character";
import { Header } from "../components/Header";
import { OneCharacter } from "../components/OneCharacter";

const GET_MY_CHARACTER_QUERY = gql`
query MyQuery ($characterId: String) {
  character(where: {characterId: $characterId}) {
    age
    attack
    characterId
    class
    defense
    description
    gender
    healthPower
    name
  }
}
`

interface Character {
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


export function MyCharacter() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate();

  const { data } = useQuery<{ character: Character }>(GET_MY_CHARACTER_QUERY, {
    variables: {
      characterId: slug
    }
  })

  console.log(data)
  function goHome() {
    navigate("/home")
  }
  if (data != undefined) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header onclick={goHome} />
        <main className="flex flex-col items-center justify-center m-auto">
          <OneCharacter
            name={data.character.name}
            class={data.character.class}
            age={data.character.age}
            gender={data.character.gender}
            description={data.character.description}
            health-power={data.character.healthPower}
            attack={data.character.attack}
            defense={data.character.defense}
          />
        </main>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col min-h-screen">
        <Header onclick={goHome} />
        <main className="flex flex-col items-center justify-center m-auto">
          <div className="flex gap-2 bg-amber-500 p-5 rounded border-amber-700 text-gray-700 font-bold items-center">
            <Warning size={24} />
            Houve um erro ao retornar o character
            <Link to={"/home"} className="bg-gray-600 rounded text-gray-200 p-2">
              <ArrowLeft size={24} />
            </Link>
          </div>
        </main>
      </div>
    )
  }

}