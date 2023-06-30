import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
       <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftbtnText="Custom Order"
          rightbtnText="Existing inventory"
        />
       <Section 
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftbtnText="Custom Order"
          rightbtnText="Existing inventory"
       />
       <Section 
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftbtnText="Custom Order"
          rightbtnText="Existing inventory"
          />
       <Section 
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftbtnText="Custom Order"
          rightbtnText="Existing inventory"
         />
         <Section 
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftbtnText="Order now"
            rightbtnText="Learn more"
         />
         <Section 
            title="Solar for New Roofs "
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftbtnText="Order now"
            rightbtnText="Learn more"
         />
          <Section 
            title="Accessories "
            description=""
            backgroundImg="accessories.jpg"
            leftbtnText="Shop now"
            rightbtnText=""
         />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
    z-index:10;
    `