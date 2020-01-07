import {client} from './';

export const state = () => ({
  fields: {}
});

export const getters = {
  viewModel({fields}) {
    const id = fields.id || '';
    return {
      id
    };
  }
};

export const mutations = {
  setFields(state, fields) {
    state.fields = fields;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'archive',
        limit: 1
      };
      const response = await client.getEntries(config);
      commit('setFields', response.items[0].fields);
    } catch (e) {
      console.error(e);
    }
  }
};
