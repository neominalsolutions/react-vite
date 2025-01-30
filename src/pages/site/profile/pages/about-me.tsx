import { useParams } from 'react-router-dom';

function AboutMe() {
	// useParams hook'u ile url'den parametre alınabilir
	const params = useParams();

	const username = params.username;
	console.log(username);

	// username nasıl alınır?
	return <>Kullanıcı Adı: {username}</>;
}

export default AboutMe;
