import logo from './logo.svg';
import './App.css';
import html2canvas from "html2canvas";

function App() {
  const handleScreenshot = async () => {
    try {
      // Capture the visible area of the App div
      const appElement = document.querySelector(".App");
      const canvas = await html2canvas(appElement, {
        useCORS: true, // Enable cross-origin image handling
        allowTaint: false, // Prevent canvas tainting
      });

      // Convert canvas to image (PNG format)
      const image = canvas.toDataURL("image/png");

      // Create a temporary link element to trigger download
      const link = document.createElement("a");
      link.href = image;
      link.download = "screenshot.png"; // Set the download file name
      document.body.appendChild(link); // Append link to the DOM
      link.click(); // Trigger download
      document.body.removeChild(link); // Clean up the link element

      console.log("Screenshot taken successfully");
    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
  };

  return (      
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src="https://inconnectb.s3.eu-north-1.amazonaws.com/inconnect/bb_51a370bb-8c4d-4641-9cb6-9ad2987faabd" alt="" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        <div>
          <button onClick={handleScreenshot}>Take Screenshot</button>
        </div>
      </header>
    </div>  
  );
}

export default App;
  