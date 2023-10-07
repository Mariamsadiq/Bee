import React, { useState } from 'react';

function OptionSelector() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h2>Select roses type?</h2>
      <div>
        <button
          className={`option-button ${selectedOption === 'Option 1' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Option 1')}
        >
          <img
            src="https://images.pexels.com/photos/343957/pexels-photo-343957.jpeg?cs=srgb&dl=pexels-johnmark-smith-343957.jpg&fm=jpg"
            width="300"
            alt="Tulip"
          />
          <label>Tulip</label>
        </button>
        <button
          className={`option-button ${selectedOption === 'Option 2' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Option 2')}
        >
          <img
            src="https://media.istockphoto.com/id/1174596604/photo/beautiful-roses-background.jpg?s=1024x1024&w=is&k=20&c=pScaZNuHbbNAfprMaxVHmaEZb_s4-SouA_UL-PbTDMc="
            width="300"
            alt="Roses"
          />
          <label>Roses</label>
        </button>
      </div>
      
      {selectedOption === 'Option 1' && (
        <div>
          <h3>Select the Colour</h3>
          <div className="additional-options">
            <button
              className="option-button"
              onClick={() => handleOptionClick('White')}
            >
              <img
                src="https://i.pinimg.com/564x/e8/2f/e7/e82fe741f975a2afd17fd3486c3a1ad2.jpg"
                width="150"
                alt="White"
              />
              <label>White</label>
            </button>
            
            <button
              className="option-button"
              onClick={() => handleOptionClick('Pink')}
            >
              <img
                src="https://i.pinimg.com/564x/6f/e8/75/6fe8753c37e7deff1066e87e4246b5d6.jpg"
                width="150"
                alt="Pink"
              />
              <label> Pink</label>
            </button>
            <button
              className="option-button"
              onClick={() => handleOptionClick('Red')}
            >
              <img
                src="https://i.pinimg.com/736x/d4/df/fd/d4dffdaf1049a150d56ee2a93d50e169.jpg"
                width="150"
                alt="Red"
              />
              <label>Red</label>
            </button>
         <button
         className="option-button"
         onClick={() => handleOptionClick('yellow')}
       >
         <img
           src="https://i.pinimg.com/564x/ed/c3/93/edc393e52ca2797344e1c32d5fba0cb3.jpg"
           width="150"
           alt="yellow"
         />
         <label>yellow</label>
       </button>
       <button
         className="option-button"
         onClick={() => handleOptionClick('Orange')}
       >
         <img
           src="https://i.pinimg.com/564x/2f/61/56/2f61562f7192ed9ba267522a7894503f.jpg"
           width="150"
           alt="Orange"
         />
         <label>Orange</label>
       </button>
       <button
         className="option-button"
         onClick={() => handleOptionClick('blue')}
       >
         <img
           src="https://i.pinimg.com/564x/93/85/e3/9385e36ea4048d6f99e6ddf7ec6898e5.jpg"
           width="150"
           alt="blue"
         />
         <label>blue</label>
       </button>
     </div>
     
   </div>
      )}
       {selectedOption === 'White' && (
        <div>
          <h3>Select the Cover</h3>
          <div className="additional-options">
            <button
              className="option-button"
              onClick={() => handleOptionClick('Whitecover')}
            >
              <img
                src="https://i.pinimg.com/564x/38/8c/6f/388c6f68f4042e9338569fa018a0dc20.jpg"
                width="150"
                alt="Whitecover"
              />
              <label>White Cover</label>
            </button>
          </div>
        </div>
      )}
      {selectedOption === 'Whitecover' && (
        <div>
          <h3>Additional Options for White Cover</h3>
          {/* Add your additional options for White Cover here */}
        </div>
      )}
      <div></div>
      <div>
        {selectedOption && <p>You selected: {selectedOption}</p>}
      </div>

    </div>
  );
}

export default OptionSelector;
