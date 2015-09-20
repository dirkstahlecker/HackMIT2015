var clarifai;

// on document ready, instantiate the Clarifai object
function init(){
    clarifai = new Clarifai(
        {
            'accessToken': 'Ui1d9rr2c4WPy0l0wTzEDpQ7lghpbG'
        }
    );

    positive();
    negative();
    train();
    predict();
}

// send a 'positive' url
function positive(){
    var set_size = 7;
    for (var i = 0; i < set_size; ++i){
        clarifai.positive(/*phishPositives[i]*/golden_gate_bridgePositives[i],'ggbridge', cb).then(
            promiseResolved,
            promiseRejected 
        );
    }
}

// send a 'negative' url
function negative(){
    var set_size = 7;
    for (var i = 0; i < set_size; ++i){
        clarifai.negative(/*phishNegatives[i]*/golden_gate_bridgeNegatives[i],'ggbridge', cb).then(
            promiseResolved,
            promiseRejected 
        );
    }
}

// explicitly train our concept
function train(){
    clarifai.train('ggbridge', cb).then(
        promiseResolved,
        promiseRejected 
    );
}

// make a prediction on a url with our concept
function predict(){
    clarifai.predict(/*'http://farm3.static.flickr.com/2161/2141620332_2b741028b3.jpg'*/'http://www.jimcoda.com/data/photos/894_1_o1a7285_golden_gate_bridge.jpg','ggbridge', cb).then(
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

var golden_gate_bridgePositives = [
  'http://www.travlang.com/blog/wp-content/uploads/2010/04/golden-gate.jpg',
  'http://blog.westinteractive.com/wp-content/uploads/GoldenGateBridge_shutterstock114141715.jpg',
  'http://mostfamouslandmarks.com/wp-content/gallery/goldengate/Golden-Gate-Bridge-Clouds-Photography.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-s/06/d9/68/92/gg-bridge-from-fort-point.jpg',
  'http://media2.govtech.com/images/770*1000/shutterstock_golden_gate.jpg',
  'https://ggb113b.files.wordpress.com/2013/03/golden-gate-bridge_900px.jpg',
  'https://travelpast50.com/wp-content/uploads/2013/03/golden-gate-bridge.jpg'
];

var golden_gate_bridgeNegatives = [
  'http://www.mit.edu/activities/hillel/images/harvard_bridge.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Harvard_Bridge_and_Prudential_Tower.jpg/1024px-Harvard_Bridge_and_Prudential_Tower.jpg',
  'http://boston.workbar.com/wp-content/uploads/sites/2/2015/07/Harvard_Bridge_from_Cambridge_2009.jpg',
  'https://slice.mit.edu/wp-content/uploads/2014/10/Harvard_Bridge_1.jpg',
  'http://www.esbnyc.com/sites/default/files/styles/timely_content_image_large__885x590_/public/default_images/brs_0330.jpg?itok=LvqTWQyo',
  'http://www.cpexecutive.com/wp-content/uploads/2011/09/091511-Empire-State-Building-Picture-EXT-DAY.jpg',
  'https://d3kfrplp7t05mg.cloudfront.net/cms/2012-02-26/0213_empire_630x420.jpg'
];

var harvard_bridgePositives = [
  'http://www.mit.edu/activities/hillel/images/harvard_bridge.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Harvard_Bridge_and_Prudential_Tower.jpg/1024px-Harvard_Bridge_and_Prudential_Tower.jpg',
  'http://boston.workbar.com/wp-content/uploads/sites/2/2015/07/Harvard_Bridge_from_Cambridge_2009.jpg',
  'https://slice.mit.edu/wp-content/uploads/2014/10/Harvard_Bridge_1.jpg',
  'https://farm2.staticflickr.com/1257/539853696_5c1cf1a673_z.jpg',
  'http://www.nanolab.uc.edu/Photos/Memories/harvard%20bridge.jpg',
  'http://www.biodiversidadvirtual.org/etno/data/media/958/Harvard-Bridge-MIT-Bridge-%28Boston%29-9424.jpg'
];

var harvard_bridgeNegatives = [
  'http://www.travlang.com/blog/wp-content/uploads/2010/04/golden-gate.jpg',
  'http://blog.westinteractive.com/wp-content/uploads/GoldenGateBridge_shutterstock114141715.jpg',
  'http://media2.govtech.com/images/770*1000/shutterstock_golden_gate.jpg',
  'http://www.cpexecutive.com/wp-content/uploads/2011/09/091511-Empire-State-Building-Picture-EXT-DAY.jpg',
  'http://www.cpexecutive.com/wp-content/uploads/2011/09/091511-Empire-State-Building-Picture-EXT-DAY.jpg',
  'https://d3kfrplp7t05mg.cloudfront.net/cms/2012-02-26/0213_empire_630x420.jpg',
  'https://ggb113b.files.wordpress.com/2013/03/golden-gate-bridge_900px.jpg'
];

var empire_state_buildingPositives = [
  'http://www.esbnyc.com/sites/default/files/styles/timely_content_image_large__885x590_/public/default_images/brs_0330.jpg?itok=LvqTWQyo',
  'http://www.cpexecutive.com/wp-content/uploads/2011/09/091511-Empire-State-Building-Picture-EXT-DAY.jpg',
  'http://onthesetofnewyork.com/locations/sleeplessinseattle/sleepless26.jpg',
  'http://blogs.voanews.com/tedlandphairsamerica/files/2012/05/looming-cmh2.jpg',
  'https://d3kfrplp7t05mg.cloudfront.net/cms/2012-02-26/0213_empire_630x420.jpg',
  'http://www.publicdomainpictures.net/pictures/20000/nahled/empire-state-building.jpg',
  'http://inhabitat.com/nyc/wp-content/blogs.dir/2/files/2011/09/empire-state-builiding-leed-gold-1.jpg'
];

var empire_state_buildingNegatives = [
];

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
