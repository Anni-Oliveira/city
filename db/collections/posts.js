Posts = new Meteor.Collection('posts');
var postsArray = [
    {
        localizacao: 'Av. Contorno, Bairro: Hortensias',
        descricao: 'Buraco na rua'
    },
    {
        localizacao: 'Rua JT001, Bairro: Stars',
        descricao: 'Luminação queimada'
    },
    {
        localizacao: 'Av. Contorno, Bairro: Hortensias',
        descricao: 'Buraco na rua'
    },
    {
        localizacao: 'Av. Contorno, Bairro: Hortensias',
        descricao: 'Buraco na rua'
    },
    {
        localizacao: 'Av. Contorno, Bairro: Hortensias',
        descricao: 'Buraco na rua'
    },
    {
        localizacao: 'Av. Contorno, Bairro: Hortensias',
        descricao: 'Buraco na rua'
    }
]

if (Posts.find().count() === 0) {
	posts.forEach(function (posts) {
		Posts.insert(
			posts
		);
	});
} 
