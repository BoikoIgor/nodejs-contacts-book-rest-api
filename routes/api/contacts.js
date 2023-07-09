const express = require('express');
const ctrl = require('../../controllers/contacts');
const { validateBody } = require('../../middlewares');
const schemas = require('../../schemas/contacts.js');
const router = express.Router();

router.get('/', ctrl.getAll);
// router.get('/:id', ctrl.getById);
router.post('/', ctrl.add);
// router.post('/', validateBody(schemas.addSchema), ctrl.add);
// router.put('/:id', validateBody(schemas.updSchema), ctrl.updateById);
// router.delete('/:id', ctrl.deleteById);

module.exports = router;
