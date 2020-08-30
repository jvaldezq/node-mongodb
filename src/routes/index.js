const { Router } = require('express');
const router = Router();

const { loginUser } = require('../controllers/login/index.controller');

// Login
router.post('/login', loginUser);

// Products
// router.get('/products', getUsers);
// router.post('/users', createUsers);
// router.get('/users/:id', getUsersById);
// router.put('/users/:id', updateUsersById);


// router.get('/users', getUsers);
// router.post('/users', createUsers);
// router.get('/users/:id', getUsersById);
// router.delete('/users/:id', deleteUsersById);
// router.put('/users/:id', updateUsersById);

module.exports = router;
