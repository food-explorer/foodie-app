import { Image } from '@chakra-ui/image';
import {
  Box,
  Heading,
  Link as ChakraLink,
} from '@chakra-ui/layout';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/reducers/authReducer';

type GoogleResponse = GoogleLoginResponse | GoogleLoginResponseOffline;

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = (response: GoogleResponse) => {
    console.log(response);
    dispatch(loginSuccess({
      email: 'tunde@mail.com',
      image: 'https://',
      location: 'erne',
      name: 'Tunde Nasri',
      token: 'eirer',
    }));
    router.push('/posts');
  };

  return (
    <Box w="100%" d="flex" height="100vh">
      <Box w={{ base: '100%', xl: '50%' }}>
        <Box mt="40" mx="auto" w="60%">
          <Heading color="brand.400" size="lg">
            <ChakraLink as={Link} href="/">Foodie</ChakraLink>
          </Heading>
          <Heading size="md" mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec elementum purus eget massa tristique tincidunt.
            Etiam fermentum viverra urna, feugiat tristique leo hendrerit
          </Heading>
          <Box
            mt={8}
          >
            <GoogleLogin
              clientId="209004910483-n4m0ksth3jghbudtq9kleb1uhh5i9u9o.apps.googleusercontent.com"
              onSuccess={handleLogin}
              onFailure={handleLogin}
            />
          </Box>
        </Box>
      </Box>
      <Box w="50%" display={{ base: 'none', xl: 'block' }}>
        <Image
          src="/login-food-image.svg"
          alt="Login Page Image"
          boxSize="100%"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default Login;
