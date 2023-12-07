export const server = {
    async autorize(authLogin, authPassword) {
        const users = await fetch('http://localhost:3005/users')
            .then((loadedUsers) => loadedUsers.json()
            );

        const user = users.find(({ login }) => login === authLogin);

        if (!users) {
            return {
                error: 'Такой пользователь не найден',
                res: null,
            };
        }

        if (authPassword !== user.password) {
            return {
                error: 'Неверный пароль',
                res: null,
            };
        }
        
        const session = {
            logout() {
                Object.keys(session).forEach((key) => {
                    delete session[key]
                })
            },
            removeComment() {
                console.log('Удаление комментария');
            },
        }

        return {
            error: null,
            res: session,
        }
    }
}