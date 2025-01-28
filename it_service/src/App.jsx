import React from 'react'
import Card from "./Card";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import './App.css'

function App() {
  const text = "Welcome To our IT Company".split(" ");
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  


  return (
<>
    <div className='app'>
  <div className="navigation"></div>
  <div className="header">
 <img className="hero" src="https://www.bing.com/images/search?view=detailV2&ccid=SD8uyoQY&id=CE388EB0F462207970C2A47DD416EA10939B48AC&thid=OIP.SD8uyoQYWIwGFkOZ2DoSjwHaE7&mediaurl=https%3a%2f%2finformationage-staging.s3.amazonaws.com%2fuploads%2f2022%2f10%2f5-steps-to-deliver-digital-transformation-public-sector-lockdown.jpeg&exph=675&expw=1013&q=image+for+it+sector+services&simid=608012480732012143&FORM=IRPRST&ck=1F8205E25F5D3545A185DD62390C217D&selectedIndex=2&itb=0&qpvt=image+for+it+sector+services" alt="hero" />
   <div className="text">
    
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration:1.05,
            delay: i / 20,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}

    </div>



</div>
 
<div className="items">
      {items.map((item, i) => (
        <Card key={i} text={item} index={i} />
      ))}
    </div>
</div>
</>
  );

 
}
export default App