// instantiate a new Clarifai object
clarifai = new Clarifai(
    {
      'accessToken':
       ZR7ywrd6vhoToJr3XUxl46TBk72qPLi
    }
    );

// Give a few positive examples and a name for the custom concept.
clarifai.positive('http://example.com/car.jpg', 'car');

// Give a few negative examples and a name for the custom concept.
clarifai.negative('http://example.com/not-a-car.jpg', 'car');

// Train the platform on your custom concept.
clarifai.train('car');

// Ask for a prediction on a new image with your custom concept.
clarifai.predict('http://example.com/a-new-car.jpg', 'car');
