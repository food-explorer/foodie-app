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
import { useCookies } from 'react-cookie';
import { useAuth } from '../context/auth-context';

const Login = () => {
  const router = useRouter();
  const { loginUser } = useAuth();
  const [, setCookie] = useCookies(['jwt_token']);

  const handleLogin = async (googleData: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('tokenId' in googleData) {
      const userData = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google`,
        { token: googleData.tokenId });
      const {
        name, token, image, username,
      } = userData.data.data;
      // save to cookie
      loginUser({ name, image, username });
      setCookie('jwt_token', token);

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
              clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
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
