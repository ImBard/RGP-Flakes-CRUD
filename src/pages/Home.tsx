import { gql, useQuery } from "@apollo/client";
import { Character } from "../components/Character";
import { Header } from "../components/Header";

const GET_CHARACTER_QUERY = gql`
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

interface CharacterOne {
    name: string;
    class: string;
    age: string;
    gender: string;
    description: string;
    'health-power': string;
    attack: string;
    defense: string;
    characterId: string;
}


export function Home() {

    const { data } = useQuery<{ characters: CharacterOne[] }>(GET_CHARACTER_QUERY)
    console.log({ data })


    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 items-center justify-center">
                {data?.characters.map(character => {
                    return (
                        <Character
                            key={character.characterId}
                            name={character.name}
                            class={character.class}
                            age={character.age}
                            gender={character.gender}
                            description={character.description}
                            health-power={character["health-power"]}
                            attack={character.attack}
                            defense={character.defense}
                        />
                    )
                })}
            </main>
        </div>
    )
}