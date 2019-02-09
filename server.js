const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  graphqlHttp({
    schema: buildSchema(`
    type Event {
      _id: ID!
      description:String!
      price: Float!
      date:Sting!
    }
    type RootQuery {
      events: [Event!]!
    }
    type RootMutation {
      createEvent(name : String): Event
    }
    schema {
      query: RootQuery
      mutation: RootMutation
    }
    `),
rootValue: {
  events: () => {
     return ['Studying', 'Teaching', 'Swimming']
  },
  
},
createEvents: (args) => {
  const eventName = args.name;
  return eventName;
},
graphiql : true

  })
}));


app.listen(3000);