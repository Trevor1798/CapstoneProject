import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Nav/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import SplashPage from './components/SplashPage/SplashPage';
import ExplorePage from './components/Explore/ExplorePage';
import CreateImage from './components/Image/CreateImage';
import EditImage from './components/Image/EditImage';
import ImageDetails from './components/Image/ImageDetails';
import UserFaves from './components/Likes/UserFaves';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();

  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} >
          <SplashPage/>
        </Route>
        <Route path='/login' exact={true}>
          <NavBar />
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <NavBar />
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <NavBar />
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <NavBar />
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/explore' exact={true}>
          <NavBar />
          <ExplorePage/>
        </ProtectedRoute>
        <ProtectedRoute path='/images/upload' exact={true}>
          <NavBar />
          <CreateImage/>
        </ProtectedRoute>
        <Route path='/images/:imageId' exact={true}>
          <NavBar />
          <ImageDetails/>
        </Route>
        <Route path='/you/:username/favorites' exact={true}>
          <NavBar />
          <UserFaves/>
        </Route>
        <ProtectedRoute path='/images/:imageId/edit' exact={true}>
          <NavBar />
          <EditImage/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
