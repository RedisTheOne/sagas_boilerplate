import React from 'react'
import './App.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Posts from './components/Posts'
import PostsForm from './components/PostsForm'

function App() {
  return (
    <Provider store={store}>
      <PostsForm />
      <Posts />
    </Provider>
  );
}

export default App
