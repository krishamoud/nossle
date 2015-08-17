Meteor.startup(function() {
  var users = [
    {
      emails: [{
        address: 'nick@exygen.io',
        verified: false,
        primary: true
      }],
      profile: {
        name: 'nickw'
      },
      services: {
        'meteor-developer': {
          id: '2jefqB8rsQ2q3TuRW',
          username: 'nickw',
          emails: [{
            address: 'nick@exygen.io',
            verified: false,
            primary: true
          }]
        }
      }
    }
  ];

  var products = [
    {
      url: 'http://play.wobblewockets.com',
      name: 'Wobble Wockets',
      tagline: 'A fun one touch game - Submitted by Kris Hamoud'
    },
    {
        url:"http://play.gamemix.com/play?id=140",
        name:"Clear the Blocks",
        tagline:"A simple one touch puzzle game - Submitted by Duylam Nguyen Ngo"
    },
    {
        url:"http://games.cdn.famobi.com/html5games/s/soccertastic/v4/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=c97349ac-313a-44c4-8190-05cd95eb2f8c&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=800#_ga=1.267459150.1559843628.1439489470",
        name:"SoccerTastic",
        tagline:"Soccertastic means awesome swipe penalty football! The aim is to score as many goals as possible within the given time. - Submitted by Kris Hamoud"
    },
    {
        url:"http://prism.clay.io/game/prism",
        name:"Prism",
        tagline:"Combine colors as you make your way up the rainbow in this addicting puzzle game! - Submitted by Duylam Nguyen Ngo"
    },
    {
        url:"http://m.silvergames.com/game/street-ball-star/",
        name:"Ball Star",
        tagline:"Throwback to 8 bit gaming with a twist of basketball. - Submitted by Duylam Nguyen Ngo"
    }

  ];
  if (Meteor.users.find({}).count() === 0) {
    _(users).each(function (user) {
      Meteor.users.insert(user);
    });
  }

  var author = Meteor.users.find().fetch()[0];
  if (Products.find({}).count() === 0) {
    _(products).each(function (product) {
      Products.insert({
        userId: author._id,
        url: product.url,
        name: product.name,
        tagline: product.tagline,
        createdAt: new Date()
      });
    });
  }
});
