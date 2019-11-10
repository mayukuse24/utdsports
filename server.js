// attempt to connect to database

module.exports = {
	let pool;
	const createPool = async() =>{
		pool = await mysql.createPool({
			user: 'root',
			password: '',
			database: 'utdsports',
			socketPath: '/cloudsql/utdsports:us-central1:instance-1'
		});
	};
	createPool();
}
