import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
// Una Twitter Card tiene 4 elementos importantes
// Foto, Nombre, userName y Boton de "seguir"
const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'phreald',
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    {
        userName: 'barboza.elias19',
        name: 'Elias E. Barboza',
        isFollowing: false
    },
    {
        userName: 'phreald',
        name: 'Pablo Hernandez',
        isFollowing: false
    }
]

export function App() {

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing}) => (
                    <TwitterFollowCard 
                    userName={userName} 
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}
