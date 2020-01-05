import {client, md} from './';

export const state = () => ({
  fields: {}
});

export const getters = {
  viewModel({fields}) {
    const text = fields.text || '';
    return {
      text: md.render(text)
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
        content_type: 'about',
        limit: 1
      };
      const response = await client.getEntries(config);
      commit('setFields', response.items[0].fields);
    } catch (e) {
      console.error(e);
    }
  }
};
