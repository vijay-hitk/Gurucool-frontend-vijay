import { useState ,useEffect} from 'react';
import './App.css';
import {Container , Row , Col} from 'react-bootstrap';
import StepOne from './components/Forms/stepOne';
import StepTwo from './components/Forms/stepTwo';
import Final from './components/Forms/final';

function App() {
  const [step , setStep] = useState(1);

  const [formData , setFormData] = useState({
    name :'',
    email :'',
    phone : '',
    addressLine1:'',
    addressLine2:'',
    city:'',
    state:'',
    zipcode:'',
  })

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData])

  const previous = () => {
    setStep(step-1);
  }

  const next = () => {
    setStep(step+1);
  }

  const handleInputdata = (e) => {
    setFormData({...formData , [e.target.name] : e.target.value})

  }

 
  
    switch(step){
        case 1:
        return (
            <div className='App'>
              
                  <StepOne next={next} formData={formData} handleInputdata={handleInputdata}/>
                 
            </div>
          )
        case 2 : 
        return (
          <div className='App'>
           
                <StepTwo previous={previous} next={next} formData={formData} handleInputdata={handleInputdata}/>
                
          </div>
        )
        case 3 : 
        return(
          <div className='App'>
           
                <Final formData={formData} previous={previous}/>
               
          </div>
        )
        default:
          return (
            <div className='App'>

            </div>
          )


      
      
      
      
      }

     

      
   

}

export default App;
