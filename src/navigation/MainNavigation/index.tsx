import React, { Suspense, lazy } from 'react';
import MyAppBar from '@/layout/MyAppBar';
import { Container } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));
const Profile = lazy(() => import('@/pages/Profile'));

export default function MainNavigation() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <MyAppBar />
        <Container>
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/profile" exact>
                <Profile />
              </Route>
            </Switch>
          </Suspense>
        </Container>
      </AnimatePresence>
    </BrowserRouter>
  );
}
