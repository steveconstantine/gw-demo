const fetch = require('isomorphic-fetch');
const fs = require('fs');
var uuid = require("uuid");
var token = uuid.v4();

      fetch(`https://giftingwildinc.myshopify.com/api/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': 'e533f252f3a673c02f85798859530319',
       },
       credentials: 'same-origin',
       authorization: token ? `Bearer ${token}` : "",
        body: JSON.stringify({
          variables: {},
          query: `
            {
              __schema {
                types {
                  kind
                  name
                  possibleTypes {
                    name
                  }
                }
              }
            }
          `,
        }),
      })
        .then(result => result.json())
        .then(result => {
          // here we're filtering out any type information unrelated to unions or interfaces
          const filteredData = result.data.__schema.types.filter(
            type => type.possibleTypes !== null,
          );
          result.data.__schema.types = filteredData;
          fs.writeFile('./src/shopifyFragmentTypes.json', JSON.stringify(result.data), err => {
            if (err) {
              console.error('Error writing fragmentTypes file', err);
            } else {
              console.log('Fragment types successfully extracted!');
            }
          });
        });
