import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import "../../components/sidebar/Sidebar"

import { CgSearch } from "react-icons/cg";

// Import Images/Logo
import logo from "../../assets/bookshelf.png";
import dilanPhoto from "../../assets/dilan.jpg";
import laskarPelangiPhoto from "../../assets/laskar.jpg";
import uburPhoto from "../../assets/ubur2.png";
import bodoamatPhoto from "../../assets/bersikap.png";
import reactNativePhoto from "../../assets/reactnative.png";
import nikiphoto from "../../assets/niki.png"
import Sidebar from "../../components/sidebar/Sidebar";
import Slidecard from "../slidecard/Slidecard";
import Navbar from "../navbar/Navbar";

const Home = () => {
  // const [allPokemons, setAllPokemons] = useState([]);

  // const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=5";

  // const getAllPokemons = async () => {
  //   const res = await fetch(BASE_URL);
  //   const data = await res.json();

  //   const pokemonObject = (poke) => {
  //     poke.forEach(async (pokemon) => {
  //       const res = await fetch(
  //         `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
  //       );
  //       const data = await res.json();

  //       setAllPokemons(listPokemon => [...listPokemon, data]);
      
  //       // allPokemons.push(data)
  //     });
  //   }
  //   pokemonObject(data.results);

  //   await console.log(allPokemons);
  // };

  // useEffect(() => {
  //   getAllPokemons();
  // }, []);

  return (
    <div className="allbar">
      <Sidebar/>
      <Navbar/>
      <Slidecard/>
    </div>
    // <div className="container-home">
    //   <div className="header-menu">
    //     <nav>
    //       <div className="all">
    //         <p>All Categories</p>
    //         <p>All Time</p>
    //       </div>
    //       <div className="search">
    //         <div className="box-search">
    //           {/* <span className="material-symbols-outlined"> search </span> */}
    //           <div className="search-icon">
    //             <CgSearch />
    //           </div>
    //           <input type="search" className="btn-search" />
    //         </div>
    //       </div>
    //       <div className="logo">
    //         <img src={logo} alt="" />
    //         <h4>Library</h4>
    //       </div>
    //     </nav>
    //   </div>
    //   {/*
    //   </div>  */}
    //   <div className="content-slider">
    //     <div className="book-slider">
    //       {/* {pokemons.map((value, index) => (
    //         <div key={index} className="book-card">
    //           <img src={dilanPhoto} alt="" className="photo-cover" />
    //           <div className="text-card">
    //             <h4>{value.name}</h4>
    //             <p>Pidi Baiq</p>
    //           </div>
    //         </div>
    //       ))} */}
    //       {/* {allPokemons.map((datas, index) => {
    //         return (
    //           <div key={index} className="book-card">
    //             <img
    //               src={datas.sprites.other.dream_world.front_default}
    //               alt=""
    //               className="photo-cover"
    //             />
    //             <div className="text-card">
    //               <h4>{datas.name}</h4>
    //               <p>Pidi Baiq</p>
    //             </div>
    //           </div>
    //         );
    //       })} */}
    //       <div className="book-card">
    //         <img src={dilanPhoto} alt="" className="photo-cover" />
    //         <div className="text-card">
    //           <h4>Dilan 1990</h4>
    //           <p>Pidi Baiq</p>
    //         </div>
    //       </div>
    //       <div className="book-card">
    //         <img src={uburPhoto} alt="" className="photo-cover" />
    //         <div className="text-card">
    //           <h4>Ubur-Ubur Lembur</h4>
    //           <p>Raditya Dika</p>
    //         </div>
    //       </div>
    //       <div className="book-card">
    //         <img src={laskarPelangiPhoto} alt="" className="photo-cover" />
    //         <div className="text-card">
    //           <h4>Laskar Pelangi</h4>
    //           <p>Andrea Hirata</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="list-book">
    //     <h3>List Book</h3>
    //     <div className="listbook-content">
    //       <div className="card-listbook">
    //         <img
    //           src={dilanPhoto}
    //           alt=""
    //           className="card-image"
    //           id="dilan-list"
    //         />
    //         <div className="text-listbook">
    //           <h4>Dilan 1990</h4>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    //         </div>
    //       </div>
    //       <div className="card-listbook">
    //         <img src={bodoamatPhoto} alt="" className="card-image" />
    //         <div className="text-listbook">
    //           <h4>Sebuah Seni Untuk Bersikap Bodo Amat</h4>
    //           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    //         </div>
    //       </div>
    //       <div className="card-listbook">
    //         <img src={reactNativePhoto} alt="" className="card-image" />
    //         <div className="text-listbook">
    //           <h4>React Native</h4>
    //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    
  );
};

export default Home;
