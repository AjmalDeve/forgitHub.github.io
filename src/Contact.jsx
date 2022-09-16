import BascButtons from './BtnForabout';
import  BasicTextFields from './Forminfuts';
import TextField from './TextArea';
function Contact() {
    return (
      <>
      <div className="forrrm">

        <form className='forrm' action="">
          <h1 className="contact">Contact</h1>
        <BasicTextFields label="Name" />
        <BasicTextFields label="Email" />
        <TextField />
        <BascButtons name="Send" />
        </form>
      </div>
      </>
    );
  }
  
  export default Contact;
  