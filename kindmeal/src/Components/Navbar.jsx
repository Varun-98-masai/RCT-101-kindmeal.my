import { ReactNode } from 'react';

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';

const FbBtn={
    width: "80px",
    height: "20px",
    lineHeight: "20px",
    padding: "1px 2px 1px 2px",
    backgroundColor: "#35619f",
    fontWeight: "bold",
    fontSize: "13px",
    textAlign: "center",
    borderRadius: "5px",
    color: "#ffffff",
  }
  const EmailBtn={
    width: "80px",
    height: "20px",
    lineHeight: "20px",
    padding: "1px 2px 1px 2px",
    backgroundColor: "grey",
    fontWeight: "bold",
    fontSize: "13px",
    textAlign: "center",
    borderRadius: "5px",
    color: "#ffffff",
  }

const Navbar = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={"white"} px={4} padding={"10px 140px 20px 140px"} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} textAlign={'center'} >
          <Box><img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="logo" /></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
                <Link>Login</Link>
                <Button  className="FacebookBtn" style={FbBtn}>Facebook</Button>
                <Button  className="EmailBtn" style={EmailBtn} >Email</Button>
            
            
              <Link>Sign Up</Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}