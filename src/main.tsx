import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RecoilRoot } from 'recoil'
import App from './App'
import './index.css'

const title = "Portfolio";
const description = "Ludvig Lindahls Portfolio"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <link rel='icon' type='image/png' href='portfolio.svg' />
      </Helmet>
      <App />
    </HelmetProvider>
  </RecoilRoot>,
)