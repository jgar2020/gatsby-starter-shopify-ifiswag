import * as React from "react"
import { Link, graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  genInlineLink
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`

function Hero (props) {
  return (
    <div className={container}>
      <h1 className={intro}>This is a stage store currently under dev.</h1>
      <p>Order fulfillment by <a href="https://www.printful.com/print-on-demand" target="_blank" rel="noopener noreferrer" className={genInlineLink}>Printful's print-on-demand service</a>. Order and payment processing by <a href="https://www.shopify.com/sell" target="_blank" rel="noopener noreferrer" className={genInlineLink}>Shopify</a>. Website powered by <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer" className={genInlineLink}>GatsbyJS</a> framework.</p>
      <p>Check out <Link to="/vivis-corner" className={genInlineLink}>Vivi's Corner</Link> :)</p>
    </div>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
