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

export default function SignUp() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [loadingSignUp, setLoadingSignUp] = useState(false);

    return (
        <Main>
            <Container>
                <Title text={'Cadastre-se'} />
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
                        <Input
                            label="Confirmar senha"
                            type="password"
                            fullWidth
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            color="primary"
                            fullWidth
                            disabled={loadingSignUp}
                            fontWeight="bold"
                        >
                            <Typography style={{ fontWeight: 600 }}>
                                Cadastrar
                            </Typography>
                        </Button>
                    </Form>
                </ThemeProvider>
                <div
                    style={{
                        width: '100%',
                        margin: 50,
                        height: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <Link to="/" style={{ fontWeight: 'bold' }}>
                        Possui login? Entre!
                    </Link>
                    <Link style={{ fontWeight: 'bold' }} to="/recovery">
                        Esqueci minha senha
                    </Link>
                </div>
            </Container>
        </Main>
    );
}
