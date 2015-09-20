var clarifai;

var ran = false;

// on document ready, instantiate the Clarifai object
function init(){
    if (!ran) { //only run once
        clarifai = new Clarifai(
            {
                'accessToken': 'Ui1d9rr2c4WPy0l0wTzEDpQ7lghpbG'
            }
        );

        positive();
        negative();
        train();
    }
    ran = true;
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

    for (var i = 0; i < set_size; ++i){
        clarifai.positive(harvard_bridgePositives[i],'harvardbridge', cb).then(
            promiseResolved,
            promiseRejected 
        );
    }

    for (var i = 0; i < set_size; ++i){
        clarifai.positive(empire_state_buildingPositives[i],'empirestatebuilding', cb).then(
            promiseResolved,
            promiseRejected 
        );
    }

    for (var i = 0; i < set_size; ++i){
        clarifai.positive(hackmitPositives[i],'hackmit', cb).then(
            promiseResolved,
            promiseRejected 
        );
    }

    for (var i = 0; i < set_size; ++i){
        clarifai.positive(canyonPositives[i],'grandcanyon', cb).then(
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

    for (var i = 0; i < set_size; ++i){
        clarifai.negative(harvard_bridgeNegatives[i],'harvardbridge', cb).then(
            promiseResolved,
            promiseRejected 
        );
    }

    for (var i = 0; i < set_size; ++i){
        clarifai.negative(empire_state_buildingNegatives[i],'empirestatebuilding', cb).then(
            promiseResolved,
            promiseRejected 
        );
    }

    for (var i = 0; i < set_size; ++i){
        clarifai.negative(hackmitNegatives[i],'hackmit', cb).then(
            promiseResolved,
            promiseRejected 
        );
    }

    for (var i = 0; i < set_size; ++i){
        clarifai.negative(canyonNegatives[i],'grandcanyon', cb).then(
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
    
    clarifai.train('harvardbridge', cb).then(
        promiseResolved,
        promiseRejected 
    );
    
    clarifai.train('empirestatebuilding', cb).then(
        promiseResolved,
        promiseRejected 
    );

    clarifai.train('hackmit', cb).then(
        promiseResolved,
        promiseRejected 
    );

    clarifai.train('grandcanyon', cb).then(
        promiseResolved,
        promiseRejected 
    );

}

var scores = {
    'harvardbridge': 0,
    'ggbridge': 0,
    'empirestatebuilding': 0,
    'hackmit': 0,
    'grandcanyon': 0
};

var completedCallbacks = 0;

function cb_harvardbridge(obj) {
    scores['harvardbridge'] = obj.score;
    completedCallbacks++;
}
function cb_ggbridge(obj) {
    scores['ggbridge'] = obj.score;
    completedCallbacks++;
}
function cb_empirestatebuilding(obj) {
    scores['empirestatebuilding'] = obj.score;
    completedCallbacks++;
}
function cb_hackmit(obj) {
    scores['hackmit'] = obj.score;
    completedCallbacks++;
}
function cb_grandcanyon(obj) {
    scores['grandcanyon'] = obj.score;
    completedCallbacks++;
}

// make a prediction on a url with our concept
function predictHelper(url, keyword, callback){
    //TODO: pass in actual url
    clarifai.predict('http://www.jimcoda.com/data/photos/894_1_o1a7285_golden_gate_bridge.jpg',keyword,callback).then(
        promiseResolved,
        promiseRejected 
    );
}

function predict() {
    var url = $('#searchText').val();
    console.log(url);

    predictHelper(url, 'harvardbridge', cb_harvardbridge);
    predictHelper(url, 'ggbridge', cb_ggbridge);
    predictHelper(url, 'empirestatebuilding', cb_empirestatebuilding);
    predictHelper(url, 'hackmit', cb_hackmit);
    predictHelper(url, 'grandcanyon', cb_grandcanyon);

    while (completedCallbacks < 5) { //wait for all callbacks to finish

    }

    $('#waitingModal').modal('hide');
    console.log('finished with all predictions!');
    console.log(scores);
}

// adding training data to appropriate list
function addData() {
    
}

function promiseResolved(obj){
//    console.log('promiseResolved', obj);
}

function promiseRejected(obj){
//    console.log('promiseRejected', obj);
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
  'http://media2.govtech.com/images/770*1000/shutterstock_golden_gate.jpg',
  'https://ggb113b.files.wordpress.com/2013/03/golden-gate-bridge_900px.jpg',
  'http://boston.workbar.com/wp-content/uploads/sites/2/2015/07/Harvard_Bridge_from_Cambridge_2009.jpg',
  'https://slice.mit.edu/wp-content/uploads/2014/10/Harvard_Bridge_1.jpg',
  'http://www.mit.edu/activities/hillel/images/harvard_bridge.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Harvard_Bridge_and_Prudential_Tower.jpg/1024px-Harvard_Bridge_and_Prudential_Tower.jpg',
  'https://d3kfrplp7t05mg.cloudfront.net/cms/2012-02-26/0213_empire_630x420.jpg'
];

var hackmitPositives = [
  'http://www.bostonglobe.com/rf/image_r/Boston/2011-2020/2013/10/06/BostonGlobe.com/Metro/Images/07hackmit07.r.jpg',
  'http://c.o0bg.com/rf/image_r/Boston/2011-2020/2013/10/06/BostonGlobe.com/Metro/Images/07hackmit05.jpg',
  'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/12006195_465040947034520_4516868181427024423_n.jpg?oh=214c8387cc6295a4033e01ccfae20ea9&oe=56A238B4',
  'https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBiXma622ZjWVjD&w=470&h=246&url=https%3A%2F%2Fscontent.fsnc1-1.fna.fbcdn.net%2Fhphotos-xtf1%2Ft31.0-8%2Fs720x720%2F11234829_436841759854439_6006144642441796496_o.jpg&cfs=1&upscale=1&sx=0&sy=0&sw=720&sh=377',
  'http://careers.files.geblogs.com/careers/files/2013/10/mitopeningceremony.jpg',
  'https://pbs.twimg.com/media/CPToLhDVEAAFRcu.jpg:large',
  'https://pbs.twimg.com/media/CPTnYn6WoAAqr1I.jpg:large'
];

var hackmitNegatives = [
  'http://www.cpexecutive.com/wp-content/uploads/2011/09/091511-Empire-State-Building-Picture-EXT-DAY.jpg',
  'http://onthesetofnewyork.com/locations/sleeplessinseattle/sleepless26.jpg',
  'https://slice.mit.edu/wp-content/uploads/2014/10/Harvard_Bridge_1.jpg',
  'https://farm2.staticflickr.com/1257/539853696_5c1cf1a673_z.jpg',
  'http://media2.govtech.com/images/770*1000/shutterstock_golden_gate.jpg',
  'https://ggb113b.files.wordpress.com/2013/03/golden-gate-bridge_900px.jpg',
  'http://inhabitat.com/nyc/wp-content/blogs.dir/2/files/2011/09/empire-state-builiding-leed-gold-1.jpg'
];

var canyonPositives = [
  'http://www.papillon.com/acc_img/vault/papillon/img/canyon-hero.jpg',
  'http://www.sunshinehelicopters.com/images/grandcanyon/grand-canyon-np.jpg',
  'http://img2-2.timeinc.net/people/i/2014/sandbox/news/141020/grand-canyon-800.jpg',
  'http://www.travelwest.net/files/large/the-grand-canyon.jpg',
  'http://www.travelwest.net/files/large/grand-canyon.jpg',
  'http://www.andromedatour.sk/files/editor/image/exotika-%20grand%20canyon.jpg',
  'http://raftarizona.com/blog/wp-content/uploads/2015/06/grand-canyon-800.jpg'
];

var canyonNegatives = [
  'http://www.bostonglobe.com/rf/image_r/Boston/2011-2020/2013/10/06/BostonGlobe.com/Metro/Images/07hackmit07.r.jpg',
  'http://c.o0bg.com/rf/image_r/Boston/2011-2020/2013/10/06/BostonGlobe.com/Metro/Images/07hackmit05.jpg',
  'https://d3kfrplp7t05mg.cloudfront.net/cms/2012-02-26/0213_empire_630x420.jpg',
  'http://www.publicdomainpictures.net/pictures/20000/nahled/empire-state-building.jpg',
  'http://media2.govtech.com/images/770*1000/shutterstock_golden_gate.jpg',
  'https://ggb113b.files.wordpress.com/2013/03/golden-gate-bridge_900px.jpg',
  'https://travelpast50.com/wp-content/uploads/2013/03/golden-gate-bridge.jpg'
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
