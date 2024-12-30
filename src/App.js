import logo from './logo.svg';
import './App.css';
import html2canvas from "html2canvas";

function App() {
  const handleScreenshot = async () => {
    try {
      const appElement = document.querySelector(".App");

      // Wait for the image to load before capturing the screenshot
      const images = appElement.querySelectorAll('img');
      let loadedImages = 0;

      images.forEach(img => {
        if (!img.complete) {
          img.onload = () => {
            loadedImages += 1;
            if (loadedImages === images.length) {
              captureScreenshot(appElement);  // Take the screenshot after all images load
            }
          };
        } else {
          loadedImages += 1;
        }
      });

      // If all images are already loaded, proceed with the screenshot
      if (loadedImages === images.length) {
        captureScreenshot(appElement);
      }

    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
  };

  const captureScreenshot = async (appElement) => {
    try {
      const canvas = await html2canvas(appElement, {
        useCORS: true,
        allowTaint: false,
      });

      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = "screenshot.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("Screenshot taken successfully");
    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
  };


  const handleOpenDialer = (phoneNumber) => {
    // Ensure phoneNumber is a string
    const formattedNumber = `tel:${String(phoneNumber).replace(/\s/g, '')}`;
    window.location.href = formattedNumber;
  };

  return (      
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img
          src="https://inconnectb.s3.eu-north-1.amazonaws.com/inconnect/bb_51a370bb-8c4d-4641-9cb6-9ad2987faabd"
          alt="External Image"
        />
        <img src="./logo192.png" alt="" />
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
        <button
        className="btn btn-success rounded-circle p-2 border-0 text-white position-fixed d-sm-block d-lg-none"
        style={{
          right: "16px",
          bottom: "144px", // Adjust positioning
          zIndex: 1050,
        }}
        onClick={() => handleOpenDialer(7510115894)}
      >
        hiriri
      </button>
      </header>
    </div>  
  );
}

export default App;
