import React from "react";
import Navbar from "./Navbar";
import "./dashboard.css";
import Gambar1 from "./placeimg_640_640_tech (1).jpg";
import react from "../logo.svg";
import HtmlCss from "./html&css.png";
import php from "./php.svg";
import laravel from "./laravel.png";
import pemandangan from "./pemandangan.jpg";
import mysql from "./mysql.png";
import js from "./js.png";
import pp from "./images.jpeg";
import sd from "./sd.jpeg";
import smp from "./smp.jpeg";
import smk from "./smk.jpg";
import p1 from "./p1.png";
import p2 from "./p2.png";
import M from "materialize-css/dist/js/materialize.min.js";

class Dashboard extends React.Component {
    componentDidMount() {
        document.addEventListener("DOMContentLoaded", function() {
            var elems = document.querySelectorAll(".carousel");
            var instances = M.Carousel.init(elems, {});
        });
        document.addEventListener("DOMContentLoaded", function() {
            var elems = document.querySelectorAll(".parallax");
            var instances = M.Parallax.init(elems, {});
        });
        document.addEventListener("DOMContentLoaded", function() {
            var elems = document.querySelectorAll(".sidenav");
            var instances = M.Sidenav.init(elems, {});
        });
    }
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav class="black">
                        <div class="nav-wrapper container">
                            <a
                                href="#"
                                data-target="slide-out"
                                class="sidenav-trigger"
                            >
                                <i class="material-icons">menu</i>
                            </a>
                            <a href="#!" class="brand-logo center">
                                Ryan
                            </a>
                            <ul class="right hide-on-med-and-down">
                                <li>
                                    <a href="#index-banner-home">Home</a>
                                </li>
                                <li>
                                    <a href="#skill">Skill</a>
                                </li>
                                <li>
                                    <a href="#tentang">Tentang</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul id="slide-out" class="sidenav">
                    <li>
                        <div class="user-view">
                            <div class="background">
                                <img src={Gambar1} />
                            </div>
                            <a>
                                <img class="circle" src={pp} />
                            </a>
                            <a>
                                <span class="white-text name">
                                    Ryan Mustofa
                                </span>
                            </a>
                            <a>
                                <span class="white-text email">
                                    rm281003@gmail.com
                                </span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a href="#index-banner-home" class="waves-effect">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#skill" class="waves-effect">
                            Skill
                        </a>
                    </li>
                    <li>
                        <a href="#tentang" class="waves-effect">
                            Tentang
                        </a>
                    </li>
                </ul>
                <div id="index-banner-home" class="parallax-container">
                    <div class="section no-pad-bot">
                        <div class="container">
                            <br />
                            <br />
                            <center>
                                <img
                                    class="responsive-img"
                                    style={{
                                        width: "200px",
                                        borderRadius: "50%"
                                    }}
                                    src={pp}
                                ></img>
                            </center>
                            <div class="row center">
                                <h5
                                    class="header col s12 light"
                                    style={{ color: "white" }}
                                >
                                    a web development in both the frontend and
                                    backend development
                                </h5>
                            </div>
                            <div class="row center">
                                <a
                                    href="https://github.com/RyanMustofa"
                                    id="download-button"
                                    class="btn-large waves-effect waves-light teal lighten-1 blue"
                                    style={{ borderRadius: " 10px" }}
                                >
                                    See GITHUB
                                </a>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div class="parallax">
                        <img src={Gambar1} alt="Unsplashed background img 1" />
                    </div>
                </div>

                <div class="container" id="skill">
                    <div class="section">
                        <center>
                            <h3>Skill</h3>
                        </center>
                        <div class="row">
                            <div class="col s12 m4">
                                <h5 align="center">HTML & CSS</h5>
                                <br />
                                <center>
                                    <img
                                        className="responsive-img"
                                        src={HtmlCss}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }}
                                    />
                                </center>
                            </div>

                            <div class="col s12 m4">
                                <h5 align="center">PHP</h5>
                                <br />
                                <center>
                                    <img
                                        className="responsive-img"
                                        src={php}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }}
                                    />
                                </center>
                            </div>

                            <div class="col s12 m4">
                                <h5 align="center">MySQL</h5>
                                <center>
                                    <img
                                        className="responsive-img"
                                        src={mysql}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }}
                                    />
                                </center>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12 m4">
                                <h5 align="center">JavaScript</h5>
                                <br />
                                <center>
                                    <img
                                        className="responsive-img"
                                        src={js}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }}
                                    />
                                </center>
                            </div>

                            <div class="col s12 m4">
                                <h5 align="center">ReactJS</h5>
                                <br />
                                <center>
                                    <img
                                        className="responsive-img"
                                        src={react}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }}
                                    />
                                </center>
                            </div>

                            <div class="col s12 m4">
                                <h5 align="center">Laravel</h5>
                                <br />
                                <center>
                                    <img
                                        className="responsive-img"
                                        src={laravel}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }}
                                    />
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="index-banner" class="parallax-container">
                    <div class="section no-pad-bot">
                        <div class="container">
                            <br />
                            <br />
                            <center>
                                <h5 style={{ color: "white" }}>
                                    خَيْرُ الناسِ أَنْفَعُهُمْ لِلناسِ
                                </h5>
                            </center>
                            <div class="row center">
                                <h5
                                    class="header col s12 light"
                                    style={{ color: "white" }}
                                >
                                    “Sebaik-baik manusia adalah yang paling
                                    bermanfaat bagi manusia”
                                </h5>
                                <br />
                                <br />
                                <br />
                                <h5 align="center" style={{ color: "white" }}>
                                    — (HR. Ahmad, ath-Thabrani, ad-Daruqutni.
                                    Hadits ini dihasankan oleh al-Albani di
                                    dalam Shahihul Jami’ no:3289) —
                                </h5>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div class="parallax">
                        <img
                            src={pemandangan}
                            alt="Unsplashed background img 1"
                        />
                    </div>
                </div>
                <div class="container" id="tentang">
                    <div class="section">
                        <div class="row">
                            <div class="col s12 center">
                                <h3>
                                    <i class="mdi-content-send brown-text"></i>
                                </h3>
                                <h4>Contact Us</h4>
                                <p class="left-align light">
                                    Perkenalkan Saya Ryan Mustofa . lahir di
                                    karanganyar 28 Oktober 2003 . saya tinggal
                                    di Lemahbang,Jumapolo,Karanganyar,Jawa
                                    Tengah . agama saya muslim . saya anak
                                    pertama dari Bapak Usron Riyadi & Ibu Tukini
                                    . dan memiliki 2 saudara kandung
                                </p>
                            </div>
                        </div>
                        <div class="carousel">
                            <a class="carousel-item">
                                <img src={p1} class="circle responsive-img" />
                                <br />
                                <h6 class="black-text center-align">
                                    PENGELOLA SEKOLAH FRONTEND
                                </h6>
                                <center>
                                    <a
                                        href="https://github.com/RyanMustofa/frontend-pengelola-data"
                                        class="waves-effect btn waves-light teal"
                                    >
                                        see repository{" "}
                                    </a>
                                </center>
                            </a>
                            <a class="carousel-item">
                                <img src={p1} class="circle responsive-img" />
                                <br />
                                <h6 class="black-text center-align">
                                    PENGELOLA SEKOLAH BACKEND
                                </h6>
                                <center>
                                    <a
                                        href="https://github.com/RyanMustofa/backend-pengelola-data"
                                        class="waves-effect btn waves-light teal"
                                    >
                                        see repository{" "}
                                    </a>
                                </center>
                            </a>
                            <a class="carousel-item">
                                <img src={p2} class="circle responsive-img" />
                                <br />
                                <h6 class="black-text center-align">
                                    BERITA NEWS
                                </h6>
                                <center>
                                    <a
                                        href="https://github.com/RyanMustofa/evaluasi-router-params"
                                        class="waves-effect btn waves-light teal"
                                    >
                                        see repository{" "}
                                    </a>
                                </center>
                            </a>
                        </div>
                        <div className="center-align">
                            <h4>RIWAYAT PENDIDIKAN</h4>
                        </div>
                        <div class="row">
                            <div class="col s12 m4">
                                <center>
                                    <img
                                        className="responsive-img"
                                        src={sd}
                                        style={{
                                            maxWidth: "50%",
                                            height: "auto",
                                            borderRadius: "50%"
                                        }}
                                    />
                                </center>
                                <br />
                                <h5 align="center">SD N 01 LEMAHBANG</h5>
                                <h5 align="center">2009 - 2015</h5>
                            </div>

                            <div class="col s12 m4">
                                <center>
                                    <img
                                        className="responsive-img"
                                        src={smp}
                                        style={{
                                            maxWidth: "60%",
                                            height: "auto",
                                            borderRadius: "50%"
                                        }}
                                    />
                                    <br />
                                    <h5 align="center">SMP N 2 JUMAPOLO</h5>
                                    <h5 align="center">2016 - 2018</h5>
                                </center>
                            </div>

                            <div class="col s12 m4">
                                <center>
                                    <img
                                        className="responsive-img"
                                        src={smk}
                                        style={{
                                            maxWidth: "60%",
                                            height: "auto",
                                            borderRadius: "50%"
                                        }}
                                    />
                                </center>
                                <br />
                                <h5 align="center">SMK N 2 KARANGANYAR</h5>
                                <h5 align="center">2019 - 2020</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
