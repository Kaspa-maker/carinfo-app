import React from 'react';
import AddList from './components/addList';
import AddForm from './components/addForm';
import './App.css';

function App() {
  const testPosts = [
    { id: 1,
      title: 'Rx7 for sale',
      link: 'https://www.adverts.ie/car/mazda/rx7/mazda-rx7-for-sale/683958',
      shortdescription: 'Selling a clean rx7 more details in the link',
      carbrand: 'Mazda',
      author: 'Kasper Gutek',
  },
  ]
  return (
    <div className="jumbotron">
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-6 offset-3">
            <h1><a href="/">Car deal online</a></h1>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4 ">
            <AddForm />
        </div>
        <div className="col-md-8">
            <AddList posts={testPosts} />
            </div>
        </div>    
        </div>    
        </div>    
    );
}

export default App;
