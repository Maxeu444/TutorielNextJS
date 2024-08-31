import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react"

const Header = () => {
  return (
    <>
        <Flex p="2rem" direction="column" alignItems="center">
            <Heading fontSize='6x1'  className='tasklist-title'>TodoList.io</Heading>
            <Text mt='1rem' className='tasklist-slogan'>
                Bienvenue sur TodoList.io, votre outil de liste de tâche
            </Text>


        </Flex>
    </>
  )
}

export default Header