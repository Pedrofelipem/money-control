import React from 'react';
import {createRoot} from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';


createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelancer',
          type: 'deposit',
          category: 'Desenvolvedor',
          amount: 5000,
          createdAt: new Date('2022-05-20 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'whithDraw',
          category: 'Casa',
          amount: 800,
          createdAt: new Date('2022-05-28 10:00:00')
        },
        {
          id: 3,
          title: 'Combustível',
          type: 'whithDraw',
          category: 'Carro',
          amount: 300,
          createdAt: new Date('2022-05-10  11:00:00')
        }
      ]
    })
  },

  routes() {

    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {

      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)

    })
  }
})

 const container = document.getElementById('root')!;
 const root = createRoot(container);
 root.render(<App />);

