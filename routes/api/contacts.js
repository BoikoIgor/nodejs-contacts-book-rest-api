const express = require('express');
const ctrl = require('../../controllers/contacts');
const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');
const router = express.Router();

// const multer = require('multer');
// const path = require('path');

// const tempDir = path.join(__dirname, 'temp');
// const multerConfig = multer.diskStorage({
//   destination: tempDir,
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: multerConfig });

router.get('/', authenticate, ctrl.getAll);
router.get('/:id', authenticate, isValidId, ctrl.getById);
router.post('/', authenticate, validateBody(schemas.addSchema), ctrl.add);

// upload.fields([{name:"cover", maxCount:1}, {name:"subcover", maxCount:2}])
// upload.array("cover", 2)
// router.post('/', authenticate, upload.single('cover'), ctrl.add);

router.put('/:id', authenticate, isValidId, validateBody(schemas.updSchema), ctrl.updateById);
router.patch('/:id/favorite', authenticate, isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);
router.delete('/:id', authenticate, isValidId, ctrl.deleteById);

module.exports = router;
