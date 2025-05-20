/*import React, { useState } from 'react';
import './TranslatePage.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Spline from '@splinetool/react-spline';


function TranslatePage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleTranslate = async () => {
    try {
      // Make sure the text and use_pretrained are passed as body for the request
      const response = await fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: input,
          use_pretrained: true, // You can modify this flag based on your choice (true/false)
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setOutput(data.translated_text); // Update the output state with the translation
      } else {
        console.error('Error:', data.error);
        setOutput('Error: Could not translate.');
      }
    } catch (error) {
      console.error('Error:', error);
      setOutput('Error: Could not connect to the server.');
    }
  };

  return (
    <div className="translate-container">
      {/* Heading with Globe */
     /* <div className="heading-with-globe">
        <div className='globe-lottie'>
          <DotLottieReact
            src="https://lottie.host/30b14efa-e2ca-4281-821b-21ce56f1224d/JWjSqO9Foo.lottie"
            loop
            autoplay
          />
        </div>
        <h1>Translator</h1>
      </div>

      <div className='mm_cont'>
        <div className="translator-grid">
        <div className="left-center-spline">
        {/* <Spline scene="https://prod.spline.design/PF-7dsrQ5mOop6cA/scene.splinecode" /> */
       /*<Spline scene="https://prod.spline.design/HMApVhVaFRu2OqCI/scene.splinecode" />
 
</div>
          <div className="translator-box">
         

            <select>
              <option>English</option>
            </select>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Enter text to translate...'
            />
          </div>

          <div className="translator-box">
            <select>
              <option>Telugu</option>
            </select>
            <textarea
              value={output}
              readOnly
              placeholder='Translation will appear here...'
            />
          </div>
        </div>
      </div>

      <button className="translate-btn" onClick={handleTranslate}>
        Translate
      </button>
      <h6 className="disclaimer">This model can make mistakes. Check important info.</h6>
    </div>
  );
}

export default TranslatePage;/**/

/*import React, { useState, useEffect } from 'react';
import './TranslatePage.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Spline from '@splinetool/react-spline';

function TranslatePage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState([]);

  const handleTranslate = async () => {
    try {
      const response = await fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: input,
          use_pretrained: true,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setOutput(data.translated_text);
      } else {
        console.error('Error:', data.error);
        setOutput('Error: Could not translate.');
      }
    } catch (error) {
      console.error('Error:', error);
      setOutput('Error: Could not connect to the server.');
    }
  };

  const fetchTranslationHistory = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/translate/history?method=text');
      const data = await res.json();
      setHistory(data);
    } catch (err) {
      console.error('Error fetching text history:', err);
    }
  };

  useEffect(() => {
    fetchTranslationHistory();
  }, []);

  return (
    <div className="translate-container">
      <div className="heading-with-globe">
        <div className='globe-lottie'>
          <DotLottieReact
            src="https://lottie.host/30b14efa-e2ca-4281-821b-21ce56f1224d/JWjSqO9Foo.lottie"
            loop
            autoplay
          />
        </div>
        <h1>Translator</h1>
      </div>

      <div className='mm_cont'>
        <div className="translator-grid">
          <div className="left-center-spline">
            <Spline scene="https://prod.spline.design/HMApVhVaFRu2OqCI/scene.splinecode" />
          </div>
          <div className="translator-box">
            <select>
              <option>English</option>
            </select>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Enter text to translate...'
            />
          </div>
          <div className="translator-box">
            <select>
              <option>Telugu</option>
            </select>
            <textarea
              value={output}
              readOnly
              placeholder='Translation will appear here...'
            />
          </div>
        </div>
      </div>

      <button className="translate-btn" onClick={handleTranslate}>
        Translate
      </button>

      <h6 className="disclaimer">This model can make mistakes. Check important info.</h6>
      {
      <div className="history-section">
        <h3>Previous Translations</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              <strong>Input:</strong> {item.text}<br/>
              <strong>Output:</strong> {item.translated_text}
            </li>
          ))}
        </ul>
      </div>
      }
      </div>
    );
  }
  
  export default TranslatePage;*/

 /* import React, { useState } from 'react';
import './TranslatePage.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Spline from '@splinetool/react-spline';

function TranslatePage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState([]);

  const handleTranslate = async () => {
    try {
      const response = await fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: input,
          use_pretrained: true,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setOutput(data.translated_text);
        setHistory(prev => [
          ...prev,
          { text: input, translated_text: data.translated_text }
        ]);
      } else {
        console.error('Error:', data.error);
        setOutput('Error: Could not translate.');
      }
    } catch (error) {
      console.error('Error:', error);
      setOutput('Error: Could not connect to the server.');
    }
  };

  return (
    <div className="translate-container">
      <div className="heading-with-globe">
        <div className='globe-lottie'>
          <DotLottieReact
            src="https://lottie.host/30b14efa-e2ca-4281-821b-21ce56f1224d/JWjSqO9Foo.lottie"
            loop
            autoplay
          />
        </div>
        <h1>Translator</h1>
      </div>

      <div className='mm_cont'>
        <div className="translator-grid">
          <div className="left-center-spline">
            <Spline scene="https://prod.spline.design/HMApVhVaFRu2OqCI/scene.splinecode" />
          </div>
          <div className="translator-box">
            <select>
              <option>English</option>
            </select>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Enter text to translate...'
            />
          </div>

          <div className="translator-box">
            <select>
              <option>Telugu</option>
            </select>
            <textarea
              value={output}
              readOnly
              placeholder='Translation will appear here...'
            />
          </div>
        </div>
      </div>

      <button className="translate-btn" onClick={handleTranslate}>
        Translate
      </button>
      <h6 className="disclaimer">This model can make mistakes. Check important info.</h6>

      {history.length > 0 && (
        <div className="history-section">
          <h3>Previous Translations</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index}>
                <strong>Input:</strong> {item.text}<br />
                <strong>Output:</strong> {item.translated_text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TranslatePage;*/

// 


/*import React, { useState, useEffect } from 'react';
import './TranslatePage.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Spline from '@splinetool/react-spline';

function TranslatePage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch('http://localhost:5000/translations?method=text');
        const data = await res.json();
        setHistory(data);
      } catch (error) {
        console.error('Failed to fetch history:', error);
      }
    };

    fetchHistory();
  }, []);

  const handleTranslate = async () => {
    try {
      const userId = localStorage.getItem('userId'); 
      const response = await fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: input,
          use_pretrained: true,
          userId: userId
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setOutput(data.translated_text);
        setHistory(prev => [
          { sourceText: input, translatedText: data.translated_text },
          ...prev,
        ]);
      } else {
        setOutput('Error: Could not translate.');
      }
    } catch (error) {
      console.error('Error:', error);
      setOutput('Error: Could not connect to the server.');
    }
  };

  const handleClearHistory = async () => {
    try {
      await fetch('http://localhost:5000/translations?method=text', {
        method: 'DELETE',
      });
      setHistory([]);
    } catch (error) {
      console.error('Failed to clear history:', error);
    }
  };

  return (
    <div className="translate-container">
      <div className="heading-with-globe">
        <div className='globe-lottie'>
          <DotLottieReact
            src="https://lottie.host/30b14efa-e2ca-4281-821b-21ce56f1224d/JWjSqO9Foo.lottie"
            loop
            autoplay
          />
        </div>
        <h1>Translator</h1>
      </div>

      <div className='mm_cont'>
        <div className="translator-grid">
          <div className="left-center-spline">
            <Spline scene="https://prod.spline.design/HMApVhVaFRu2OqCI/scene.splinecode" />
          </div>
          <div className="translator-box">
            <select><option>English</option></select>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Enter text to translate...'
            />
          </div>
          <div className="translator-box">
            <select><option>Telugu</option></select>
            <textarea
              value={output}
              readOnly
              placeholder='Translation will appear here...'
            />
          </div>
        </div>
      </div>

      <div className="btn-row">
        <button className="translate-btn" onClick={handleTranslate}>Translate</button>
        <button className="history-btn" onClick={() => setShowHistory(true)}>History</button>
      </div>

      <h6 className="disclaimer">This model can make mistakes. Check important info.</h6>

      /* History Modal */
      /*{showHistory && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowHistory(false)}>×</button>
            <h3>Translation History</h3>
            {history.length === 0 ? (
              <p>No translations yet.</p>
            ) : (
              <ul className="history-list">
                {history.map((item, index) => (
                  <li key={index}>
                    <strong>Input:</strong> {item.sourceText}<br />
                    <strong>Output:</strong> {item.translatedText}
                  </li>
                ))}
              </ul>
            )}
            {history.length > 0 && (
              <button className="clear-btn" onClick={handleClearHistory}>Clear History</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TranslatePage;*/



import React, { useState, useEffect } from 'react';
import './TranslatePage.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Spline from '@splinetool/react-spline';

function TranslatePage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/translations?method=text`);
        const data = await res.json();
        setHistory(data);
      } catch (error) {
        console.error('Failed to fetch history:', error);
      }
    };

    fetchHistory();
  }, []);

  const handleTranslate = async () => {
    try {
      const userId = localStorage.getItem('userId'); 
      const response = await fetch(`${import.meta.env.VITE_API_URL}/translate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: input,
          use_pretrained: true,
          userId: userId
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setOutput(data.translated_text);
        setHistory(prev => [
          { sourceText: input, translatedText: data.translated_text },
          ...prev,
        ]);
      } else {
        setOutput('Error: Could not translate.');
      }
    } catch (error) {
      console.error('Error:', error);
      setOutput('Error: Could not connect to the server.');
    }
  };

  const handleClearHistory = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/translations?method=text`, {
        method: 'DELETE',
      });
      setHistory([]);
    } catch (error) {
      console.error('Failed to clear history:', error);
    }
  };

  return (
    <div className="translate-container">
      <div className="heading-with-globe">
        <div className='globe-lottie'>
          <DotLottieReact
            src="https://lottie.host/30b14efa-e2ca-4281-821b-21ce56f1224d/JWjSqO9Foo.lottie"
            loop
            autoplay
          />
        </div>
        <h1>Translator</h1>
      </div>

      <div className='mm_cont'>
        <div className="translator-grid">
          <div className="left-center-spline">
            <Spline scene="https://prod.spline.design/HMApVhVaFRu2OqCI/scene.splinecode" />
          </div>
          <div className="translator-box">
            <select><option>English</option></select>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Enter text to translate...'
            />
          </div>
          <div className="translator-box">
            <select><option>Telugu</option></select>
            <textarea
              value={output}
              readOnly
              placeholder='Translation will appear here...'
            />
          </div>
        </div>
      </div>

      <div className="btn-row">
        <button className="translate-btn" onClick={handleTranslate}>Translate</button>
        <button className="history-btn" onClick={() => setShowHistory(true)}>History</button>
      </div>

      <h6 className="disclaimer">This model can make mistakes. Check important info.</h6>

      {/* History Modal */}
      {showHistory && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowHistory(false)}>×</button>
            <h3>Translation History</h3>
            {history.length === 0 ? (
              <p>No translations yet.</p>
            ) : (
              <ul className="history-list">
                {history.map((item, index) => (
                  <li key={index}>
                    <strong>Input:</strong> {item.sourceText}<br />
                    <strong>Output:</strong> {item.translatedText}
                  </li>
                ))}
              </ul>
            )}
            {history.length > 0 && (
              <button className="clear-btn" onClick={handleClearHistory}>Clear History</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TranslatePage;