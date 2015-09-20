var clarifai;

// instantiate a new Clarifai object
function init(){
  clarifai = new Clarifai(
      {
        'accessToken': 'ZR7ywrd6vhoToJr3XUxl46TBk72qPLi'
      }
      );
}

// send a 'positive' url
function positive(){
  clarifai.positive('http://thephunion.com/wp-content/uploads/2013/04/Umphreys.jpg', 'phish', cb).then(
    promiseResolved,
    promiseRejected 
      );
}

// send a 'negative' url
function negative(){
  clarifai.negative('http://www.mediaspin.com/joel/grateful_dead230582_15-52.jpg', 'phish', cb).then(
    promiseResolved,
    promiseRejected 
      );
}

// explicitly train our concept
function train(){
  clarifai.train('phish', cb).then(
      promiseResolved,
      promiseRejected 
      );
}

// make a prediction on a url with our concept
function predict(){
  clarifai.predict('http://farm3.static.flickr.com/2161/2141620332_2b741028b3.jpg', 'phish', cb).then(
    promiseResolved,
    promiseRejected 
      );
}

function promiseResolved(obj){
  console.log('promiseResolved', obj);
}

function promiseRejected(obj){
  console.log('promiseRejected', obj);
}

function cb(obj){
  console.log('cb', obj);
}

var phishPositives = [
  'http://clarifai-test.s3.amazonaws.com/phish/positive/3652848536_c72244dc88_o.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/positive/4840976460_8463f9f319_b.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/positive/4904257471_20c0ff714f_b.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/positive/4904842036_6806f5fd25_b.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/positive/4904845798_aaf3392666_b.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/positive/6030148539_5d6da277c0_b.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/positive/9381652037_7e5e7665ab_k.jpg'
];

var phishNegatives = [
  'http://clarifai-test.s3.amazonaws.com/phish/negative/5587410471_cf932bf9fa_o.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/negative/7367377586_f5e7c59ef8_k.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/negative/8422034157_1fbe437d3a_b.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/negative/8464327405_5eaf39e6e2_o.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/negative/8804958484_9dcba3da19_k.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/negative/8805067594_f2abc5c751_k.jpg',
  'http://clarifai-test.s3.amazonaws.com/phish/negative/9583629691_a1594637a9_k.jpg'
];

$(document).ready(init);

// Give a few positive examples and a name for the custom concept.
//clarifai.positive('http://example.com/car.jpg', 'car');

// Give a few negative examples and a name for the custom concept.
//clarifai.negative('http://example.com/not-a-car.jpg', 'car');

// Train the platform on your custom concept.
//clarifai.train('car');

// Ask for a prediction on a new image with your custom concept.
//clarifai.predict('http://example.com/a-new-car.jpg', 'car');
