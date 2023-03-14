//Estruturaçao do typescript nao se importa em restringir a tipagem

type VerifyUser = (user: User, recevUser: User) => boolean;

type User = { email: string; password: number };

const verify: VerifyUser = (user, recvUser) => {
    //Verificando se o usuario do banco e igual ao informado
    return user.email === recvUser.email && user.password === recvUser.password;
};

const Userbd = { email: 'Pedro.pedra@gmail.com', password: 12345 }; //Nao é necessario que eu indentifique que isso é um User
const RecvUser = { email: 'Pedro.pedra@gmail.com', password: 12345 };

const loogin = verify(Userbd, RecvUser);

console.log(loogin);
