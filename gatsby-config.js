module.exports = {
	siteMetadata: {
		title: 'New Zealand Javascript and Golang Developer - Carl Aiau',
		author: 'Carl Aiau',
		description: 'I build fast websites that rank better than your competition and make you more money. I love Javascript, and computer science.'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-31529108-4',
				anonymize: true
			}
		},
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true, // Print removed selectors and processed file names
				ignore: ['/components/styles.scss'], // Ignore files/folders
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
				name: "markdown-pages",
			},
		},
		`gatsby-transformer-remark`



	]
};
