import { Image } from '@chakra-ui/image';
import {
  Box,
  Heading,
  Link as ChakraLink,
} from '@chakra-ui/layout';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import axios from 'axios';
import { loginSuccess } from '../store/reducers/authReducer';
import { useAppDispatch } from '../store';

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = async (googleData: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('tokenId' in googleData) {
      const userData = await axios.post(`${process.env.base_api_url}/auth/google`, { token: googleData.tokenId });
      const {
        email, name, token, image,
      } = userData.data.data;
      dispatch(loginSuccess({
        email,
        image,
        name,
        token,
        location: 'erne',
      }));
      router.push('/posts');
    }
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
              clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENTID as string}
              onSuccess={handleLogin}
              onFailure={handleLogin}
              accessType="online"
              responseType="id_token"
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
