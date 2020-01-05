import {client} from './';

export const state = () => ({
  fields: {
    text: 'Copyright VOCALOID-ManiaX'
  }
});

export const getters = {
  viewModel({fields}) {
    const text = fields.text || '';
    return {
      text
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
        content_type: 'copyright',
        order: '-fields.text',
        limit: 1
      };
      const response = await client.getEntries(config);
      commit('setFields', response.items[0].fields);
    } catch (e) {
      console.error(e);
    }
  }
};
