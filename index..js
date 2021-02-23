var request = require('request');
var access_token = 'AQUVFUXebxAg1nY-LE3NjZgb5LQGRziLC7sGmaGJUqcQtB7JGuNY5BHS5_B8s3LQFGSZLLfVL8SUJymoCRW2ooB96d9KcZ0tco3qk46UrG1p9sXH6-9ASsSpErGyJaavziJn56RsoyKxg8AXyjz5MGQCo1gKLElmu7Y5SVu3kc9wJztcGrzp4B2hXFcqEstJhvuAzYyl6rMb1Y5dNsZHSc3wvMRrI0NB4O-xT-iD8nVeaUwf-bNFt2NSDKSOUjviH3BiXt-Rv7p7unIJpnzsx5EOwYbvQd8N2uiETftXjzp-s7BtlN2EcurmF6G74FEHN0lQOVr5S9De0c-AFti0JFBf9XQwhQ';

function callMeAPI(accessToken, done){
	request.get({url:"https://api.linkedin.com/v2/me",headers:{"Authorization": "Bearer "+accessToken}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}



function main(done){
	callMeAPI(access_token,function(err, res){
		if (err) {done(err)}
		else{
			var firstname = res.localizedFirstName;
			var lastname = res.localizedLastName;
			callEmailAPI(access_token,function(err, res){
				if (err) {done(err)}
				else{
					var email = res.elements[0]["handle~"].emailAddress;
					console.log(firstname+" "+lastname+" "+email);
					done(null,"success");
				}
			});
		}
	});
}

main(function(err,res){if (err)console.log(err);else console.log(res);});


