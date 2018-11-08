import React, {Component} from 'react';
import { ModalLink } from 'sc-react-router-modal';
import { Link } from 'react-router-dom';
import { Box } from 'gestalt';
import BackgroundImage from 'react-background-image-loader';
import { graphql, compose } from 'react-apollo';
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import { withRouter } from "react-router-dom";

const ModalLinkProduct = ({ match, location, history, whichProductOpen, isProductModalOpen, product, cartOpen, isSliding }) => (
  <Query query={ query }>
    {({ loading, error, data, client }) => {
    let variantImage = product.images.edges[0].node.src

    const styles = {
      homeBackground: {
        backgroundImage: `url(${variantImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 'calc(200px + 25vh)',
        minWidth: '185px',
        minHeight: '200px',
        maxHeight: '400px'
      },
      titleAppearance: {
        borderRadius: '0 5px 5px 0',
        transform:'translateY(200px)',
        marginRight: '5%',
        padding: '1px 0px 1px 0px',
        background: 'rgba(255,255,255,0.44)'
      },
      titleHide: {
        display: 'none'
      }
    };

    if (loading) {
      return (<BackgroundImage style={styles.homeBackground} src={variantImage} placeholder={variantImage} key={product.name}>
                  <div style={ cartOpen == true ? styles.titleHide : styles.titleAppearance}>
                  <h5 className="Product__title" style={{'paddingLeft':'16px', 'marginBottom': '0', 'zIndex':'4', 'color' : 'rgba(0,0,0,0.8)'}}>{product.title}</h5>
                  <h5 className="Product__vendor" style={{'paddingLeft':'16px', 'marginTop': '2px', 'zIndex': '4','color' : 'rgba(0,0,0,0.8)'}}>{product.vendor}</h5>
                  </div>
                  <Box alignItems="center" display="flex" alignSelf="center" justifyContent="center" >
                    <Box padding={1}>
                    </Box>
                  </Box>
              </BackgroundImage>);
    }
    if (error) {
      return <p>{error.message}</p>;
    }

    if (data) {
      const { whichProductOpen, isProductModalOpen } = data;

      const updateProductInformation  = () => {
       client.writeData({ data: { isProductModalOpen: !isProductModalOpen } });
      };

      return (
        <div>
        { isSliding == false ?
            <Link to={`/art/${product.id}`} onClick={updateProductInformation}>
                  <BackgroundImage style={styles.homeBackground} src={variantImage} placeholder={variantImage} key={product.name}>
                    <div style={ cartOpen == true ? styles.titleHide : styles.titleAppearance}>
                    <h5 className="Product__title" style={{'paddingLeft':'16px', 'marginBottom': '0', 'zIndex':'4', 'color' : 'rgba(0,0,0,0.8)'}}>{product.title}</h5>
                    <h5 className="Product__vendor" style={{'paddingLeft':'16px', 'marginTop': '2px', 'zIndex': '4','color' : 'rgba(0,0,0,0.8)'}}>{product.vendor}</h5>
                    </div>
                    <Box alignItems="center" display="flex" alignSelf="center" justifyContent="center" >
                      <Box padding={1}>
                      </Box>
                    </Box>
                  </BackgroundImage>
            </Link>
          :
            <BackgroundImage style={styles.homeBackground} src={variantImage} placeholder={variantImage} key={product.name}>
              <div style={ cartOpen == true ? styles.titleHide : styles.titleAppearance}>
              <h5 className="Product__title" style={{'paddingLeft':'16px', 'marginBottom': '0', 'zIndex':'4', 'color' : 'rgba(0,0,0,0.8)'}}>{product.title}</h5>
              <h5 className="Product__vendor" style={{'paddingLeft':'16px', 'marginTop': '2px', 'zIndex': '4','color' : 'rgba(0,0,0,0.8)'}}>{product.vendor}</h5>
              </div>
              <Box alignItems="center" display="flex" alignSelf="center" justifyContent="center" >
                <Box padding={1}>
                </Box>
              </Box>
          </BackgroundImage>
      }
        </div>
      );
    }}}
    </Query>
);

const query = gql`
{
  isProductModalOpen @client
  whichProductOpen @client
}`;

const ModalLinkRouter = withRouter(ModalLinkProduct);

export default ModalLinkRouter;
