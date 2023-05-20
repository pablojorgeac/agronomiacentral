const { Router } = require('express');
const { check } = require('express-validator');
const { login, logout, register } = require('../controllers/auth/index');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/login', login);
router.post('/logout', logout);
router.post(
  '/register',
  [
    //name, email, password, role.

    check('name')
      .notEmpty()
      .withMessage('El nombre no puede estar vacio')
      .isString()
      .withMessage('Ingresa un nombre valido'),

    check('email')
      .isEmail()
      .withMessage('Ingresa tu email valido')
      .notEmpty()
      .withMessage('El email no puede estar vacio'),

    check('password')
      .notEmpty()
      .withMessage('Ingresa una contraseña valida')
      .isLength({ min: 6 })
      .withMessage('La contraseña debe tener minimo 6 caracteres'),

    check('role')
      .isIn(['DEV_ROLE', 'ADMIN_ROLE'])
      .withMessage('Selecciona un rol'),

    (req, res, next) => {
      validateFields(req, res, next);
    },
  ],
  register
);

module.exports = router;
