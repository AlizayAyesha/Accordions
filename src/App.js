import Accordion from "./Accordion";
import { accordionData } from "./utils/content";


const App = () => {
  return(
   <div>
    <div className='Accordions'>
{ accordionData.map(({title,content}) => {
 
 return <Accordion
  title={title} 
  content={content} 
  key={Math.random() *100}
  />
})}
    </div>
    </div>
  )
}

export default App;