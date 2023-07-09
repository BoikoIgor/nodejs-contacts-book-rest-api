const Contact = require('../models/contact');
const { HttpError, ctrlWrapper } = require('../helpers');

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};
// const getById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contacts.getContactById(id);
//   if (!result) {
//     throw HttpError(404, 'Contact not found');
//   }
//   res.json(result);
// };
const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};
// const updateById = async (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   // Перевірка, чи передано body
//   if (!body) {
//     return res.status(400).json({ message: 'missing fields' });
//   }
//   const result = await contacts.updateContact(id, req.body);
//   if (!result) {
//     throw HttpError(404, 'Contact not found');
//   }
//   res.status(200).json(result);
// };
// const deleteById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contacts.removeContact(id);
//   if (!result) {
//     throw HttpError(404, 'Contact not found');
//   }
//   res.status(200).json({ message: 'Contact deleted' });
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  // getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  // updateById: ctrlWrapper(updateById),
  // deleteById: ctrlWrapper(deleteById),
};
