import Main from '../../components/Main';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Form from '../../components/Form';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import theme from '../../components/Form/theme';

import { useState } from 'react';
import { ThemeProvider, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loadingSignIn, setLoadingSignIn] = useState(false);

    return (
        <Main>
            <Container>
                <Title text={'Entrar'} />
                <ThemeProvider theme={theme}>
                    <Form>
                        <Input
                            label="E-mail"
                            type="text"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            label="Senha"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            color="primary"
                            fullWidth
                            disabled={loadingSignIn}
                            fontWeight="bold"
                        >
                            <Typography style={{ fontWeight: 600 }}>
                                Entrar
                            </Typography>
                        </Button>
                    </Form>
                </ThemeProvider>
                <div
                    style={{
                        width: '100%',
                        margin: 25,
                        height: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <Link to="/sign-up" style={{ fontWeight: 'bold' }}>
                        Não possui login? Inscreva-se
                    </Link>
                    <Link style={{ fontWeight: 'bold' }} to="/recovery">
                        Esqueci minha senha
                    </Link>
                </div>
            </Container>
        </Main>
    );
}
