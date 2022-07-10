import { gql, useMutation, useQuery } from "@apollo/client";
import { ArrowLeft, Warning } from "phosphor-react";
import { FormEvent, useState } from "react";
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

const UPDATE_CHARACTER_MUTATION = gql`
mutation ($name: String, $age: String, $description: String, $attack: String, $defense: String, $healthPower: String, $characterId: String) {
  updateCharacter(
    data: {age: $age, attack: $attack, defense: $defense, description: $description, healthPower: $healthPower, name: $name}
    where: {characterId: $characterId}
  ) {
    age
    attack
    defense
    description
    healthPower
    name
  }
  publishCharacter(where: {characterId: $characterId}) {
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
  const [newName, setNewName] = useState<{ name: Character }>();
  const [newAge, setNewAge] = useState<{ age: Character }>();
  const [newAttack, setNewAttack] = useState<{ attack: Character }>();
  const [newDefense, setNewDefense] = useState<{ defense: Character }>();
  const [newHealthPower, setNewHealthPower] = useState<{ healthPower: Character }>();
  const [newDescription, setNewDescrition] = useState<{ description: Character }>();

  const { data } = useQuery<{ character: Character }>(GET_MY_CHARACTER_QUERY, {
    variables: {
      characterId: slug
    }
  })


  const [updateCharacter, { loading }] = useMutation(UPDATE_CHARACTER_MUTATION)

  async function handleUpdate(event: FormEvent) {
    event.preventDefault();
    await updateCharacter({
      variables: {
        name: newName,
        age: newAge,
        healtPower: newHealthPower,
        attack: newAttack,
        defense: newDefense,
        description: newDescription,
        characterId: slug
      }
    }).then((response) => {
      console.log(response)
    })
  }
  function goHome() {
    navigate("/home")
  }
  // console.table([newAge, newName, newAttack, newDefense, newDescription, newHealthPower])
  if (data != undefined) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header link={"/home"} />
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
            inputName={setNewName}
            inputAge={setNewAge}
            inputDescription={setNewDescrition}
            inputAttack={setNewAttack}
            inputDefense={setNewDefense}
            inputHealthPower={setNewHealthPower}
            submit={handleUpdate}
          />
        </main>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col min-h-screen">
        <Header link={"/home"} />
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
