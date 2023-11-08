import { VStack, Divider, ScrollView } from 'native-base'
import { CardConsulta } from '../componentes/CardConsulta'
import { Titulo } from '../componentes/Titulo'
import { Botao } from '../componentes/Botao'

export default function Consultas(){
    return(
        <ScrollView p="5">
            <Titulo color="blue.500">Minhas consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
            <CardConsulta 
                nome='Dr. Antonio Tomita'
                especialidade='Engenheiro'
                foto='https://avatars.githubusercontent.com/u/51826898?s=400&u=cb5ca44b6446c96eb7c6217d7ab68a155e50b0c2&v=4'
                data='20/03/2023'
                foiAgendado
            />

            <Divider mt={5}/>

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
            <CardConsulta 
                nome='Dr. Antonio Tomita'
                especialidade='Engenheiro'
                foto='https://avatars.githubusercontent.com/u/51826898?s=400&u=cb5ca44b6446c96eb7c6217d7ab68a155e50b0c2&v=4'
                data='20/03/2023'
                foiAtendido
            />
            <CardConsulta 
                nome='Dra. Carol Gonzalez'
                especialidade='Médica'
                foto='https://avatars.githubusercontent.com/u/51826898?s=400&u=cb5ca44b6446c96eb7c6217d7ab68a155e50b0c2&v=4'
                data='20/04/2023'
                foiAtendido
            />
            <CardConsulta 
                nome='Dra. Allyne Miatelli'
                especialidade='Psicóloga'
                foto='https://avatars.githubusercontent.com/u/51826898?s=400&u=cb5ca44b6446c96eb7c6217d7ab68a155e50b0c2&v=4'
                data='20/05/2023'
                foiAtendido
            />

        </ScrollView>
    )
}