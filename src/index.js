// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import paintings from './paintings.json';



// const data = paintings[2];

// {
  /* <Painting 
  url={data.url} 
  title={data.title} 
  author={data.author.tag}
  profileUrl={ data.author.url}
  price = {data.price}/> */
// }

ReactDOM.render(<App/>, document.querySelector('#root'));


// const painting = (
//   <div>
//     <img src={ data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>Автор: <a href={data.author.url}>{ data.author.tag}</a></p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );



// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
