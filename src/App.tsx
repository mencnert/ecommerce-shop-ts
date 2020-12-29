import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase";

// pages
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// components
import Header from "./components/header/header.component";
// firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// redux
import { setCurrentUser } from "./redux/user/user.actions";
// styles
import "./App.css";

type Props = {
  setCurrentUser: (user: any) => void;
};

type State = {
  currentUser: any;
};

class App extends React.Component<Props, State> {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        if (userRef) {
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        }
      } else {
        setCurrentUser({
          currentUser: user,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route path={"/signin"} component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
