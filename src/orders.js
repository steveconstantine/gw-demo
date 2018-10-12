import gql from 'graphql-tag';

export const getCustomerOrders = gql'
query query {
    shop {
        customer_id
    }
}';