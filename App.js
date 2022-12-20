import Navbar from './Navbar';
import "./App.css"
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './Movie';
import Home from './Home';
import Cards from './About';
import Contact from './Contact';
import About from './About';
import Watch from './Watch';
import Add from './Add';
function App() {
  const list=[
    {
    Image:'nnnn.png',
    tittle:'DAER GAT',
    discrpt:"Yumeko Jabami s'inscrit dans une académie particulière, où les étudiants sont classés en fonction de leurs gains au jeu. La renommée et la fortune attendent ceux qui grimpent au sommet.",
    types :['Animation' , 'Drama'],
    Actors :['Fad Zaws'],
    },
    {
        Image:'ssss.webp',
    tittle:'RODRIGO MANO',
    discrpt:"Yumeko Jabami s'inscrit dans une académie particulière, où les étudiants sont classés en fonction de leurs gains au jeu. La renommée et la fortune attendent ceux qui grimpent au sommet.",
    types :['Fly' , 'Drama'],
    Actors :['Sami Qgi'],
    },
    {
        Image:'aaaa.jpg',
    tittle:'ONE PIECE', 
    discrpt:"Yumeko Jabami s'inscrit dans une académie particulière, où les étudiants sont classés en fonction de leurs gains au jeu. La renommée et la fortune attendent ceux qui grimpent au sommet.",
    types :['Magie' , 'Sey'],
    Actors :['Imane Gami'],                         
    },
    {
        Image:'WWW.jpg',
        tittle:'PADO HIT',
        discrpt:"Yumeko Jabami s'inscrit dans une académie particulière, où les étudiants sont classés en fonction de leurs gains au jeu. La renommée et la fortune attendent ceux qui grimpent au sommet.",
        types :['Drama' , 'Rmance'],
        Actors :['Rachide Lamo'],

        },
        {
            Image:'ttt.jpg',
        tittle:'YAT MALIO',
        discrpt:"Yumeko Jabami s'inscrit dans une académie particulière, où les étudiants sont classés en fonction de leurs gains au jeu. La renommée et la fortune attendent ceux qui grimpent au sommet.",
        types :['Action' , 'Drama'],
        Actors :['Ramo Fadre'],
        },
        {
            Image:'bbb.jpg',
        tittle:'SPOND GAMO', 
        discrpt:"Yumeko Jabami s'inscrit dans une académie particulière, où les étudiants sont classés en fonction de leurs gains au jeu. La renommée et la fortune attendent ceux qui grimpent au sommet.",
        types :['Animation' , 'Drama'],
        Actors :['Gamie fadro'],
        }, 
        
    ]
  return (
    <div className="App">
     
     

   
    
    
<BrowserRouter>
  <Navbar/>
<Routes>
<Route path= '/' element={<Movie listmovie = {list} />}/>
<Route path= '/About' element={<About/>}/>
<Route path= '/Contact' element={<Contact/>}/>
<Route path= '/Watch' element={<Watch/>}/>
<Route path= '/Add' element={<Add/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
