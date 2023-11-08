import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>
                <Avatar size="xl" source={{uri: "https://avatars.githubusercontent.com/u/51826898?s=400&u=cb5ca44b6446c96eb7c6217d7ab68a155e50b0c2&v=4"}} mt={5}/>

                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Antonio Tomita</Titulo>
                <Text>30/09/1984</Text>
                <Text>São Paulo</Text>

                <Divider mt={5}/>

                <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
                <Text>Diabetes</Text>
                <Text>Asma</Text>

            </VStack>
        </ScrollView>
    )
}