import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <SignIn />
                </Route>
            </Switch>
        </Router>
    );
}
