import uuid from 'uuid';

export const addItem = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_ITEM',
    item: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
});

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
