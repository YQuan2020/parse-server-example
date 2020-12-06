Parse.Cloud.define('hello', function(req, res) {
  return 'Hi';
});

Parse.Cloud.define('getData', async function(req, res) {
  const query = new Parse.Query('GameScore')
  const scores = await query.find()
  return scores
});
