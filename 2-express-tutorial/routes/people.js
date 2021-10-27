const express = require('express');
const router = express.Router();

const {
  getPeople,
  createPeople,
  creatPersonPostman,
  updatePerson,
  deletePerson
} = require('../controllers/people')

//road 1
// router.get('/', getPeople)
// router.post('/', createPeople)
// router.post('/postman', creatPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

// road 2
router.route('/').get(getPeople).post(createPeople)
router.route('/postman').post(creatPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)


module.exports = router;
