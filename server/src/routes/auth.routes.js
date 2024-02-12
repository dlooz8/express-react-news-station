// // server/routes/auth.js
// // ...

// // Маршрут для входа пользователя
// router.post('/login', (req, res) => {
//     const { username, password } = req.body;
    
//     // Проверка логина и пароля
//     if (username === 'admin' && password === 'password') {
//       // Успешная аутентификация
//       req.session.isAuthenticated = true;
//       res.json({ message: 'Authentication successful' });
//     } else {
//       // Неверные логин или пароль
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   });
  
//   // ...