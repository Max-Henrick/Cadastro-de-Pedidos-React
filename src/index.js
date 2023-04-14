import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './stylles/globalStyles';
import Routes from './Routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<> <Routes /> <GlobalStyles /> </>);
