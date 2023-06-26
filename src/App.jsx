import './App.css'
import QuestionForm from './component/QuestionForm';
import FileUpload from './component/FileUpload';

function App() {

  return (
    <>

      <div className="app">
        <div className="app-container">
          <div className="upload">
            <FileUpload />
          </div>
          <div className="spotlight__wrapper">
            <QuestionForm />
          </div>
        </div>
      </div>
      {/* <div className="App">
      <h1>Question Form</h1>
      <QuestionForm />
      <h1>File Upload</h1>
      <FileUpload />
    </div> */}
    </>
  )
}

export default App
