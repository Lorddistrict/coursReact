import React, {useState} from 'react';
import Theme from "../../Theme";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/userAction";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  z-index: 10;
`;
const Box = styled.div`
  background-color: ${props => `${props.theme.colors.discordGrey}`};
  padding: 40px 60px;
  box-shadow: 2px 2px 10px ${props => `${props.theme.colors.discordBlack}`};
  border-radius: 5px;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.span`
  color: ${props => `${props.theme.colors.discordSimiliWhite}`};
  font: normal 30px/30px Arial, sans-serif;
  margin-bottom: 15px;
`;
const SubTitle = styled.span`
  color: ${props => `${props.theme.colors.discordChatBox}`};
  font: normal 18px/18px Arial, sans-serif;
  margin-bottom: 40px;
`;
const BodyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const InputName = styled.span`
  color: ${props => `${props.theme.colors.discordSimiliWhite}`};
  font: bold 13px/16px Arial, sans-serif;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const Input = styled.input`
  background-color: ${props => `${props.theme.colors.discordDarkGrey}`};
  border-radius: 3px;
  border: 1px solid ${props => `${props.theme.colors.discordDarkDarkGrey}`};
  width: 300px;
  padding: 10px 10px;
  margin-bottom: 20px;
  color: ${props => `${props.theme.colors.discordSimiliWhite}`};
`;
const Button = styled.button`
  background-color: ${props => `${props.theme.colors.discordBlue}`};
  border: 1px solid transparent;
  border-radius: 3px;
  color: ${props => `${props.theme.colors.discordWhite}`};
  width: 320px;
  padding: 10px 10px;
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
`;
const Link = styled.a`
  color: ${props => `${props.theme.colors.discordBlue}`};
  font: bold 13px/16px Arial, sans-serif;
  text-decoration: none;
  margin-top: 5px;
`;

const LoginBox = () => {

    const dispatch = useDispatch();
    const [user, setUser] = useState({ email: '', username: '' });

    const handleSendUser = () => {
        if (user.email !== '' && user.username !== '') {
            dispatch(loginUser(user));
        }
    };

    const handleTypingEmail = (event) => {
        let newUser = {
            email: event.target.value,
            username: user.username === undefined ? '' : user.username,
        };
        setUser(newUser);
    };

    const handleTypingUsername = (event) => {
        let newUser = {
            email: user.email === undefined ? '' : user.email,
            username: event.target.value,
        };
        setUser(newUser);
    };

    const handlePressingEnter = (event) => {
        if (event.key === 'Enter') {
            handleSendUser();
        }
    };

    return (
        <Theme>
            <Container>
                <Box>
                    <HeaderContainer>
                        <Title>Welcome back!</Title>
                        <SubTitle>We're so excited to see you again!</SubTitle>
                    </HeaderContainer>
                    <BodyContainer>
                        <InputName>Email</InputName>
                        <Input
                            onChange={ handleTypingEmail }
                            onKeyPress={ handlePressingEnter }
                            type="text"
                            name="email"
                            value={ user.email === undefined ? '' : user.email }
                        />
                        <InputName>Username</InputName>
                        <Input
                            onChange={ handleTypingUsername }
                            onKeyPress={ handlePressingEnter }
                            type="text"
                            name="username"
                            value={ user.username === undefined ? '' : user.username }
                        />
                        <Button onClick={ handleSendUser }>Login</Button>
                    </BodyContainer>
                    <LinkContainer>
                        <Link href="#">Forgot your password?</Link>
                        <Link href="#">Register an account</Link>
                    </LinkContainer>
                </Box>
            </Container>
        </Theme>
    );
};

export default LoginBox;