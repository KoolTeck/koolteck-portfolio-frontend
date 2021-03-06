import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 /* :root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;

} */


 .light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #202121;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
} 


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    
}

html{
    scroll-behavior: smooth;
}
body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: var(--transition);
    
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}
textarea{
    max-width: 100%;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}
h1{
    font-size: 3rem;
    color: var(--white-color);
    span{
        font-size: 3rem;
        @media screen and (max-width: 502px){
            font-size: 3rem;
        }
    }
    @media screen and (max-width: 502px){
        font-size: 3rem;
    }

    @media screen and (max-width: 320px){
        font-size: 2rem;
        span{
            font-size: 2rem;
        }
    }
}
span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}

.light-dark-mode {
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 5.1rem;
    height: 1.8rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      color: var(--white-color);
    }
  }

  .ham-burger-menu {
    position: absolute;
    right: 5%;
    top: 3%;
    display: none;
    z-index: 15;
    svg {
      font-size: 3rem;
      color: var(--primary-color);
    }
  }



  @media screen and (max-width: 1200px) {
    .ham-burger-menu {
      display: block;
    }
        .nav-toggle-off {
        transform: translateX(-100%);
        z-index: 500;
    }
  }

  .nav-toggle-on {
        transform: translateX(0%);
        z-index: 500;
    }

  .preloader{
    background-color: rgba(73, 166, 233, 0.5);
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 200;
    img{
     width: 25%;
    position: fixed;
    top: 31%;
    left: 35%;
    z-index: 200;
    border-top-left-radius: 51%;
    border-bottom-right-radius: 44%;
    }
  }

 

`;

export default GlobalStyle;
