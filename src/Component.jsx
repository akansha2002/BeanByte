import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(null);

  const fetchDataItem = () => {

    // Making an API call using fetch
    fetch(`https://jsonplaceholder.typicode.com/posts/${currentIndex + 1}`)
      .then((response) => response.json())
      .then((result) => {
        // Delaing displaying data in the console for 1 second
        setTimeout(() => {
          console.log(result);
        }, 1000);

        // Updating the component state with the fetched item
        setData([result]);
        setCurrentItem(result);
        setCurrentIndex(currentIndex + 1);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <button onClick={fetchDataItem}>Button</button>
      <div>
        <h2>Data Displayed in Component:</h2>
        {currentItem && (
          <ul>
            <li>Title: {currentItem.title}</li>
            <li>Body: {currentItem.body}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
