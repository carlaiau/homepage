module.exports = {
	siteMetadata: {
		title: 'NZ WordPress Developer – Carl Aiau',
		author: 'Carl Aiau',
		description: 'I build fast websites using modern technologies. Based in Dunedin, working globally.'
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
				// develop: true, // Enable while using `gatsby develop`
				// tailwind: true, // Enable tailwindcss support
				// whitelistPatterns: [/visible@l/, /hidden@l/, /uk-width\-\d\-\d@l$/],
				ignore: ['/components/styles.scss'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			}
		}
		
		
		
	]
};
