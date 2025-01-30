import { useParams } from 'react-router-dom';

function AboutMe() {
	// useParams hook'u ile url'den parametre alınabilir
	const params = useParams();

	const username = params.username;
	console.log(username);

	// username nasıl alınır?
	return (
		<>
			<hr></hr>
			<h1>Hakkımda</h1>
			Kullanıcı Adı: {username}
			<hr></hr>
		</>
	);
}

export default AboutMe;
