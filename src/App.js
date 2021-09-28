import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <SignIn />
                </Route>
                <Route path="/sign-up" exact>
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    );
}
