export { questions };

const questions = {
  categories : {
    first : {
      ask : 'Do you want Asian?',
      yes : 'asian',
      no : 'american',
      end : false
    },
    asian : {
      ask : 'Do you want spicy?',
      yes : 'thai',
      no : 'indian',
      end : true
    },
    american : {
      ask : 'Do you want cheesy?',
      yes : 'pizza',
      no : 'burgers',
      end : true
    }
  },

  params: [{
    type : 'vegan',
    ask : 'Are you vegan?',
    yes : 'vegan',
    no : ''
  }, {
    type : 'radius',
    ask : 'Something nearby?',
    yes : 1604,
    no : 10000
  }, {
    type : 'cost',
    ask : 'Something fancy?',
    yes : '3, 4',
    no : '1, 2'
  }]
};